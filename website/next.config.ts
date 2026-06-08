import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(process.cwd(), "../"),
  outputFileTracingIncludes: {
    "/docs/[hookName]": ["../hooks/**/*"],
  },
};

export default nextConfig;

