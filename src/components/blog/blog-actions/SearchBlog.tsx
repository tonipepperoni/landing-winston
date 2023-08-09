import { Text } from "../../ui/text";
import { InputWithArrow } from "./InputWithArrow";

export const SearchBlog = () => {
  return (
    <div className={"flex flex-col md:gap-[29px] gap-[5px]  text-black"}>
      <Text
        variant={"uppercase"}
        color={"secondary"}
        className={`font-space text-xs md:text-[14px]`}
      >
        Search
      </Text>
      <form className={"w-full border-[0.5px] border-secondary"}>
        <div className="relative px-[18px] py-[15px] w-auto lg:min-w-[280px]">
          <InputWithArrow placeHolder={"Search"} />
        </div>
      </form>
    </div>
  );
};
