import postgres from "postgres";
import { env } from "../env.mjs";

const DB_URL = env.POSTGRES_URL;
console.log(DB_URL);
if (!DB_URL) {
  throw new Error(
    "Please define the DB_URL environment variable inside .env.local"
  );
}

export const sql = postgres(DB_URL, {}); // will use psql environment variables
