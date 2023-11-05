"use client";
import { useRouter } from "next/navigation";
import { PostProps } from ".";

type Props = {
  post: PostProps;
};

function Post({ post }: Props) {
  const router = useRouter();
  const { id, title, author, content, published } = post;

  return (
    <div
      onClick={() => router.push(`/post/${id}`)}
      className="mt-4 px-4 py-4 bg-gray-200 rounded-md transition-all hover:shadow-md hover:cursor-pointer"
    >
      <p className="text-lg font-medium">{title}</p>
      <p className="text-sm font-light">By {author?.name}</p>
    </div>
  );
}

export default Post;
