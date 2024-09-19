import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import {NextRequest,NextResponse} from 'next/server'
import { getDataFromToken } from "../../../../helpers/getDataFromToken";

export async function POST(request) {
    try{
      //extract data from token
    const userId =  await getDataFromToken(request)
    if(userId.error){
        return NextResponse.json({error:"expired"})
    }
  
        const user = await prisma.user.findUnique({
        where: {
            id:userId
        },
        select:{
            id:true,
            name:true,
            city:true,
            address:true,
            email:true,
            password:false,
            services:true,
            phoneNumber:true
        }
    })
    
   
    // console.log(user)
    if(!user){
        return NextResponse.json({error:"user not found"})
     }
     return NextResponse.json({message:"user found",user})
    }
    catch(error){
        return NextResponse.json({error:error.message})
    }
}