import useMediaQuery from "../../hooks/useMediaQuery";
import Image from "next/image";

export const Logo = ({ className = "" }: { className?: string }) => {
  const isSmallerLogo = useMediaQuery("(max-width: 1000px)");

  return (
    <Image
      src={"/wf_logo.svg"}
      width={isSmallerLogo ? 196 : 280}
      height={isSmallerLogo ? 42 : 53}
      alt={"wf_logo"}
      className={className}
    />
  );
};
