import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "ko",
  }
};

export default nextConfig;
