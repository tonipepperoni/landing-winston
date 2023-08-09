import { Text } from "../../ui/text";

import { InputWithArrow } from "./InputWithArrow";

export const GetBlogUpdates = () => {
  return (
    <div className={"flex flex-col md:gap-[29px] gap-[5px] text-black"}>
      <Text
        variant={"uppercase"}
        color={"secondary"}
        className={`font-space text-xs md:text-[14px]`}
      >
        Get the latest updates
      </Text>
      <form className={"w-full border-[0.5px] border-secondary"}>
        <div className="relative px-[18px] py-[15px] lg:w-[280px] w-auto">
          <InputWithArrow placeHolder={"Email"} />
        </div>
      </form>
    </div>
  );
};
