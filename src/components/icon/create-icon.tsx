import React from "react";
import { FunctionComponent, SVGProps } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

export interface IconProps extends SvgIconProps {}
interface CreateIconParams {
  component: FunctionComponent<SVGProps<SVGSVGElement>>;
  props?: IconProps;
}

export const createIcon =
  ({
    component,
    props: initialProps = {},
  }: CreateIconParams): FunctionComponent<IconProps> =>
  (props: IconProps) =>
    <SvgIcon {...initialProps} {...props} component={component} />;
