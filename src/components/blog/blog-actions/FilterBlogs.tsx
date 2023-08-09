import { Text } from "../../ui/text";

import { InputWithArrow } from "./InputWithArrow";

export const FilterBlogs = () => {
  return (
    <div className={"flex flex-col md:gap-[29px] gap-[5px]  text-black"}>
      <Text
        variant={"uppercase"}
        color={"secondary"}
        className={`font-space text-xs md:text-[14px]`}
      >
        Filter by categories
      </Text>
      <form className={"w-full border-[0.5px] border-secondary"}>
        <div className="relative p-[18px] md:px-[18px] py-[15px] lg:w-[280px] w-auto">
          <InputWithArrow placeHolder={"Filter"} />
        </div>
      </form>
    </div>
  );
};
