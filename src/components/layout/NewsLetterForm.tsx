import { Text } from "../ui/text";
import Image from "next/image";
import { Input } from "../ui/input";

export const NewsLetterForm = () => {
  return (
    <div className={"flex flex-col "}>
      <Text variant={"uppercase"} color={"sand"} className={"mb-4 md:text-lg"}>
        Get in touch
      </Text>
      <Text color={"cream"} className={"mb-4 md:text-2xl"}>
        hello@winstonfrancois.com
      </Text>
      <Text color={"cream"} className={"md:text-2xl mb-[64px]"}>
        (909) 999-9999
      </Text>
      <Text variant={"uppercase"} color={"sand"} className={"mb-4 md:text-lg"}>
        Newsletter
      </Text>
      <form className={"mb-2 max-w-[480px] w-full"}>
        <div className="relative w-full">
          <Input
            style={{
              backgroundImage:
                "linear-gradient(to right, #7D9FFA, #00BEF0, #FFF046, #FFEF46, #FFAA50, #B491FF)",
              backgroundSize: "100% 1px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
            }}
            type="email"
            id="default-search"
            className="block w-full min-w-[200px] lg:min-w-[400px] py-6 bg-secondary focus:outline-none md:text-2xl text-white"
            placeholder="Enter your email..."
            required
          />
          <Image
            height={21}
            width={26}
            src={"/right-arrow.svg"}
            className="absolute right-2.5 bottom-7 hover:cursor-pointer hover:opacity-60"
            alt={"newsletter-logo"}
          />
        </div>
      </form>
      <Text color={"sand"} className={"mb-4 text-lg"}>
        Enter your email address
      </Text>
    </div>
  );
};
