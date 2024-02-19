/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true, // 코드 경량화
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
