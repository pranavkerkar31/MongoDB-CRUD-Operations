import ConnectMongoDB from "../../../libs/mongodb";
import Topic from "../../../models/topic";
import { NextResponse } from "next/server";

// POST: Add a new topic
export async function POST(request: Request) {
  const { title, description } = await request.json();
  await ConnectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic created" }, { status: 201 });
}

// GET: Get all topics
export async function GET() {
  await ConnectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json(topics);
}

// DELETE: Delete a topic by ID (sent via query params)
export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  await ConnectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
