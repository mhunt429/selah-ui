import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from "react";
import { AppUser } from "@/data/appUser/appUser";

// Context Type definition
interface UserContextType {
  user: AppUser | null;
  setUser: (user: AppUser | null) => void;
}

// Create context
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AppUser | null>(() => {
    const storedUser = sessionStorage.getItem("app_user");
    return storedUser ? (JSON.parse(storedUser) as AppUser) : null;
  });

  // Function to update user
  const updateUser = (newUser: AppUser | null) => {
    if (newUser) {
      sessionStorage.setItem("user", JSON.stringify(newUser));
    } else {
      sessionStorage.removeItem("user");
    }
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, setUser: updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const userContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
