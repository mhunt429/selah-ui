import api from "@/utilities/api";
import { FC, useState } from "react";
import AppPrimaryButton from "../shared/AppPrimaryButton";
import PlaidLinkComponent from "../shared/PlaidLinkComponent";
import { EmptyState } from "@/components/ui/empty-state";

const AccountsComponent: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [linkToken, setLinkToken] = useState<string>("");
  const [accounts, setMyArray] = useState([]);

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
    <div style={{ position: "relative", zIndex: 10 }}>
      <EmptyState
        title="You currently have no account data available."
        description="Use the button below to link any accounts from your financial institutions."
      >
        <AppPrimaryButton
          onClick={handleButtonClick}
          btnText={isLoading ? "Loading..." : "Import Accounts"}
          // Ensure button is above overlay
        />
      </EmptyState>

      {isLoading ? null : <PlaidLinkComponent linkToken={linkToken} />}
    </div>
  );
};

export default AccountsComponent;
