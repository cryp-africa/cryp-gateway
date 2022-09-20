import React from "react";

import MobileFooter from "@components/layouts/MobileFooter/MobileFooter";
import Overview from "@components/organisms/DashboardPage/Overview/Overview";

const DashboardPage = () => {
  return (
    <div className="">
      <Overview />
      <MobileFooter />
    </div>
  );
};

export default DashboardPage;
