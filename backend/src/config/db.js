import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../prisma/generated/index.js";

const { Pool } = pg;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });

export default async function connectToDatabase() {
  try {
    await prisma.$connect();
    console.log("Connected to Prisma database successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}