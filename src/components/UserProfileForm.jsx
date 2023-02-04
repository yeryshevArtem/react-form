/* eslint-disable no-debugger */
import React, { useState } from "react";
import Input from "../common/components/Input";
import { Autocomplete } from "../common/components/Autocomplete";
import locize from "../localization/main";
import { Layout, LayoutContainer } from "../common/components/Layout";
import Button from "../common/components/Button";
import useStyles from "./userProfileForm.styles";
import { suggestions } from "../common/constants";
import Alert from "../common/components/Alert";
import { API_DOMAIN } from "../common/api.config";
import useAutocomplete from "../common/hooks/useAutocomplete";
import http from "../common/http";

function UserProfileForm() {
  const classes = useStyles();

  // Form state
  const { autoCompleteInput: country, setAutoCompleteInput: setCountry } =
    useAutocomplete();
  const [userName, setUserName] = useState("");

  // API state
  const [error, setError] = useState(null);
  const [userProfileData, setUserProfileData] = useState(null);

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.currentTarget;
    setUserName(value);
  };

  // clear form state
  const clearForm = () => {
    setUserName("");
    setCountry("");
  };

  // clear API state
  const clearError = () => setError(null);
  const clearData = () => setUserProfileData(null);

  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await http(`${API_DOMAIN}/api/users`, {
        method: "POST",
        body: {
          userName,
          country,
        },
      });
      setUserProfileData(data);
      clearForm();
    } catch (err) {
      setError(err);
    }
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <LayoutContainer>
        <Layout size={12}>
          <Input
            title={locize.get("userName")}
            value={userName}
            onChange={handleChange}
            placeholder={locize.get("userName")}
          />
        </Layout>
        <Layout size={12}>
          <Autocomplete
            suggestions={suggestions}
            title={locize.get("country")}
            placeholder={locize.get("country")}
            autoCompleteInput={country}
            setAutoCompleteInput={setCountry}
          />
        </Layout>
        <Layout size={12}>
          <Input
            title={locize.get("taxIdentifier")}
            placeholder={locize.get("taxIdentifier")}
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
