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

function UserProfileForm() {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(null);
  const [userProfileData, setUserProfileData] = useState(null);

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.currentTarget;
    setUserName(value);
  };

  const handleSelect = (value) => {
    setCountry(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    debugger;
    try {
      const response = await fetch("http://localhost:3100/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          country,
        }),
      });

      const data = await response.json();
      setUserProfileData(data);
    } catch (err) {
      setError(err);
    }
  };

  const clearError = () => setError(null);
  const clearData = () => userProfileData(null);

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
            onSelect={handleSelect}
          />
        </Layout>
        <Layout size={12}>
          <Input title={locize.get("userName")} placeholder="User Name" />
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
