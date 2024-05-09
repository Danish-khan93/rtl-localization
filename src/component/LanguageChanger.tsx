import React from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
const LanguageChanger = () => {
  const router = useRouter();

  console.log(router.locales);

  return (
    <Box>
      {router.locales?.map((locale) => {
        return (
          <Link href={router.asPath} locale={locale} key={locale}>
            {locale === "en-US" ? "English" : locale === "ar" ? "عربى" : null}
          </Link>
        );
      })}
    </Box>
  );
};

export default LanguageChanger;
