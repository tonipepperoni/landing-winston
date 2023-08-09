import React from "react";
import clsx from "clsx";

interface Props {
  isOpen?: boolean;
  className?: string;
  onChangeOpen: () => void;
}

export const HamburgerButton = ({ isOpen, className, onChangeOpen }: Props) => {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <div
      onClick={onChangeOpen}
      id={"Hamburger"}
      className={clsx(
        "flex flex-col h-12 w-12 rounded justify-center items-center group opacity-100",
        className,
      )}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "rotate-45 translate-y-3 group-hover:opacity-100" : ""
        }`}
      />
      <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`} />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "-rotate-45 -translate-y-3 group-hover:opacity-100" : ""
        }`}
      />
    </div>
  );
};
