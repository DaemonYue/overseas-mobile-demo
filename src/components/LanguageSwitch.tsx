import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitch: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="lang-switch">
      <button className={i18n.language === "zh" ? "active" : ""}
        onClick={() => i18n.changeLanguage("zh")}>
        {t("chinese")}
      </button>
      <button className={i18n.language === "en" ? "active" : ""}
        onClick={() => i18n.changeLanguage("en")}>
        {t("english")}
      </button>
    </div>
  );
};

export default LanguageSwitch;