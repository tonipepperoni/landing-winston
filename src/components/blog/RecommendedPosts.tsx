import { Text } from "../ui/text";
import { PostPreview } from "./PostPreview";

export const RecommendedPosts = ({ blogs }) => {
  return (
    <div className={"flex flex-col gap-[42px] w-full"}>
      <Text className={"text-[40px] font-bold"} color={"secondary"}>
        Recommended
      </Text>
      <div
        style={{
          display: "grid",
          gap: "20px",
        }}
        className={"grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"}
      >
        {blogs.map((post) => {
          return (
            <div key={post}>
              <PostPreview title={post.title} id={post.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
