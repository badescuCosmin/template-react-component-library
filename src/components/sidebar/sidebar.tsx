import React from "react";
import { PropsWithChildren } from "react";
import { styled } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons";
import { IconButton } from "../icon-button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const SidebarContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<Pick<SidebarProps, "isOpen">>(({ theme, isOpen }) => ({
  width: theme.constants.sidebarWidth,
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr auto",
  boxShadow: theme.elevations[8],
  background: theme.colors.white95,
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  transition: theme.transitions.create("left", {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(!isOpen && {
    left: `-${theme.constants.sidebarWidth}`,
    boxShadow: "none",
  }),
}));

const SidebarContentContainer = styled("div")({});

const SidebarTriggerContainer = styled("div")({
  padding: "6px 0",
  textAlign: "center",
});

const SidebarOpeningTrigger = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<Pick<SidebarProps, "isOpen">>(({ isOpen, theme }) => ({
  backgroundColor: theme.colors.white95,
  borderRadius: "0px 32px 32px 0px",
  padding: "0px 2px 0px 24px",
  position: "absolute",
  bottom: "6px",
  boxShadow: theme.elevations[8],
  left: 0,
  opacity: 0,
  ...(isOpen
    ? visuallyHidden
    : {
        opacity: 1,
        transition: [
          theme.transitions.create("opacity", {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
            delay: theme.transitions.duration.leavingScreen,
          }),
          theme.transitions.create("backgroundColor", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
        ].join(", "),
        zIndex: 100,
      }),
  "&:hover": {
    backgroundColor: theme.colors.white92,
  },
}));

export const Sidebar = ({
  children,
  isOpen,
  onClose,
  onOpen,
}: PropsWithChildren<SidebarProps>): JSX.Element => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SidebarContentContainer>{children}</SidebarContentContainer>

        <SidebarTriggerContainer>
          <IconButton onClick={onClose}>
            <ChevronLeftIcon />
          </IconButton>
        </SidebarTriggerContainer>
      </SidebarContainer>

      <SidebarOpeningTrigger isOpen={isOpen} onClick={onOpen}>
        <ChevronRightIcon />
      </SidebarOpeningTrigger>
    </>
  );
};
