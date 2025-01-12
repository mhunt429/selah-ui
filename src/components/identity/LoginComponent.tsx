import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Flex, Card, Stack, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import AppMainInput from "../shared/AppMainInput";
import { AccessTokenRequest, TokenData } from "@/data/identity/accessToken";
import api from "@/utilities/api";
import AppAlert from "../shared/AppAlert";
import { useNavigate } from "react-router-dom";
import AppPrimaryButton from "../shared/AppPrimaryButton";
import { AppUser } from "@/data/appUser/appUser";

const LoginComponent: React.FC = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [showLoginError, setShowLoginError] = useState(false);

  const handleLogin = async () => {
    const accessTokenRequest: AccessTokenRequest = {
      email,
      password,
    };

    try {
      const tokenResponse = await api.post<TokenData, AccessTokenRequest>(
        "identity/login",
        accessTokenRequest
      );
      console.log(tokenResponse.data);
      sessionStorage.setItem("token", tokenResponse.data.data.accessToken);

      const currentUser = await api.get<AppUser>("identity/current-user");

      sessionStorage.setItem("app_user", JSON.stringify(currentUser.data));
      navigate("/home");
    } catch (e) {
      console.error(e);
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
                value={email}
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
            <AppPrimaryButton onClick={handleLogin} btnText="Login" />
          </Stack>
        </Card.Body>
      </Card.Root>
    </Flex>
  );
};

export default LoginComponent;
