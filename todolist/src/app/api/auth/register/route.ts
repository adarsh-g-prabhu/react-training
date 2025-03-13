import { NextResponse,NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { connectDb } from "../../../lib/mongodb";
import User from "../../../models/user";

export async function POST(req: NextRequest) {
  try {
    await connectDb();
    const { name, email, password } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }


    const hashedPassword = await bcrypt.hash(password, 10);

 
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return NextResponse.json({ message: "User registered successfully!" }, { status: 201 });
  } catch  {
    return NextResponse.json({ error: "Error registering user" }, { status: 500 });
  }
}
