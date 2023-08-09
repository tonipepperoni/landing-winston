import { ContactForm } from "./ContactForm";
import { Text } from "../ui/text";
import Image from "next/image";
import { NewsLetterForm } from "./NewsLetterForm";

export const Footer = () => {
  return (
    <div className={"relative flex flex-col"}>
      <ContactForm />
      <div
        className={
          "w-full h-auto min-h-[835px] px-[50px] xl:px-[130px] py-[130px] flex flex-col md:flex-row bg-secondary justify-center items-center gap-10 xl:gap-[190px]"
        }
      >
        <div
          className={
            "flex flex-col  max-w-[490px] text-center items-center gap-8"
          }
        >
          <Text className={"text-[16px] md:text-[25px] xl:text-[35px]"}>
            We take a custom approach to your growth goals by assembling and
            leading the best-in-class marketing team to support your next stage
          </Text>
          <Image src={"/logo.svg"} alt={"logo"} width={74} height={72} />
        </div>
        <NewsLetterForm />
      </div>
      <div
        className={
          "flex justify-center items-center h-[97px] p-[35px] bg-secondary border-t border-[#3E3E46]"
        }
      >
        <Text color={"sand"} className={"text-md md:text-lg"}>
          © 2023 Winston Francois, LLC. All rights reserved.
        </Text>
      </div>
    </div>
  );
};
