import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./components/LanguageSwitch";

import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

function App() {
  const { t } = useTranslation();
  return (
    <div className="app-container">
      <LanguageSwitch />
      <h2>{t("language")}</h2>
      <UserList />
      <UserForm />
    </div>
  );
}

export default App;