import React, { FC, ReactNode, useState } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import {
  HiArrowRight,
  HiCalendar,
  HiCreditCard,
  HiCurrencyDollar,
  HiMenu,
  HiOutlineTrendingUp,
} from "react-icons/hi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { HiHome } from "react-icons/hi";
import { MdManageAccounts } from "react-icons/md";
import {
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
} from "@/components/ui/drawer";
import { AppUser } from "@/data/appUser/appUser";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(true);

  const userSessionValue = sessionStorage.getItem("app_user") ?? "";
  const appUser: AppUser = JSON.parse(userSessionValue);

  return (
    <Flex direction="column" height="100vh">
      <Box as="header" bg="#111111" p={4} color="white">
        <Flex direction="row" justifyContent="space-between" width="100%">
          <Box cursor="pointer" onClick={() => setIsSidenavOpen(true)}>
            <HiMenu color="white" size={36} />
          </Box>
          <IoPersonCircleSharp size={36} />
        </Flex>
      </Box>

      <Flex flex="1">
        <DrawerRoot
          placement="start"
          closeOnInteractOutside={false}
          open={isSidenavOpen}
          onOpenChange={(e) => setIsSidenavOpen(e.open)}
        >
          <DrawerContent
            style={{
              boxShadow: "lg",
              backdropFilter: "none",
            }}
          >
            <DrawerHeader>
              <DrawerTitle>
                {appUser.firstName} {appUser.lastName}
              </DrawerTitle>
            </DrawerHeader>
            <hr />
            <DrawerBody>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <Link to="/home" style={linkStyle}>
                  <HiHome size={20} aria-hidden="true" />
                  <span style={textStyle}>Home</span>
                </Link>

                <Link to="/transactions" style={linkStyle}>
                  <HiCreditCard size={20} aria-hidden="true" />
                  <span style={textStyle}>Transactions</span>
                </Link>

                <Link to="/accounts" style={linkStyle}>
                  <HiCurrencyDollar size={20} aria-hidden="true" />
                  <span style={textStyle}>Accounts</span>
                </Link>

                <Link to="/cashflow" style={linkStyle}>
                  <HiOutlineTrendingUp size={20} aria-hidden="true" />
                  <span style={textStyle}>Cash Flow</span>
                </Link>

                <Link to="/calendar" style={linkStyle}>
                  <HiCalendar size={20} aria-hidden="true" />
                  <span style={textStyle}>Calendar</span>
                </Link>

                <Link to="/settings" style={linkStyle}>
                  <MdManageAccounts size={20} aria-hidden="true" />
                  <span style={textStyle}>Account Settings</span>
                </Link>
              </div>
            </DrawerBody>
            <DrawerFooter position="start">
              <Button colorPalette="orange">
                Logout
                <span>
                  <HiArrowRight />
                </span>
              </Button>
            </DrawerFooter>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
        <Box as="main" flex="1" p={4}>
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

const linkStyle = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "inherit",
  padding: "8px",
};

const textStyle = {
  paddingLeft: "12px",
};

export default MainLayout;
