import { Text, Box, Button, Grid, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import theme from "@/styles/theme";
import JSONPretty from "react-json-pretty";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function ClaimCredentialsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [claim, setClaim] = useState<{ credentialSchema: string }>();
  const router = useRouter();
  const { userID } = router.query;

  useEffect(() => {
    const claimJson = {
      credentialSchema:
        "https://raw.githubusercontent.com/bit-benders/bit-benders-dashboard/main/frontend/schemas/Psychographic-Profile-Demo.json",
      type: "demo",
      credentialSubject: {
        en1: 1,
        en2: 2,
        en3: 3,
        en4: 4,
        en5: 5,
        en6: 6,
        en7: 7,
        en8: 8,
        en9: 9,
        id: userID,
      },
      expiration: 1893456000,
    };
    setClaim(claimJson);
  }, [userID]);

  const claimToProfile = async () => {
    setIsLoaded(true);
    try {
      console.log(`CLAIM: ${JSON.stringify(claim)}`);
      const response = await fetch(
        `http://localhost:3333/api/v1/identities/${process.env.NEXT_PUBLIC_ONCHAIN_ISSUER_DID}/claims`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(claim),
        }
      );

      const data = await response.json();
      console.log(`RESPONSE DATA: ${JSON.stringify(response)}`);

      //const credentialResponse = await fetch(`http://localhost:3333/api/v1/identities/${process.env.NEXT_PUBLIC_ONCHAIN_ISSUER_DID}/claims/${data.id}`);
      //const credential = await credentialResponse.json();

      //console.log('credential', credential);

      //router.push(`/offer?claimId=${data.id}&issuer=${credential.issuer}&subject=${credential.credentialSubject.id}`);
    } catch (error) {
      console.error("Error making the request:", error);
    } finally {
      setIsLoaded(false);
    }
  };
  return (
    <>
      <Navbar />
      <Box justifyContent="center" alignItems="center" marginTop={10}>
        {claim && claim.credentialSchema !== undefined && (
          <Container>
            <Box textAlign="left">
              <JSONPretty
                id="json-pretty"
                style={{
                  fontSize: "0.75em",
                }}
                data={JSON.stringify(claim)}
                theme={jsonStyle}
              ></JSONPretty>
            </Box>
            <Button
              marginTop={8}
              onClick={() => router.push("/demooffer")}
              variant="outline"
              borderColor={theme.colors.primary}
              border="2px solid"
              borderRadius="1px"
              color={theme.colors.primary}
              w="100%"
              h="3rem"
              fontSize="0.8rem"
              fontWeight="700"
              fontFamily={theme.fonts.body}
              _hover={{
                color: theme.colors.background,
                backgroundColor: theme.colors.primary,
                borderColor: theme.colors.primary,
              }}
            >
              CLAIM PSYCHOGRAPHIC PROFILE CREDENTIAL
            </Button>
            <Link href="https://user-ui:password-ui@issuer-ui.polygonid.me/credentials/issue?schema=5bfaecfa-29af-44f6-b416-049750a27b73">
              <Text textColor="white" marginTop={20} align="center">
                Test Issuer
              </Text>
            </Link>
          </Container>
        )}
      </Box>
    </>
  );
}

const jsonStyle = {
  main: "line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;",
  error: "line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;",
  key: "color:#f92672;",
  string: "color:#fd971f;",
  value: "color:#a6e22e;",
  boolean: "color:#ac81fe;",
};
