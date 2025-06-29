import type { NextConfig } from "next";
import UnoCSS from "@unocss/webpack";
import unoConfig from "./uno.config";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.plugins.push(UnoCSS(unoConfig));
    return config;
  },
};

export default nextConfig;
