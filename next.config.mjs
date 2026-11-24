/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — the site builds to plain HTML/CSS/JS in `out/`
  // and runs without any Node server.
  output: "export",
  images: {
    // No image optimization server in a static export.
    unoptimized: true,
  },
};

export default nextConfig;
