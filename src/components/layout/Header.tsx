import { navigationLinks } from "../../constants/navigation-links";
import { Button } from "../ui/button";
import { Text } from "../ui/text";
import { Logo } from "./Logo";
import { useEffect } from "react";
import { useState } from "react";
import { clsx } from "clsx";

export const Header = () => {
  const [isMoved, setIsMoved] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsMoved(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <header
        style={{ opacity: isMoved ? 0.9 : 1 }}
        className={clsx(
          !isMoved ? "lg:h-[150px]  py-[65px] " : "lg:h-[80px] py-[20px]",
          "w-full h-auto bg-secondary text-white flex flex-col justify-between xl:px-[130px] lg:px-[20px] px-[5px] text-center xl:text-start fixed top-0 left-0 transition-isMoved duration-300",
        )}
      >
        <div
          className={
            "flex flex-col md:flex-row w-full justify-between items-center xl:gap-8 lg:gap-4 md:gap-2"
          }
        >
          <Logo />
          <div
            className={
              "flex flex-row gap-8 md:gap-4 2xl:gap-10 items-center justify-center flex-wrap"
            }
          >
            {navigationLinks.map((link) =>
              link.title === "Contact Us" ? (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-space md:text-[12px] lg:text-xl`}
                >
                  <Button>{link.title}</Button>
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={
                    "whitespace-nowrap font-space md:text-[12px] lg:text-base"
                  }
                >
                  <Text variant={"uppercase"}>{link.title}</Text>
                </a>
              ),
            )}
          </div>
        </div>
      </header>
    </nav>
  );
};
