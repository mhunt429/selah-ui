import { Input } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  id: string;
  type: string;
  value?: string | number;
  onChange?: (value: string) => void;
}

const AppMainInput: FC<Props> = (props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };
  return (
    <Input
      id={props.id}
      type={props.type}
      value={props.value}
      onChange={handleChange}
    />
  );
};

export default AppMainInput;
