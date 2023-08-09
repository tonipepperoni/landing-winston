import { Input } from "../../ui/input";
import Image from "next/image";

export const InputWithArrow = ({ placeHolder }: { placeHolder: string }) => {
  return (
    <>
      <Input placeholder={placeHolder} variant={"secondary"} size={"small"} />
      <Image
        height={21}
        width={26}
        src={"/icons/arrow-right.svg"}
        className="absolute right-5 bottom-4 hover:cursor-pointer hover:opacity-60"
        alt={"newsletter-logo"}
      />
    </>
  );
};
