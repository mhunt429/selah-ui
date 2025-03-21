import { userContext } from "@/context/UserContext";
import { PlaidTokenHttpRequest } from "@/data/connector/PlaidLinkToken";
import api from "@/utilities/api";
import { FC, useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";
import { useNavigate, useSearchParams } from "react-router-dom";

export const ConnectorComponent: FC = () => {
  const [searchParams] = useSearchParams();
  const { user } = userContext();
  const navigate = useNavigate();

  const linkToken = searchParams.get("linkToken");

  useEffect(() => {
    if (!linkToken) {
      navigate("/accounts");
    }
  }, [linkToken, navigate]);

  if (!linkToken) {
    return null;
  }

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      console.log("Plaid linked successfully:", public_token, metadata);

      const tokenExchangeRequest: PlaidTokenHttpRequest = {
        publicToken: public_token,
        userId: user?.id ?? "",
        institutionName: metadata.institution?.name ?? "",
        institutionId: metadata.institution?.institution_id ?? "",
      };

      api.post("/connector/exchange", tokenExchangeRequest).then(() => {
        navigate("/accounts");
      });
    },
  });

  useEffect(() => {
    if (ready) {
      open();
    }
  }, [ready, open]);

  return <div>Loading...</div>;
};

export default ConnectorComponent;
