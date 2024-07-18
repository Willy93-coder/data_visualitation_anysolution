import postgres from "postgres";

const DB_URL = process.env.POSTGRES_URL;
console.log(DB_URL);
if (!DB_URL) {
  throw new Error(
    "Please define the DB_URL environment variable inside .env.local"
  );
}

export const sql = postgres(DB_URL, {}); // will use psql environment variables
