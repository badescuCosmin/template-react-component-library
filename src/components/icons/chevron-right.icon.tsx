import { createIcon } from "../icon";
import { ReactComponent as ChevronLeftIconSvg } from "../../assets/icons/chevron-left.svg";

export const ChevronRightIcon = createIcon({
  component: ChevronLeftIconSvg,
  props: {
    sx: {
      transform: "rotate(180deg)",
    },
  },
});
