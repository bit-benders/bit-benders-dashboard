import { auth, resolver } from "@iden3/js-iden3-auth";
import getRawBody from "raw-body";
import path from "path";
import { requestMap } from "./sign-in";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const sessionId = req.query.sessionId;
    const raw = await getRawBody(req);
    const tokenStr = raw.toString().trim();

    const ethURL = process.env.local;
    const contractAddress = "0x134B1BE34911E39A8397ec6289782989729807a4";
    const keyDIR = "/path/to/your/keys";

    const ethStateResolver = new resolver.EthStateResolver(
      ethURL,
      contractAddress
    );

    const resolvers = {
      "polygon:mumbai": ethStateResolver,
    };

    const authRequest = requestMap.get(`${sessionId}`);

    const verifier = await auth.Verifier.newVerifier({
      stateResolver: resolvers,
      circuitsDir: path.join(__dirname, keyDIR),
      ipfsGatewayURL: "https://ipfs.io",
    });

    try {
      const opts = {
        AcceptedStateTransitionDelay: 5 * 60 * 1000, // 5 minutes
      };
      const authResponse = await verifier.fullVerify(
        tokenStr,
        authRequest,
        opts
      );
      return res.status(200).json({
        message:
          "User with ID: " + authResponse.from + " Successfully authenticated",
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  res.status(405).end(); // Method Not Allowed
}
