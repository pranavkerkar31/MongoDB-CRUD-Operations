import ConnectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { newTitle, newDescription } = await request.json();
  await ConnectMongoDB();
  await Topic.findByIdAndUpdate(params.id, {
    title: newTitle,
    description: newDescription,
  });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
    const { id } = params;
    await ConnectMongoDB();
    const topic = await Topic.findOne({ _id: id });
    return NextResponse.json(topic);
}