import Link from "next/link";
import React, { JSX } from "react";

export default function Component({
  id,
  title,
  content,
  date,
  isPostLists,
}: {
  id: string;
  title: string;
  content: string;
  date: string;
  isPostLists: boolean;
}) {
  return (
    <div key={id} className="border border-gray-200 p-4 my-4">
      <h2>{title}</h2>
      <p className="text-gray-500">{date}</p>
      <p>{content}</p>
    
      <div className="pt-3">{isPostLists && <Link className="p-5 outline outline-1 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded" href={`/blog/post/${id}`}>Open Post</Link>}
    </div>
    </div>
  );
}
