import { Button } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  onClick?: () => void;
  icon?: ReactNode;
  btnText?: string;
};

const AppPrimaryButton: FC<Props> = (props) => {
  return (
    <Button
      borderRadius={"8px"}
      colorPalette="orange"
      variant="solid"
      onClick={props.onClick}
      fontSize="16px"
    >
      {props.btnText}
    </Button>
  );
};

export default AppPrimaryButton;
