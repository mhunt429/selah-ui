import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button, Icon } from "@chakra-ui/react";
import { FC, useState } from "react";
import {
  HiCalendar,
  HiCreditCard,
  HiCurrencyDollar,
  HiMenu,
  HiOutlineTrendingUp,
} from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { MdManageAccounts } from "react-icons/md";
const Sidenav: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <DrawerRoot
      placement={"start"}
      closeOnInteractOutside={false}
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <DrawerTrigger asChild>
        <HiMenu color="teal" size={32} />
      </DrawerTrigger>
      <DrawerContent
        style={{
          boxShadow: "lg", // Optional: Add a shadow to visually distinguish the drawer
          backdropFilter: "none", // Ensures no blur effect
        }}
      >
        <DrawerHeader>
          <DrawerTitle>Test User</DrawerTitle>
        </DrawerHeader>
        <hr />
        <DrawerBody>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <a href="/home" style={linkStyle}>
              <HiHome size={20} aria-hidden="true" />
              <span style={textStyle}>Home</span>
            </a>

            <a href="/transactions" style={linkStyle}>
              <HiCreditCard size={20} aria-hidden="true" />
              <span style={textStyle}>Transactions</span>
            </a>

            <a href="/accounts" style={linkStyle}>
              <HiCurrencyDollar size={20} aria-hidden="true" />
              <span style={textStyle}>Accounts</span>
            </a>

            <a href="/cashflow" style={linkStyle}>
              <HiOutlineTrendingUp size={20} aria-hidden="true" />
              <span style={textStyle}>Cash Flow</span>
            </a>

            <a href="/calendar" style={linkStyle}>
              <HiCalendar size={20} aria-hidden="true" />
              <span style={textStyle}>Calendar</span>
            </a>

            <a href="/settings" style={linkStyle}>
              <MdManageAccounts size={20} aria-hidden="true" />
              <span style={textStyle}>Account Settings</span>
            </a>
          </div>
        </DrawerBody>
        <DrawerFooter position={"start"}>
          <Button>Logout</Button>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
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

export default Sidenav;
