import { userContext } from "@/context/UserContext";
import { PlaidTokenHttpRequest } from "@/data/connector/PlaidTokenExchangeHttpRequest";
import api from "@/utilities/api";
import { FC } from "react";
import { usePlaidLink } from "react-plaid-link";

type Props = {
  linkToken: string;
};

const PlaidLinkComponent: FC<Props> = (props) => {
  const { user } = userContext();
  const { open } = usePlaidLink({
    token: props.linkToken || "",
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

  return <>{props.linkToken !== "" && open()}</>;
};

export default PlaidLinkComponent;
