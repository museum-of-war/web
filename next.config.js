/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ['metahistory.gallery'],
  },
};

function assertEnvVar(name) {
  if (!process.env[name]) {
    throw new Error(`${name} environment variable is not set`);
  }
}

assertEnvVar("NEXT_PUBLIC_INFURA_API");
assertEnvVar("NEXT_PUBLIC_ALCHEMY_API");

module.exports = nextConfig;
