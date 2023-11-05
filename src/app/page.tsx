import Posts from "@/components/Posts";



function getPosts() {
  return [
    {
      id: "1",
      title: "Prisma is the perfect ORM for Next.js",
      content:
        "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
      published: false,
      author: {
        name: "Nikolas Burk",
        email: "burk@prisma.io",
      },
    },
  ];
}

export default function Home() {
  const posts = getPosts();
  return (
    <main className="">
      <Posts posts={posts} />
    </main>
  );
}
