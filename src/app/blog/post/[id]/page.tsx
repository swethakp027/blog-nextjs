import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  
  const path = await params;
  const post = posts.find((post) => post.id === path.id);
  if(!post){
    return notFound();
  }
  return (
    <>
      <h1>Post</h1>
      {post && <Post {...post} isPostLists={false}/>}
    </>)
}