import Post from "@/app/ui/components/posts/Post";
import { env } from "process";

export const dynamic = 'force-dynamic';

export default async function Page() {
  const response = await fetch(`${env.SITE_URL}/api/posts`);
  const posts = await response.json();
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post: any) => (
        <Post key={post.id} {...post} isPostLists={true} />
      ))}
    </>
  );
}