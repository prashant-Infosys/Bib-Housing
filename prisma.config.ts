// prisma.config.ts
import { config as loadEnv } from "dotenv";
loadEnv(); // <-- loads your .env file into process.env

import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
