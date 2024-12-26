import api from "@/utilities/api";
import { FC, useState } from "react";
import AppPrimaryButton from "../shared/AppPrimaryButton";
import PlaidLinkComponent from "../shared/PlaidLinkComponent";

const AccountsComponent: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [linkToken, setLinkToken] = useState<string>("");

  const handleButtonClick = async () => {
    setIsLoading(true);
    try {
      const response: any = await api.post("/connector/link");
      setLinkToken(response.data.data.link_token);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching link token:", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <AppPrimaryButton
        onClick={handleButtonClick}
        btnText={isLoading ? "Loading..." : "Fetch Link Token"}
      />
      {isLoading ? null : <PlaidLinkComponent linkToken={linkToken} />}
    </div>
  );
};

export default AccountsComponent;
