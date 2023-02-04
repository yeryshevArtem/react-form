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

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.currentTarget;
    setUserName(value);
  };

  const handleSubmit = () => {};

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
          />
        </Layout>
        <Layout size={12}>
          <Input title={locize.get("userName")} placeholder="User Name" />
        </Layout>
      </LayoutContainer>
    </form>
  );
}

export default UserProfileForm;
