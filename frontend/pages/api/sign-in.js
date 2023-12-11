// pages/api/sign-in.js
import { auth } from "@iden3/js-iden3-auth";

// Create a map to store the auth requests and their session IDs
export const requestMap = new Map();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const sessionId = 1;
    const callbackURL = "/api/callback";
    const hostUrl = "http://localhost:8080";
    const audience =
      "did:polygonid:polygon:mumbai:2qDyy1kEo2AYcP3RT4XGea7BtxsY285szg6yP9SPrs";

    const uri = `${hostUrl}${callbackURL}?sessionId=${sessionId}`;

    // Generate request for basic authentication
    const request = auth.createAuthorizationRequest("test flow", audience, uri);

    request.id = "7f38a193-0918-4a48-9fac-36adfdb8b542";
    request.thid = "7f38a193-0918-4a48-9fac-36adfdb8b542";

    // Add request for a specific proof
    const proofRequest = {
      id: 1,
      circuitId: "credentialAtomicQuerySigV2",
      query: {
        allowedIssuers: ["*"],
        type: "KYCAgeCredential",
        context:
          "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld",
        credentialSubject: {
          birthday: {
            $lt: 20000101,
          },
        },
      },
    };
    const scope = request.body.scope ?? [];
    request.body.scope = [...scope, proofRequest];

    // Store auth request in map associated with session ID
    requestMap.set(`${sessionId}`, request);

    return res.status(200).json(request);
  }

  res.status(405).end(); // Method Not Allowed
}
