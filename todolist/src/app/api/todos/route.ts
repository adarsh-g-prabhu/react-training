import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "../../lib/mongodb";
import Todo from "../../models/todo";


export async function GET(req: NextRequest) {
  try {
    console.log("Fetching todos...");
    await connectDb();
    const userId = req.headers.get("user-id");

    if (!userId) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const todos = await Todo.find({ userId });
    return NextResponse.json({ success: true, todos });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  try {
    await connectDb();
    const userId = req.headers.get("user-id");

    if (!userId) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const { task } = await req.json();
    if (!task) {
      return NextResponse.json({ success: false, message: "Task is required" }, { status: 400 });
    }

    const newTodo = await Todo.create({ userId, task, completed: false });
    return NextResponse.json({ success: true, todo: newTodo });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}


export async function PUT(req: NextRequest) {
  try {
    await connectDb();
    const userId = req.headers.get("user-id");

    if (!userId) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const { todoId, completed } = await req.json();
    if (!todoId) {
      return NextResponse.json({ success: false, message: "Todo ID is required" }, { status: 400 });
    }

    const todo = await Todo.findOne({ _id: todoId, userId });
    if (!todo) {
      return NextResponse.json({ success: false, message: "Todo not found" }, { status: 404 });
    }

    todo.completed = completed;
    await todo.save();

    return NextResponse.json({ success: true, todo });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// Delete a todo
export async function DELETE(req: NextRequest) {
  try {
    await connectDb();
    const userId = req.headers.get("user-id");

    if (!userId) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const { todoId } = await req.json();
    if (!todoId) {
      return NextResponse.json({ success: false, message: "Todo ID is required" }, { status: 400 });
    }

    const todo = await Todo.findOne({ _id: todoId, userId });

    if (!todo) {
      return NextResponse.json({ success: false, message: "Todo not found" }, { status: 404 });
    }

    await Todo.deleteOne({ _id: todoId });
    return NextResponse.json({ success: true, message: "Todo deleted" });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
