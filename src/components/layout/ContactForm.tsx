"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Text } from "../ui/text";
import useMediaQuery from "../../hooks/useMediaQuery";

export const ContactForm = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const buttonSize = isDesktop ? "large" : "default";
  return (
    <div
      style={{
        background:
          "linear-gradient(to right, #00BEF0, #FFF046, #FFEF46, #FFAA50, #B491FF)",
      }}
      className={
        "flex flex-row w-full  justify-center items-center h-[180px] bg-secondary absolute top-[-90px] sm:w-full md:w-[calc(100%-50px)] md:ml-[25px]"
      }
    >
      <div
        className={
          "flex flex-row w-full justify-between lg:p-[56px] p-[20px] items-center h-[calc(100%-2px)] bg-secondary"
        }
      >
        <Text className={"md:text-[35px] sm:text-xl"}>
          Ready to unlock your growth?
        </Text>
        <a href={"https://winstonfrancois.com/contact-us"}>
          <Button size={buttonSize}>Contact Us</Button>
        </a>
      </div>
    </div>
  );
};
