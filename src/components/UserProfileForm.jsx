/* eslint-disable no-debugger */
import React, { useState } from "react";
import Input from "../common/components/Input";
import { Autocomplete } from "../common/components/Autocomplete";
import locize from "../localization/main";
import { Layout, LayoutContainer } from "../common/components/Layout";
import useStyles from "./userProfileForm.styles";
import { suggestions } from "../common/constants";

function UserProfileForm() {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [country, setCountry] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.currentTarget;
    setUserName(value);
  };

  const handleSelect = (value) => {
    setCountry(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3100/api/users", {
      method: "POST",
      // credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        country,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

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
