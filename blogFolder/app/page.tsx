import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Thirumalai — Quantum Engineer & Researcher
        </h1>
        <p className="text-gray-300 text-lg">
          Writing about Quantum Computing, AI, Deep Tech, and life experiences.
        </p>
      </section>

      <section>
        <h2 className="text-xl text-cyan-400 font-semibold mb-4">Latest Posts</h2>
        <div className="flex flex-col space-y-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
