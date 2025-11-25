"use client";

import { useState } from "react";

export default function Search({ posts }) {
  const [query, setQuery] = useState("");

  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mt-10">
      <input
        type="text"
        placeholder="Search posts..."
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-black border border-gray-700 text-gray-200
                   px-4 py-3 rounded-lg focus:border-cyan-400 outline-none"
      />

      <div className="mt-6 space-y-6">
        {filtered.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-4 border border-gray-800 hover:border-cyan-400 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-white">{post.title}</h3>
            <p className="text-gray-400">{post.summary}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
