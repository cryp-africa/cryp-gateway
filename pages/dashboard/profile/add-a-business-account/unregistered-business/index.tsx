import type { NextPage } from "next";
import React from "react";

import TransactionsLayout from "@components/layouts/TransactionsLayout/TransactionsLayout";
import UnRegisteredBusinessPage from "@components/modules/AddABusinessPage/UnRegisteredBusinessPage";

const UnRegisteredBusiness: NextPage = () => {
  const getBreadCrumbs = () => {
    return [
      { text: "Dashboard", url: "/dashboard" },
      { text: "Profile", url: `/dashboard/profile` },
      { text: "Add A Business Account", url: `/dashboard/profile/add-a-business-account` },
      { text: "UnRegistered Business" },
    ];
  };
  return (
    <TransactionsLayout breadcrumbs={getBreadCrumbs()} title="Add A Business Account">
      <UnRegisteredBusinessPage />
    </TransactionsLayout>
  );
};

export default UnRegisteredBusiness;
