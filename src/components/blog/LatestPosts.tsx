"use client";
import { Text } from "../ui/text";
import { PostPreview } from "./PostPreview";
import useMediaQuery from "../../hooks/useMediaQuery";

export const LatestPosts = ({ blogs }: any[]) => {
  const isXlScreen = useMediaQuery("(min-width: 1280px)");

  return (
    <div className={"flex flex-col gap-[42px] w-full"}>
      <Text className={"text-[40px] font-bold"} color={"secondary"}>
        Latest
      </Text>
      <div
        className={"flex flex-col lg:grid"}
        style={{
          gridTemplateColumns: isXlScreen ? "repeat(3, 1fr)" : "repeat(3, 1fr)",
          gridTemplateRows: "auto auto auto",
          gap: "20px",
          gridTemplateAreas: `
          "hero hero small1"
          "hero hero small2"
          "big3 big4 big5"
        `,
        }}
      >
        {blogs.map((post, index) => {
          if (index === 0)
            return (
              <div key={index} style={{ gridArea: "hero" }}>
                <PostPreview isHero title={post.title} id={post.id} />
              </div>
            );
          if (index === 1 || index === 2)
            return (
              <div key={index} style={{ gridArea: `small${index}` }}>
                <PostPreview title={post.title} id={post.id} />
              </div>
            );
          return (
            <div key={index} style={{ gridArea: `big${index}` }}>
              <PostPreview title={post.title} id={post.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
