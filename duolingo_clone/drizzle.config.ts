import type { Config } from "drizzle-kit";
import "dotenv/config";
import { parse } from "pg-connection-string";

const config = parse(process.env.DATABASE_URL!);

export default {
  schema: "./db/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    host: 'ep-shy-block-a1hh8phz-pooler.ap-southeast-1.aws.neon.tech',
port: 5432,
user: 'neondb_owner',
password: 'npg_QdFm2kugPR5B',
database: 'lingo',
ssl: true

  },
} satisfies Config;