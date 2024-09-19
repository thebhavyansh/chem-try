import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import fs from "fs";

const prisma = new PrismaClient();

export async function POST(request) {

  try {
    const data = JSON.parse(fs.readFileSync('./src/Data/monthly.json', 'utf-8'));

    for (let item of data) {
      await prisma.mothly_pricing.create({
        data: item
      });
    }
    

    return NextResponse.json({ message: 'File uploaded and data inserted successfully' });

  } catch (error) {
    return NextResponse.json({ error: error.message, message: "Can't upload" });
  }
}
