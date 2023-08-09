import { BlogActions } from "../components/blog/blog-actions";
import React from "react";
import { LatestPosts } from "../components/blog/LatestPosts";
import { RecommendedPosts } from "../components/blog/RecommendedPosts";
import { AllPosts } from "../components/blog/AllPosts";
async function getData() {
  const res = await fetch(`https://dummyjson.com/posts`);
  return res.json();
}

export default async function App() {
  const { posts } = await getData();

  const latest = posts.splice(0, 6);
  const recommended = posts.splice(6, 10);
  return (
    <div
      className={
        "py-[10px] md:py-[44px]  md:px-[20px] lg:px-[80px] xl:px-[130px] px-[5px] flex flex-col items-center md:gap-[88px] overflow-hidden"
      }
    >
      <BlogActions />
      <LatestPosts blogs={latest} />
      <RecommendedPosts blogs={recommended} />
      <AllPosts blogs={posts} />
    </div>
  );
}
