"use client";
import useMediaQuery from "../../hooks/useMediaQuery";
import MobileHeader from "../mobile/MobileHeader";
import { Header } from "./Header";

export default function RootHeader() {
  const isDesktopView = useMediaQuery("(min-width: 800px)");
  return <>{!isDesktopView ? <MobileHeader /> : <Header />}</>;
}
