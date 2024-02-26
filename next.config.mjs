/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {hostname : "s4.anilist.co"},
            {hostname: "cdn.myanimelist.net"},
            {hostname: "avatars.githubusercontent.com"},
            {hostname: "img.youtube.com"},
            {hostname: "image.myanimelist.net"}
        ]
    }
};

export default nextConfig;
