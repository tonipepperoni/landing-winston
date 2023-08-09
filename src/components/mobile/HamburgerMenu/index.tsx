"use client";
import { useEffect, useRef } from "react";
import { useDimensions } from "../../../hooks/useDimensions";
import dynamic from "next/dynamic";
import clsx from "clsx";

const Navigation = dynamic(
  () => import("./Navigation").then((mod) => mod.default),
  {
    ssr: false,
  },
);
export interface HamburgerMenuProps {
  className?: string;
  isOpen: boolean;
}

export default function HamburgerMenu({
  className,
  isOpen,
}: HamburgerMenuProps) {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className={clsx(`bg-secondary`, className)}>
      <div
        className="fixed top-[-10px] left-0 bottom-0 h-[calc(100% + 10px)] w-full z-50"
        style={{
          background: isOpen ? "black" : "none",
          clipPath: isOpen
            ? `circle(${height * 2 + 200}px at 40px 40px)`
            : "circle(30px at 52px 52px)",
          transition: isOpen
            ? "clip-path 0.5s ease-in-out"
            : "clip-path 0.3s ease-in-out",
        }}
        ref={containerRef}
      >
        {isOpen && <Navigation />}
      </div>
    </nav>
  );
}
