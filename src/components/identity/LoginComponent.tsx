import { FormControl, FormLabel } from "@chakra-ui/form-control";
import {
  Button,
  Flex,
  Card,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import AppMainInput from "../shared/AppMainInput";
import {
  AccessTokenRequest,
  AccessTokenResponse,
} from "@/data/identity/accessToken";
import api from "@/utilities/api";
import AppAlert from "../shared/AppAlert";

const LoginComponent: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showLoginError, setShowLoginError] = useState(false);

  const handleLogin = async () => {
    const accessTokenRequest: AccessTokenRequest = {
      username,
      password,
    };

    try {
      const tokenResponse = await api.post<
        AccessTokenResponse,
        AccessTokenRequest
      >("identity/login", accessTokenRequest);
    } catch (ex) {
      setShowLoginError(true);
    }
  };

  const handleErrorAlertClose = () => {
    setShowLoginError(false);
  };

  const marginTopValue = useBreakpointValue({
    base: "5%",
    md: "8%",
    lg: "5%",
  });

  return (
    <Flex justify="center" align="center" p={4}>
      <Card.Root width="540px" p={4} marginTop={marginTopValue}>
        {showLoginError && (
          <AppAlert
            onClose={handleErrorAlertClose}
            status="error"
            message="We were unable to sign you in. Please check your credentials and try again."
          />
        )}
        <Card.Title fontSize={"24px"} textAlign={"center"}>
          Login
        </Card.Title>
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
