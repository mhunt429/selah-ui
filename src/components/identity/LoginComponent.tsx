// src/components/Login.tsx
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Button, Input, VStack, Box } from "@chakra-ui/react";
import { useState } from "react";

const LoginComponent: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Username:", username, "Password:", password);
    // Call an API for authentication
  };

  return (
    <Box p={4} maxW="sm" borderWidth={1} borderRadius="lg" boxShadow="lg">
      <VStack>
        <FormControl id="username" isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <Button colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default LoginComponent;
