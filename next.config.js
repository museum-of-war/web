/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  async redirects() {
    return [
      {
        source: '/hall',
        destination: '/collection/hall',
        permanent: true,
      },
      {
        source: '/warline',
        destination: '/collection/warline',
        permanent: true,
      },
    ];
  },
};

function assertEnvVar(name) {
  if (!process.env[name]) {
    throw new Error(`${name} environment variable is not set`);
  }
}

assertEnvVar('NEXT_PUBLIC_INFURA_API');
assertEnvVar('NEXT_PUBLIC_ALCHEMY_API');

module.exports = nextConfig;
