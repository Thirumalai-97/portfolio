import { getPostBySlug, getAllPosts } from "@/lib/posts";
import MDXComponents from "@/components/MDXComponents";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <article>
      <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-10">{post.date}</p>

      <div className="prose prose-invert prose-cyan max-w-none">
        <MDXRemote source={post.content} components={MDXComponents} />
      </div>
    </article>
  );
}
