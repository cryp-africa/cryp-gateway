import type { NextPage } from "next";
import React from "react";

import TransactionsLayout from "@components/layouts/TransactionsLayout/TransactionsLayout";
import LinkBankAccountPage from "@components/modules/LinkBankAccountPage/LinkBankAccountPage";

const LinkBankAccount: NextPage = () => {
  const getBreadCrumbs = () => {
    return [
      { text: "Dashboard", url: "/dashboard" },
      { text: "Withdraw", url: `/dashboard/withdraw` },
      { text: "Link Bank Account", url: `/dashboard/withdrawlink-bank-account` },
    ];
  };

  return (
    <TransactionsLayout breadcrumbs={getBreadCrumbs()} title="Withdraw">
      <LinkBankAccountPage />
    </TransactionsLayout>
  );
};

export default LinkBankAccount;
