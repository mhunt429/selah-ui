import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Button, Flex, Card, Stack } from "@chakra-ui/react";
import { useState } from "react";
import AppMainInput from "../shared/AppMainInput";
import marginTopValue from "@/utilities/constants";

const LoginComponent: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username:", username, "Password:", password);
  };

  return (
    <Flex justify="center" align="center" p={4}>
      <Card.Root width="540px" p={4} marginTop={marginTopValue}>
        <Card.Body gap="2">
          <Stack>
            <FormControl id="username" isRequired>
              <FormLabel paddingBottom="8px">Username</FormLabel>
              <AppMainInput
                id="username"
                type="text"
                value={username}
                onChange={setUsername}
              />
            </FormControl>

            <div style={{ paddingTop: "16px" }} />
            <FormControl id="password" isRequired>
              <FormLabel paddingBottom="8px">Password</FormLabel>
              <AppMainInput
                id="password"
                type="password"
                value={password}
                onChange={setPassword}
              />
            </FormControl>

            <div style={{ paddingTop: "16px" }} />
            <Button
              colorPalette="teal"
              variant="solid"
              onClick={handleLogin}
              fontSize="16px"
            >
              Login
            </Button>
          </Stack>
        </Card.Body>
      </Card.Root>
    </Flex>
  );
};

export default LoginComponent;
