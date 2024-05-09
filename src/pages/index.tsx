import React from "react";
import useTranslation from 'next-translate/useTranslation'

const Index = () => {
  const { t } = useTranslation(); // Specify the namespace for translation
  return <div className="bg-green-400 py-[300px]">{t("Home title")}</div>; // Access translation by key
};

export default Index;
