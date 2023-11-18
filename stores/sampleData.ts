export const sampleProofRequest = {
  id: "7f38a193-0918-4a48-9fac-36adfdb8b542",
  typ: "application/iden3comm-plain-json",
  type: "https://iden3-communication.io/proofs/1.0/contract-invoke-request",
  thid: "7f38a193-0918-4a48-9fac-36adfdb8b542",
  body: {
      reason: "airdrop participation",
      transaction_data: {
          NEXT_PUBLIC_CONTRACT_ADDRESS: "<ERC20VerifierAddress>",
          method_id: "b68967e2",
          chain_id: 80001,
          network: "polygon-mumbai"
      },
      scope: [
          {
              id: 1,
              circuitId: "credentialAtomicQuerySigV2OnChain",
              query: {
                  allowedIssuers: [
                      "*"
                  ],
                  context: "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld",
                  credentialSubject: {
                      birthday: {
                          "$lt": 20020101
                      }
                  },
                  type: "KYCAgeCredential"
              }
          }
      ]
  }
}

export const sampleKYCAgeCredential =  {
  "@context": [
    {
      "@version": 1.1,
      "@protected": true,
      "id": "@id",
      "type": "@type",
      "KYCAgeCredential": {
        "@id": "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld#KYCAgeCredential",
        "@context": {
          "@version": 1.1,
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "kyc-vocab": "https://github.com/iden3/claim-schema-vocab/blob/main/credentials/kyc.md#",
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "birthday": {
            "@id": "kyc-vocab:birthday",
            "@type": "xsd:integer"
          },
          "documentType": {
            "@id": "kyc-vocab:documentType",
            "@type": "xsd:integer"
          }
        }
      },
      "KYCCountryOfResidenceCredential": {
        "@id": "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld#KYCCountryOfResidenceCredential",
        "@context": {
          "@version": 1.1,
          "@protected": true,
          "id": "@id",
          "type": "@type",
          "kyc-vocab": "https://github.com/iden3/claim-schema-vocab/blob/main/credentials/kyc.md#",
          "xsd": "http://www.w3.org/2001/XMLSchema#",
          "countryCode": {
            "@id": "kyc-vocab:countryCode",
            "@type": "xsd:integer"
          },
          "documentType": {
            "@id": "kyc-vocab:documentType",
            "@type": "xsd:integer"
          }
        }
      }
    }
  ]
}