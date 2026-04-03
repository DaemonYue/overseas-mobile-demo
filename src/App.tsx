// import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./components/LanguageSwitch";

import Users from "./components/Users";
import Count from "./components/Count";

function App() {
  const { t } = useTranslation();
  return (
    <div className="app-container">
      <LanguageSwitch />
      <h2>{t("language")}</h2>
      <Users />
      <Count />
    </div>
  );
}

export default App;