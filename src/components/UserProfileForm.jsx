/* eslint-disable no-debugger */
import React, { useState } from "react";
import Input from "../common/components/Input";
import { Autocomplete } from "../common/components/Autocomplete";
import locize from "../localization/main";
import { Layout, LayoutContainer } from "../common/components/Layout";
import useStyles from "./userProfileForm.styles";
import { suggestions } from "../common/constants";
import Alert from "../common/components/Alert";

function UserProfileForm() {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(null);

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
      console.log(data);
    } catch (err) {
      debugger;
      setError(err);
    }
  };

  const clearError = () => setError(null);

  return (
    <form className={classes.userProfileFormContainer} onSubmit={handleSubmit}>
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
        {error && (
          <Layout size={12}>
            <Alert
              message={locize.get("createUserProfileErr")}
              type="error"
              onClose={clearError}
            />
          </Layout>
        )}
        <Layout size={12}>
          <button type="submit" className="btn btn-primary">
            {locize.get("submit")}
          </button>
        </Layout>
      </LayoutContainer>
    </form>
  );
}

export default UserProfileForm;
