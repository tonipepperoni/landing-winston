import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkItem } from "./LinkItem";
import { navigationLinks } from "../../../constants/navigation-links";
import { usePathname } from "next/navigation";
import { Logo } from "../../layout/Logo";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: 2 },
  },
};

export default function Navigation() {
  const pathUrl = usePathname();
  const baseUrl = "/" + pathUrl?.split("/")[1];
  return (
    <motion.ul
      variants={variants}
      className={
        "w-full h-full flex flex-col justify-start items-center text-slate-100 gap-10 py-[40px] bg-secondary"
      }
    >
      <LinkItem isActive={baseUrl === "/"}>
        <a href={"/"} className={"font-bold text-xl text-slate-100"}>
          <Logo />
        </a>
      </LinkItem>
      {navigationLinks.map((link) => {
        const linkBaseUrl = "/" + link.href!.split("/")[1];
        return (
          <LinkItem key={link.href} isActive={baseUrl === linkBaseUrl}>
            <a
              href={link.href}
              className={
                baseUrl === linkBaseUrl
                  ? "font-space hover:cursor-default"
                  : "font-space"
              }
            >
              {link.title}
            </a>
          </LinkItem>
        );
      })}
    </motion.ul>
  );
}
