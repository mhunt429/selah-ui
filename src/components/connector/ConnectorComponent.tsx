import { userContext } from "@/context/UserContext";
import { PlaidTokenHttpRequest } from "@/data/connector/PlaidLinkToken";
import api from "@/utilities/api";
import { FC } from "react";
import { usePlaidLink } from "react-plaid-link";
import { useNavigate, useParams } from "react-router-dom";

export const ConnectorComponent: FC = () => {
  const params = useParams();
  const { user } = userContext();
  const navigate = useNavigate();

  const linkToken = params.linkToken;

  if (!linkToken) {
    navigate("/accounts");
    return;
  }

  const { open } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      const tokenExchangeRequest: PlaidTokenHttpRequest = {
        publicToken: public_token,
        userId: user?.id ?? "",
        institutionName: metadata.institution?.name ?? "",
        institutionId: metadata.institution?.institution_id ?? "",
      };
      api.post("/connector/exchange", tokenExchangeRequest).then((response) => {
        console.log("Public token exchange successful:", response);
      });
    },
  });

  return <>{open}</>;
};

export default ConnectorComponent;
