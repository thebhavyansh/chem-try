import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import fs from "fs"
const prisma = new PrismaClient();
export async function POST(request){
    const Product = await request.json();
    console.log(Product)
    try{
        const Product = await prisma.mothly_pricing.findMany({
            where: {
              Product: 562,
            },
          })
    
    console.log("working till here")
    console.log(Product)
          return NextResponse.json({message:"working",Product})
    }
    catch(error){
        return NextResponse.json({error:error,message:"error in catch"})
    }
    
}