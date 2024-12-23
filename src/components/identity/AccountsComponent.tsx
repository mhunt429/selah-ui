import api from "@/utilities/api";
import { FC, useEffect, useState } from "react";
import { usePlaidLink } from "react-plaid-link";
import AppPrimaryButton from "../shared/AppPrimaryButton";

const AccountsComponent: FC = () => {
  const [linkToken, setLinkToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchLinkToken = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      const response: any = await api.post("/connector/link");
      setLinkToken(response.data.data.link_token); // Set the received link token in state
    } catch (error) {
      console.error("Error fetching link token", error);
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  const { open, ready } = usePlaidLink({
    token: linkToken ?? "", // Pass the link token once it's available
    onSuccess: (public_token, metadata) => {
      console.log(public_token);
      console.log(metadata);
      // Send the public_token to your server for further processing
      api.post("/connector/exchange", { public_token }).then((response) => {
        console.log("Public token exchange successful:", response);
      });
    },
  });

  const handleButtonClick = async () => {
    fetchLinkToken;
    if (!linkToken) {
      await fetchLinkToken(); // Fetch the token if not already fetched
    }
    if (linkToken && ready) {
      open(); // Open the Plaid Link widget
    }
  };

  return (
    <div>
      <AppPrimaryButton onClick={handleButtonClick} />
    </div>
  );
};

export default AccountsComponent;
