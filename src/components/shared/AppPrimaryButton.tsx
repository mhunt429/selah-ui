import { Button } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  onClick?: () => void;
  icon?: ReactNode;
  btnText?: string;
  width?: string;
};

const AppPrimaryButton: FC<Props> = (props) => {
  return (
    <Button
      width={props.width}
      borderRadius={"8px"}
      colorPalette="orange"
      variant="solid"
      onClick={props.onClick}
      fontSize="16px"
      textAlign={"center"}
    >
      {props.btnText}
      <span>{props.icon}</span>
    </Button>
  );
};

export default AppPrimaryButton;
