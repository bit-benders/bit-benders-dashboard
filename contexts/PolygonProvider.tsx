import dynamic from "next/dynamic";
import { FC, ReactNode } from "react";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthersExtension } from "@dynamic-labs/ethers-v5";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { MagicWalletConnectors } from "@dynamic-labs/magic";

const DCP = dynamic(
  () =>
    import("@dynamic-labs/sdk-react-core").then(
      (mod) => mod.DynamicContextProvider
    ),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export const PolygonProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <DCP
      settings={{
        environmentId: "5fef0973-9253-4abe-8cc9-9628eb4184bd",
        // walletConnectorExtensions: [EthersExtension],
        walletConnectors: [EthereumWalletConnectors, MagicWalletConnectors],
        cssOverrides: `
          .connect-button {
            width: 100%;
            padding: 0.75rem;
          }
        `,
      }}
    >
      {children}
    </DCP>
  );
};
