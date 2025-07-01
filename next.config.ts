import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "ucmeinpdbhgkaegikekw.supabase.co",
      "image.tmdb.org", // ✅ TMDb görselleri için eklendi
    ],
  },
};

export default nextConfig;
