import { prisma } from "@/lib/prisma";

async function main() {
  const demoUserID = "4fd0cd01-ed1e-4cc1-85d2-d5d6422e5e91";

  await prisma.product.createMany({
    data: Array.from({ length: 25 }).map((_, i) => ({
      userId: demoUserID,
      name: `Product ${i + 1}`,
      price: (Math.random() * 90 + 10).toFixed(2),
      quantity: Math.floor(Math.random() * 20),
      lowStockAt: 5,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)),
    })),
  });
}
