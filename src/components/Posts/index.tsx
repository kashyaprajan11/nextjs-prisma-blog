"use client";
import * as React from "react";
import Post from "./Post";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

type Props = {
  posts: PostProps[];
};

function Posts(props: Props) {
  return (
    <div>
      {props.posts.map((post: PostProps) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
