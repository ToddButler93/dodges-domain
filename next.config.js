/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tamods.org",
        port: "",
        pathname: "/assets/images/**",
      },
      {
        protocol: "https",
        hostname: "cdn1.epicgames.com",
        port: "",
        pathname: "/spt-assets/28f7b2fa11de437db22450f7f43b584d/**",
      },
    ],
  },
};

export default config;
