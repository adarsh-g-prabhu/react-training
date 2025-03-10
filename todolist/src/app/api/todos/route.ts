import { NextResponse } from "next/server";
import { connectDb } from "../../lib/mongodb";
import Todo from '../../models/todo'


export async function GET() {
  await connectDb();
  const todos = await Todo.find({});
  return NextResponse.json(todos);
}


export async function POST(req: Request) {
  await connectDb();
  const { task } = await req.json();
  if (!task) return NextResponse.json({ error: "Task is required" }, { status: 400 });

  const newTodo = await Todo.create({ task });
  return NextResponse.json(newTodo, { status: 201 });
}


export async function DELETE(req: Request) {
  await connectDb();
  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 });

  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Todo deleted" }, { status: 200 });
}
