import { Text } from "../ui/text";

export default function PageHeader() {
  return (
    <div
      className={
        "top-300 relative w-full h-auto md:h-[150px] bg-secondary text-white flex flex-col md:justify-between  justify-between  xl:px-[130px] px-[40px] sm:px-[20px] text-center md:text-start"
      }
    >
      <Text className={"text-[30px] md:text-[64px]"}>Blog Section Title</Text>
    </div>
  );
}
