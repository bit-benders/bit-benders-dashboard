import { Text, Box, Button } from "@chakra-ui/react"
import { useState } from "react"
import { useRouter } from "next/router"
import theme from "@/styles/theme";

export default function ClaimCredentialsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [claim, setClaim] = useState({})
  const router = useRouter()
  const { userID } = router.query
  console.log(userID)

  const claimToProfile = async () => {
    const claim = 
    {
      credentialSchema: 'ipfs://QmUDVTBgdemq3YzHRJQvz55M1Xdbu3PzjMnZGj5deKB2vG',
      type: 'demo',
      credentialSubject: {
        id: userID,
        en1: 1,
        en2: 2, 
        en3: 3,
        en4: 4,
        en5: 5,
        en6: 6,
        en7: 7,
        en8: 8,
        en9: 9
      },
      expiration: 1893456000,
    }

    setIsLoaded(true);
    try {
      const response = await fetch(`http://localhost:3333/api/v1/identities/${process.env.NEXT_PUBLIC_ONCHAIN_ISSUER_DID}/claims`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(claim),
      });
  
      const data = await response.json();
      console.log(`data: ${JSON.stringify(response)}`)
      
      //const credentialResponse = await fetch(`http://localhost:3333/api/v1/identities/${process.env.NEXT_PUBLIC_ONCHAIN_ISSUER_DID}/claims/${data.id}`);
      //const credential = await credentialResponse.json();
      
      //console.log('credential', credential);
      
      //router.push(`/offer?claimId=${data.id}&issuer=${credential.issuer}&subject=${credential.credentialSubject.id}`);
    } catch (error) {
      console.error('Error making the request:', error);
    } finally {
      setIsLoaded(false);
    }
}
    return (
      <Box>
        <Text>Claim Page</Text>
                <Button
                  onClick={claimToProfile}
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
      </Box>
      
    )
}
