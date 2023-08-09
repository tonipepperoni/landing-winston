import Image from "next/image";
import { Text } from "../ui/text";
import { clsx } from "clsx";

export interface PostPreviewProps {
  title: string;
  id?: number;
  isHero?: boolean;
}
export const PostPreview = ({ isHero, title, id }: PostPreviewProps) => {
  return (
    <div className={"flex flex-col bg-[#F1F1F1] w-full h-full"}>
      <Image
        className={"object-cover h-full w-full"}
        src={`https://picsum.photos/id/${id}/890/450`}
        alt={"post"}
        width={isHero ? 780 : 380}
        height={isHero ? 450 : 225}
      />
      <div
        className={clsx(
          "flex flex-col px-[14px] py-[20px] gap-2",
          (isHero && "px-[24px] py-[54px] gap-[16px]") || "",
        )}
      >
        <Text
          color={"secondary"}
          className={clsx(
            "text-[20px] font-semibold",
            (isHero && "text-[36px]") || "",
          )}
        >
          {title}
        </Text>
        <Text
          color={"secondary"}
          className={clsx(
            "text-[12px] font-semibold",
            (isHero && "text-[20px]") || "",
          )}
        >
          Tuesday, March 18, 2009
        </Text>
      </div>
    </div>
  );
};
