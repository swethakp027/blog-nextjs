import { NextRequest } from "next/server";
import { connectTODb } from "../../db";

type Params = {
  id: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { db } = await connectTODb();
  const path = await params;

  const post = await db.collection("posts").findOne({ id: path.id });

  if (!post) {
    return new Response("post not found!", {
      status: 404,
    });
  }

  return new Response(JSON.stringify(post), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
