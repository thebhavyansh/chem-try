import { NextResponse } from "next/server";

export async function POST(request){
    try{
     const s = await request.json();
     console.log(s);
     const r1 = [];
     var i =0;
     while(i<s.length){
        if(s[i].Region === "r1"){
            r1.push(s[i]);
        }
     }
     return NextResponse.json({message:"success",r1})
    }
    catch(error){
        return NextResponse.json({error:error,message:"error in catch"})
    }
    
}