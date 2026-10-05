/** @type {import("next").NextConfig} */
export default {
  devIndicators: false,
  distDir: process.env.NEXT_DIST_DIR || ".next",
};
