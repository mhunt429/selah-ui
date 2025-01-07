import api from "@/utilities/api";
import { FC, useState } from "react";
import AppPrimaryButton from "../shared/AppPrimaryButton";
import PlaidLinkComponent from "../shared/PlaidLinkComponent";
import { EmptyState } from "@/components/ui/empty-state";
import { useNavigate } from "react-router-dom";
import { LinkTokenResponse } from "@/data/connector/PlaidLinkToken";

const AccountsComponent: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [linkToken, setLinkToken] = useState<string>("");
  const [accounts, setMyArray] = useState([]);

  const navigate = useNavigate();

  const handleConnectAccountClick = async () => {
    setIsLoading(true);
    try {
      const response = await api.get<LinkTokenResponse>("/connector/link");
      setLinkToken(response.data.data.link_token);
      navigate(`/connector?linkToken=${response.data.data.link_token}`);
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
          onClick={handleConnectAccountClick}
          btnText={isLoading ? "Loading..." : "Import Accounts"}
          // Ensure button is above overlay
        />
      </EmptyState>

      {isLoading ? null : <PlaidLinkComponent linkToken={linkToken} />}
    </div>
  );
};

export default AccountsComponent;
