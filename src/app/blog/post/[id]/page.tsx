import Post from "@/app/ui/components/posts/Post";
import { notFound } from "next/navigation";
import { env } from "process";

// export const dynamic = 'force-dynamic';

export default async function Page({ params }: { params: { id: string } }) {
  const path = await params;

  const response = await fetch(`${env.SITE_URL}/api/post/${path.id}`,{next: { revalidate: 10 },});
  const post = await response.json();

  if (!post) {
    return notFound();
  }
  return (
    <>
      <h1>Post</h1>
      {post && <Post {...post} isPostLists={false} />}
    </>
  );
}