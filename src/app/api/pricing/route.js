import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import fs from "fs"
const prisma = new PrismaClient();
export async function POST(request){
    try{
      
      const product = await request.json();
      console.log("working till here")
      console.log(product)
      const prod = product.products
      console.log(prod)
      const Product = await prisma.mothly_pricing.findMany({
            where: {
              Product_Varient: prod,
            },
          })
    console.log("working till here")
    const monthOrder = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12,
    };
    
    // Sort by year and then by month
    Product.sort((a, b) => {
      if (a.Year !== b.Year) {
        return a.Year - b.Year; // Sort by year first
      } else {
        return monthOrder[a.Month] - monthOrder[b.Month]; // Then sort by month
      }
    });

          return NextResponse.json({message:"working",Product})
    }
    catch(error){
        return NextResponse.json({error:error,message:"error in catch"})
    }
    
}