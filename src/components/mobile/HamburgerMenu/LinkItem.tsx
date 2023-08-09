import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const LinkItem = ({
  children,
  isActive,
  ...props
}: {
  children: React.ReactNode;
  isActive: boolean;
}) => {
  return (
    <motion.li
      {...props}
      className={isActive ? "text-slate-100" : ""}
      variants={variants}
      whileHover={{ scale: isActive ? 1 : 1.1 }}
      whileTap={{ scale: isActive ? 1 : 0.95 }}
    >
      {children}
    </motion.li>
  );
};
