"use client";
import clsx from "clsx";
import HamburgerMenu from "./HamburgerMenu";
import { HamburgerButton } from "./HamburgerButton";
import { useState } from "react";
import { Logo } from "../layout/Logo";

export interface HeaderProps {
  className?: string;
}

export default function MobileHeader({ className }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className={clsx(
        "flex flex-row justify-between navbar sticky top-0 w-full z-[9999] h-[90px] bg-secondary",
        className,
      )}
    >
      <HamburgerButton
        onChangeOpen={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        className="relative top-[20px] left-[28px] z-[99]"
      />
      <Logo className={"left-[-30px] relative"} />

      <HamburgerMenu isOpen={isOpen} />
    </header>
  );
}
