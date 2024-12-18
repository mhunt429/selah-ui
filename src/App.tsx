import { ChakraProvider, createSystem, defineConfig } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Provider } from "@/components/ui/provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/identity/LoginComponent";

interface Props {
  children?: ReactNode;
}

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      colors: {},
    },
  },
});
const system = createSystem(config);

const App: React.FC<Props> = () => {
  return (
    <ChakraProvider value={system}>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  );
};

export default App;
