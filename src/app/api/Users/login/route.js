import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";
import { cookies } from 'next/headers';

export async function POST(request) {
    try{
        const reqBody = await request.json();
        const {email,password} = reqBody
        console.log(reqBody)

        const user = await prisma.user.findUnique({
            where: {
              email: email,
            },
          })
          
        if(!user){
            return NextResponse.json({error:"User is Invalid"})
        }
        console.log("user exists")
        const validPassword =  await bcryptjs.compare(password,user.password);
        if(!validPassword){
            return NextResponse.json({error:"Check Your Credentials"})
        }

        const tokenData = {
            id:user.id,
            email:user.email, 
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET,{expiresIn:'24h'})
        const response = NextResponse.json({
            message:"Logged In success",
            success:true
        })
        console.log(response)
        response.cookies.set("token", token, {
            httpOnly: true, 
        })
        return response;
    }
    catch(error){
        return NextResponse.json({error:error})
    }
}