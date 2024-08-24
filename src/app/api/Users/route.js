import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    // Parse the request body
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: 'Email already in use' }, { status: 409 }); // 409 Conflict
    }

    // Create a new user in the database
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password, // Normally, you'd hash the password before saving it
      },
    });
    
    // Optionally, send a verification email here
    // Example: await sendVerificationEmail(user.email);

    // Respond with the created user data (excluding the password for security reasons)
    return NextResponse.json({ user: { id: user.id, name: user.name, email: user.email } }, { status: 201 });
  } catch (error) {
    // Handle errors and respond with a 500 status code
    console.error('Error creating user:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
