import type { NextPage } from "next";
import React from "react";

import AuthLayout from "@components/layouts/AuthLayout/AuthLayout";
import PasswordResetPage from "@components/modules/PasswordResetPage/PasswordResetPage";

const SignIn: NextPage = () => {
  return (
    <AuthLayout title="Password Reset">
      <PasswordResetPage />
    </AuthLayout>
  );
};

export default SignIn;
