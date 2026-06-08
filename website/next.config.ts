import type { NextConfig } from "next";
import path from "path";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  ...(isDev
    ? {}
    : {
        outputFileTracingRoot: path.join(process.cwd(), "../"),
        outputFileTracingIncludes: {
          "/docs/[hookName]": ["../hooks/**/*"],
        },
      }),
};

export default nextConfig;

