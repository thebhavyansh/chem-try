import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request) => {
    try {
        // Get the token from cookies
        const token = request.cookies.get("token")?.value || "";
        if (!token) {
            return NextResponse.json({error:"not found"});
        }
        // Verify the token using the secret
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        
        if (!decodedToken.id) {
            return NextResponse.json({error:"missing token"})
        }

        // Return the user ID from the decoded token
        return decodedToken.id;
    } catch (error) {
        console.error("Error in getDataFromToken:", error.message);
        return NextResponse.json({error:error})
    }
};
