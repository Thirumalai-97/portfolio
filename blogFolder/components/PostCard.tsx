import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="p-6 bg-[#111216] rounded-xl border border-gray-800 hover:border-cyan-400 transition">
        <h3 className="text-2xl font-semibold text-white mb-2">
          {post.title}
        </h3>
        <p className="text-gray-400 line-clamp-3">{post.summary}</p>

        <div className="text-sm text-gray-500 mt-3">
          {post.date}
        </div>
      </div>
    </Link>
  );
}
