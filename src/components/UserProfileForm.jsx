import React from "react";
import Input from "../common/components/Input";
import Autocomplete from "../common/components/Autocomplete";
import locize from "../localization/main";
import Layout from "../common/components/Layout";
import LayoutContainer from "../common/components/LayoutContainer";
import useStyles from "./userProfileForm.styles";
import { suggestions } from "../common/constants";

function UserProfileForm() {
  const classes = useStyles();
  return (
    <form className={classes.userProfileFormContainer}>
      <LayoutContainer>
        <Layout size={12}>
          <Input title={locize.get("userName")} placeholder="User Name" />
        </Layout>
        <Layout size={12}>
          <Autocomplete
            suggestions={suggestions}
            title={locize.get("userName")}
            placeholder="User Name"
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
