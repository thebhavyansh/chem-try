import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { NextResponse } from 'next/server';

export async function POST(request) {
    try{
        const reqBody = await request.json();
        const {name,address,email} = reqBody;
        console.log(reqBody)
        if(name){
            const user = await prisma.user.update({
                where: {
                  email: email,
                },
                data:{
                    name:name,
                }
              })
        }
        if(address){
            const user = await prisma.user.update({
                where: {
                  email: email,
                },
                data:{
                    address:address
                }
              })
        }
        console.log(reqBody)

        if(!user){
            return NextResponse.json({error:"User is Invalid"})
        }
        console.log("user exists")
        
        return NextResponse.json({message:"changes successfully"});
    }
    catch(error){
        return NextResponse.json({error:error})
    }
}