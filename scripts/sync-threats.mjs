import { neon } from "@neondatabase/serverless";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
  console.error("❌ Error: DATABASE_URL is missing from .env.local");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);
const THREAT_FEED_URL =
  "https://raw.githubusercontent.com/Phishing-Database/Phishing.Database/master/phishing-domains-ACTIVE.txt";
const BATCH_SIZE = 5000;

// --- COMMAND LINE FLAG PARSING ---
const args = process.argv.slice(2);
const shouldForceReset = args.includes("--force");

// Parse out a custom item numerical cap if provided (e.g., --limit=500)
const limitArg = args.find((arg) => arg.startsWith("--limit="));
const customLimit = limitArg ? parseInt(limitArg.split("=")[1], 10) : null;

async function syncThreatRegistry() {
  console.log("🚀 Initializing HackerHare Operational Intelligence Sync...");

  try {
    // 1. Check for the --force execution override block
    if (shouldForceReset) {
      console.log(
        "⚠️  --force flag detected. Purging all existing rows from threat_registry...",
      );
      await sql`TRUNCATE TABLE threat_registry;`;
      console.log("🧹 Database table successfully cleared.");
    }

    console.log("⏳ Fetching remote active threat feeds...");
    const response = await fetch(THREAT_FEED_URL);
    if (!response.ok)
      throw new Error(`Network failure: ${response.statusText}`);

    const rawText = await response.text();
    const rawDomains = rawText.split("\n").filter(Boolean);
    console.log(
      `📦 Found ${rawDomains.length.toLocaleString()} total domains in live repo.`,
    );

    // 2. Decide how much of the dataset to pull based on parameters
    let targetSlice = rawDomains;
    if (customLimit && !isNaN(customLimit)) {
      console.log(
        `🎯 Custom slice restriction applied. Isolation size: ${customLimit.toLocaleString()}`,
      );
      targetSlice = rawDomains.slice(0, customLimit);
    } else if (!shouldForceReset && !customLimit) {
      // Default safety fallback if running regularly without wiping data
      console.log(
        `ℹ️ No limit supplied. Processing standard production batch (Top 10,000)...`,
      );
      targetSlice = rawDomains.slice(0, 10000);
    } else if (shouldForceReset && !customLimit) {
      console.log(
        `🔥 Re-syncing the entire remote dataset because table was truncated...`,
      );
    }

    console.log("⚡ Generating SHA-256 hashes in local memory...");
    const uniqueHashes = [
      ...new Set(
        targetSlice.map((domain) =>
          crypto
            .createHash("sha256")
            .update(domain.trim().toLowerCase())
            .digest("hex"),
        ),
      ),
    ];

    console.log(
      `📤 Executing batched array streaming to NeonDB (Chunks of ${BATCH_SIZE})...`,
    );
    let totalInserted = 0;

    for (let i = 0; i < uniqueHashes.length; i += BATCH_SIZE) {
      const currentBatch = uniqueHashes.slice(i, i + BATCH_SIZE);

      await sql`
        INSERT INTO threat_registry (domain_hash, risk_type)
        SELECT unnest(${currentBatch}::text[]), 'phishing'
        ON CONFLICT (domain_hash) DO NOTHING
      `;

      totalInserted += currentBatch.length;
      console.log(
        `   ↳ Sync Progress: ${totalInserted.toLocaleString()} / ${uniqueHashes.length.toLocaleString()} rows uploaded.`,
      );
    }

    console.log(
      "🎉 Operation complete! NeonDB threat catalog is fully modernized.",
    );
    process.exit(0);
  } catch (error) {
    console.error("❌ Execution error:", error);
    process.exit(1);
  }
}

syncThreatRegistry();
