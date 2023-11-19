import { CreateCredentialModal } from "@/components/CreateCredentialModal";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import userStore from "@/stores/userStore";
import theme from "@/styles/theme";
import { Box, Image, Text, Grid, Flex, Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { createCredential } from "@/polygonid-sdk";

import { QRCode } from "@/components";


function IssueCredentialsPage() {
  const storedUserLogIn = localStorage.getItem('loggedIn')
  const loggedIn = storedUserLogIn ? true : false
  const router = useRouter();
  const [claim, setClaim] = useState([])

  /*
  const handleCreateCredential = async () => {
    const did =
      "did:polygonid:polygon:mumbai:2qLnmZsqmkVCXWPeKg3iokTXLETkk7JdxYcqcD24LE";
    const schema =
      "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v3.json";
    const credentialRequest = await createCredential(schema, did);
    console.log(credentialRequest);
  };
  */



  const [QRData, setQRData] = useState('');
  useEffect(() => {
    let interval: NodeJS.Timer;
    const auth = async () => {
      const authRequest = await fetch('http://localhost:6543/api/v1/requests/auth');
      setQRData(JSON.stringify(await authRequest.json()));

      const sessionID = authRequest.headers.get('x-id');

      interval = setInterval(async () => {
        try {
          const sessionResponse = await fetch(`http://localhost:6543/api/v1/status?id=${sessionID}`);
          
        } catch (e) {
          console.log('err->', e);
        }
      }, 2000);
    }
    auth();
  },
  []);


  return (
    <>
      {loggedIn ? (
        <Box minHeight="100vh">
          <Navbar />
          <Flex
            h="92vh"
            w="100vw"
            bg={theme.colors.background}
            color={theme.colors.primary}
            fontFamily="Montserrat"
            justifyContent="spacebetween"
            align="center"
          >
            <Flex
              direction="column"
              px="2rem"
              py="1.5rem"
              h="100%"
              w="100%"
              overflowY="auto"
            >
              {/* <Flex
                flexDirection="row"
                w="100%"
                mt="0.25rem"
                mb="2rem"
                gap="1rem"
              >
                <CreateCredentialModal />
              </Flex> */}
              <Flex direction="column">
                {/*
                <Button
                  onClick={handleCreateCredential}
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
                  ISSUE NEW AGE CREDENTIAL +
                </Button>
                
                */}
                <Box justifyContent="center" display="flex" padding={10} >
                  <Box backgroundColor="white" padding={8}>
                    <QRCode value={QRData}/>
                  </Box>
                </Box>
                {/* <Text
                  fontSize="1rem"
                  fontWeight="700"
                  fontFamily={theme.fonts.body}
                  color={theme.colors.primary}
                >
                  CREATED CREDENTIALS
                </Text>
                <Grid templateColumns="repeat(6, 1fr)" gap={8} mt="1rem">
                  <Text fontSize="0.75rem">NO CREDENTIALS CREATED</Text>
                </Grid> */}
              </Flex>
            </Flex>
          </Flex>
        </Box>
      ) : (
        <Box minHeight="100vh">
          <Navbar />
          <Flex
            h="92vh"
            w="100vw"
            bg={theme.colors.background}
            color={theme.colors.primary}
            fontFamily="Montserrat"
            justifyContent="center"
            align="center"
          >
            <Grid>
              <Text>AW SHUCKS, PLEASE LOGIN TO USE DASHBOARD!</Text>{" "}
            </Grid>
          </Flex>
          <Footer />
        </Box>
      )}
    </>
  );
}

export default IssueCredentialsPage;
