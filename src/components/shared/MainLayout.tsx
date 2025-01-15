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
import { Link, useNavigate } from "react-router-dom";
import AppPrimaryButton from "./AppPrimaryButton";

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(window.innerWidth >= 1000);

  const userSessionValue = sessionStorage.getItem("app_user") ?? "";
  const appUser: AppUser | undefined =
    userSessionValue !== "" ? JSON.parse(userSessionValue) : undefined;

  const navigate = useNavigate();

  useEffect(() => {
    if (!appUser) {
      navigate("/login");
    }
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
      {/* Header */}
      <Box
        as="header"
        p={6}
        color="white"
        zIndex={2}
        position="fixed"
        top="0"
        width="100%"
        overflow="hidden"
        boxShadow="lg"
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

      <Flex flex="1" direction="row" mt="60px" /* Adjust for header height */>
        {/* Sidenav */}
        <Box
          m={6}
          as="nav"
          position="fixed"
          left="0"
          height="calc(100vh - 80px)" // Account for the header height
          width={isSidenavOpen ? "250px" : "0"}
          color="white"
          overflow="hidden"
          transition="width 0.3s"
          boxShadow="lg"
          padding={isSidenavOpen ? "20px" : "0"}
          display="flex"
          flexDirection="column"
          zIndex={1}
        >
          {isSidenavOpen && (
            <Box>
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
          mt="60px" // Adjust for header height
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
