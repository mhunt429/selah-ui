import { Alert } from "@/components/ui/alert";
import { ConditionalValue } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  status: ConditionalValue<
    "info" | "warning" | "success" | "error" | "neutral" | undefined
  >;
  message: string;
  onClose?: () => void;
};

const AppAlert: FC<Props> = (props) => {
  return (
    <Alert
      onClose={props.onClose}
      closable={true}
      marginBottom={"16px"}
      variant={"surface"}
      status={props.status}
    >
      {props.message}
    </Alert>
  );
};

export default AppAlert;
