import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsPath = path.join(process.cwd(), "content/posts");

export function getAllPosts() {
  const files = fs.readdirSync(postsPath);

  return files
    .map((filename) => {
      const filePath = path.join(postsPath, filename);
      const file = fs.readFileSync(filePath, "utf8");
      const { data } = matter(file);

      return {
        ...data,
        slug: filename.replace(".mdx", ""),
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const filePath = path.join(postsPath, `${slug}.mdx`);
  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);

  return { ...data, content };
}
