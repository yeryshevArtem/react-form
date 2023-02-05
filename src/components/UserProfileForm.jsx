import React, { useState, useRef } from "react";
import Input from "../common/components/Input";
import { Autocomplete } from "../common/components/Autocomplete";
import locize from "../localization/main";
import { Layout, LayoutContainer } from "../common/components/Layout";
import Button from "../common/components/Button";
import { suggestions } from "../common/constants";
import Alert from "../common/components/Alert";
import { API_DOMAIN } from "../common/api.config";
import useAutocomplete from "../common/hooks/useAutocomplete";
import TaxIdentifierInput from "./TaxIdentifierInput";
import http from "../common/http";
import useValidation from "../hooks/useValidation";
import useStyles from "./userProfileForm.styles";

function UserProfileForm() {
  const classes = useStyles();
  const formEl = useRef();

  // Form state
  const { autoCompleteInput: country, setAutoCompleteInput: setCountry } =
    useAutocomplete();
  const { wasValidatedClass, validate, removeValidErr } = useValidation(formEl);

  const [userName, setUserName] = useState("");
  const [taxId, setTaxId] = useState("");

  // API state
  const [error, setError] = useState(null);
  const [userProfileData, setUserProfileData] = useState(null);

  // Form handlers
  const handleChangeUsername = (event) => {
    event.preventDefault();
    const { value } = event.currentTarget;
    setUserName(value);
  };

  const handleChangeTaxId = (val) => {
    setTaxId(val);
  };

  const handleChangeCountry = (value) => {
    setCountry(value);
  };

  // clear form state
  const clearForm = () => {
    setUserName("");
    setCountry("");
    setTaxId("");
  };

  // clear API state
  const clearError = () => setError(null);
  const clearData = () => setUserProfileData(null);

  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();

    const valid = validate();
    if (valid) {
      try {
        const data = await http(`${API_DOMAIN}/api/users`, {
          method: "POST",
          body: {
            userName,
            country,
            taxId,
          },
        });
        setUserProfileData(data);
        clearForm();
        removeValidErr();
      } catch (err) {
        setError(err);
      }
    }
  };
  // In perspective we can create FormProvider as common component
  return (
    <form
      ref={formEl}
      className={`${classes.container} needs-validation ${wasValidatedClass}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <LayoutContainer>
        <Layout size={12}>
          <Input
            required
            minlength={3}
            title={locize.get("userName")}
            value={userName}
            onChange={handleChangeUsername}
            placeholder={locize.get("userName")}
            idAttr="userName"
          />
        </Layout>
        <Layout size={12}>
          <Autocomplete
            suggestions={suggestions}
            title={locize.get("country")}
            placeholder={locize.get("country")}
            autoCompleteInput={country}
            setAutoCompleteInput={handleChangeCountry}
            idAttr="country"
            required
            pattern={suggestions.join("|")}
          />
        </Layout>
        <Layout size={12}>
          <TaxIdentifierInput
            taxIdValue={taxId}
            handleChangeTaxId={handleChangeTaxId}
            idAttr="taxId"
            required
          />
        </Layout>
        {userProfileData && (
          <div className={classes.gutterMedium}>
            <Layout size={12}>
              <Alert
                message={locize.get("createUserProfileSuccess")}
                type="success"
                onClose={clearData}
              />
            </Layout>
          </div>
        )}
        {error && (
          <div className={classes.gutterMedium}>
            <Layout size={12}>
              <Alert
                message={locize.get("createUserProfileErr")}
                type="error"
                onClose={clearError}
              />
            </Layout>
          </div>
        )}
        <div className={classes.gutterMedium}>
          <Layout size={12}>
            <Button elementType="submit" type="primary">
              {locize.get("submit")}
            </Button>
          </Layout>
        </div>
      </LayoutContainer>
    </form>
  );
}

export default UserProfileForm;
