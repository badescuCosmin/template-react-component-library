import React from "react";
import { ReactNode, PropsWithChildren, useCallback, useState } from "react";
import { styled } from "@mui/material";
import { Sidebar } from "./sidebar";

export interface SidebarLayoutProps {
  sidebarContent?: ReactNode | null;
}

export interface LayoutContainerProps {
  sidebarIsOpen: boolean;
}

const LayoutContainer = styled("div", {
  name: "LayoutContainer",
  shouldForwardProp: (prop) => prop !== "sidebarIsOpen",
})<LayoutContainerProps>(({ sidebarIsOpen, theme }) => ({
  height: "100vh",
  width: "100vw",
  paddingLeft: "0px",
  transition: theme.transitions.create("padding-left", {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(sidebarIsOpen && {
    paddingLeft: theme.constants.sidebarWidth,
  }),
}));

const ContentContainer = styled("div")({
  height: "100vh",
});

export const SidebarLayout = ({
  children,
  sidebarContent,
}: PropsWithChildren<SidebarLayoutProps>) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSidebarClose = useCallback(() => setIsOpen(false), []);

  const handleSidebarOpen = useCallback(() => setIsOpen(true), []);

  return (
    <LayoutContainer sidebarIsOpen={isOpen}>
      <Sidebar
        isOpen={isOpen}
        onClose={handleSidebarClose}
        onOpen={handleSidebarOpen}
      >
        {sidebarContent}
      </Sidebar>

      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
};
