import React, { FC, ReactNode, useState, useEffect } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import {
  HiArrowRight,
  HiCalendar,
  HiCreditCard,
  HiCurrencyDollar,
  HiMenu,
  HiOutlineTrendingUp,
  HiX,
} from "react-icons/hi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { HiHome } from "react-icons/hi";
import { MdManageAccounts } from "react-icons/md";
import { AppUser } from "@/data/appUser/appUser";
import { Link } from "react-router-dom";
import AppPrimaryButton from "./AppPrimaryButton";

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(window.innerWidth >= 1000);

  const userSessionValue = sessionStorage.getItem("app_user") ?? "";
  const appUser: AppUser = JSON.parse(userSessionValue);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setIsSidenavOpen(false); // Close sidenav for screens below 1000px
      } else {
        setIsSidenavOpen(true); // Open sidenav for screens above 1000px
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Flex direction="column" height="100vh">
      <Box
        as="header"
        bg="#111111"
        p={4}
        color="white"
        zIndex={2} // Ensures the header stays on top of the sidenav
        position="relative" // Makes sure header doesn't get overlapped
      >
        <Flex direction="row" justifyContent="space-between" width="100%">
          <Box
            cursor="pointer"
            onClick={() => setIsSidenavOpen(!isSidenavOpen)}
          >
            {isSidenavOpen ? (
              <HiX color="white" size={36} />
            ) : (
              <HiMenu color="white" size={36} />
            )}
          </Box>
          <IoPersonCircleSharp size={36} />
        </Flex>
      </Box>

      <Flex flex="1" direction="row">
        {/* Sidenav */}
        <Box
          as="nav"
          position="fixed"
          left="0"
          top="0"
          height="100vh"
          width={isSidenavOpen ? "250px" : "0"}
          bg="#111111"
          color="white"
          overflow="hidden"
          transition="width 0.3s"
          boxShadow="lg"
          padding={isSidenavOpen ? "20px" : "0"}
          display="flex"
          flexDirection="column"
          zIndex={1} // Ensures sidenav stays below the header
        >
          {isSidenavOpen && (
            <Box>
              <Box color="white" fontWeight="bold" mb={4}>
                {appUser.firstName} {appUser.lastName}
              </Box>
              <hr />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  paddingTop: "20px",
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
            </Box>
          )}
          {isSidenavOpen && (
            <Box mt="auto">
              <AppPrimaryButton
                width={"100%"}
                btnText="Logout"
                icon={<HiArrowRight style={{ marginLeft: "8px" }} />}
              />
            </Box>
          )}
        </Box>

        {/* Main Content */}
        <Box
          as="main"
          flex="1"
          p={4}
          ml={isSidenavOpen ? "250px" : "0"}
          transition="margin-left 0.3s"
          paddingLeft={isSidenavOpen ? "250px" : "0"}
        >
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
