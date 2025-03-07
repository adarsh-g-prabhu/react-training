import { connectDb } from "../../../lib/mongodbConnect";
import mongoose from "mongoose";
import { NextRequest,NextResponse } from "next/server";
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    place: { type: String, required: true }
  },
  { collection: "myCollection" } 
);


export const User = mongoose.models.User || mongoose.model("User", UserSchema);

export async function GET() {
  try {
    await connectDb(); 
    const data = await User.find({}); 
    return NextResponse.json(data,{status:200})
    // return new Response(JSON.stringify(data), { 
    //   status: 200, 
    //   headers: { "Content-Type": "application/json" } 
    // });

  } catch (error) {
    return NextResponse.error;
    // return new Response(JSON.stringify({ error: "Failed to fetch data" }), { 
    //   status: 500, 
    //   headers: { "Content-Type": "application/json" } 
    // });
  }
}


export async function POST(req: Request) {
  try {
    await connectDb();
    const { name, age, place } = await req.json();

    if (!name || !age || !place) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const newUser = new User({ name, age, place });
    await newUser.save(); 

    return new Response(JSON.stringify({ message: "User created", user: newUser }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to create user" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}


