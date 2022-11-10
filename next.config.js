/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // experimental: { appDir: true },
  images: {
    domains: ['t1.daumcdn.net'] // 이곳에 에러에서 hostname 다음 따옴표에 오는 링크를 적으면 된다.
  }
}

module.exports = nextConfig
