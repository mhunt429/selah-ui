import React, { FC, ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidenav from "./Sidenav";

type Props = {
  children: ReactNode;
};

const MainLayout = (props: Props) => {
  return (
    <Flex direction="column" height="100vh">
      {/* Top Menu */}
      <Flex flex="1">
        <Sidenav />
        <Box as="main" flex="1" p={4}>
          {props.children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default MainLayout;
