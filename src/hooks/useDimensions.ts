import { useEffect, useRef } from "react";

type DimensionObject = {
  width: number;
  height: number;
};

export const useDimensions = (
  ref: React.RefObject<HTMLElement>,
): DimensionObject => {
  const dimensions = useRef<DimensionObject>({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
