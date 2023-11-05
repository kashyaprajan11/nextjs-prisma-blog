function getPostById(id: Number) {
  return {
    id: "1",
    title: "Prisma is the perfect ORM for Next.js",
    content:
      "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
    published: false,
    author: {
      name: "Nikolas Burk",
      email: "burk@prisma.io",
    },
  };
}

export default function Page({ params }: { params: { id: Number } }) {
  const postData = getPostById(params.id);
  return (
    <div>
      <p>{postData.title}</p>
    </div>
  );
}
