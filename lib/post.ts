import matter from "gray-matter";
import { glob } from "glob";
import { slug as slugify } from "@/lib/slug";
import { remark } from "remark";
import remarkHtml from "remark-html";
import path from "path";
import { readFileSync, writeFileSync } from "fs";
import * as Log from "next/dist/build/output/log";

const isDev = process.env.NODE_ENV === "development";

export interface Post {
  title: string;
  slug: string;
  content: string;
}

export const markdownToHtml = async (markdown: string): Promise<string> => {
  const result = await remark().use(remarkHtml).process(markdown);

  return result.toString();
};

export const globPost = (): string[] => {
  return glob.sync("content/*.md", {
    nodir: true,
  });
};

export const getPosts = async (): Promise<Post[]> => {
  const cachePath = path.resolve(".next/cache/posts.json");

  isDev && Log.info(`cachePath: ${cachePath}`);

  try {
    return JSON.parse(readFileSync(cachePath, "utf8"));
  } catch (error) {
    // Log.error("Post cache not initialized");
  }

  Log.wait("Generate post cache");

  const posts: Post[] = await Promise.all(
    globPost().map(async (item) => {
      const { data: frontmatter, content } = matter.read(item);

      return {
        title: frontmatter.title,
        slug: slugify(frontmatter.title),
        content: await markdownToHtml(content),
      };
    })
  );

  try {
    writeFileSync(cachePath, JSON.stringify(posts), "utf-8");

    Log.info("Wrote Post cache");
  } catch (error) {
    Log.error("Error writing Post cache");

    Log.trace(error);
  }

  return posts;
};

export const findPost = async (slug: string): Promise<Post | undefined> => {
  const posts = await getPosts();

  return posts.find((item) => item.slug === slug);
};

export const randomPost = async (take: number = 10): Promise<Post[]> => {
  const posts = await getPosts();

  return posts.sort(() => 0.5 - Math.random()).slice(0, take);
};
