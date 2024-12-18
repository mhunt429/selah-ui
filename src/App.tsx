import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { Provider } from "@/components/ui/provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/identity/LoginComponent";

interface Props {
  children?: ReactNode;
}

const App: React.FC<Props> = ({ children }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>
        <Provider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginComponent />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default App;
