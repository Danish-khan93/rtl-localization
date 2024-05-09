/** @type {import('next').NextConfig} */
// const nextTranslate = require("next-translate");
import nextTranslate from "next-translate"
const nextConfig = {
  ...nextTranslate(),
};

export default nextConfig;
