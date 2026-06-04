import { neon } from "@neondatabase/serverless";
import { connection } from "next/server";

function getSql() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
  }

  return neon(databaseUrl);
}

export async function getTotalBlocked(): Promise<number | null> {
  await connection();

  try {
    const sql = getSql();
    const rows =
      await sql`SELECT total_blocked FROM global_metrics WHERE id = 1`;
    const row = rows[0] as { total_blocked: number } | undefined;

    return row?.total_blocked ?? null;
  } catch {
    return null;
  }
}

export async function incrementTotalBlocked(): Promise<void> {
  const sql = getSql();
  await sql`UPDATE global_metrics SET total_blocked = total_blocked + 1 WHERE id = 1`;
}
