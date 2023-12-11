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
  const storedUserLogIn = localStorage.getItem("loggedIn");
  const loggedIn = storedUserLogIn ? true : false;
  const router = useRouter();
  const [QRData, setQRData] = useState("");

  useEffect(() => {
    let intervalId: number;

    const auth = async () => {
      const authRequest = await fetch(
        "http://localhost:6543/api/v1/requests/auth"
      );
      const authRequestJson = await authRequest.json();
      const sessionID = authRequest.headers.get("x-id");

      intervalId = window.setInterval(async () => {
        try {
          const sessionResponse = await fetch(
            `http://localhost:6543/api/v1/status?id=${sessionID}`
          );
          const data = await sessionResponse.json();

          if (sessionResponse.ok) {
            window.clearInterval(intervalId);
            router.push(`/claimcredential?userID=${data.id}`);
          }
        } catch (e) {
          console.error("err->", e);
        }
      }, 2000);
    };

    auth();

    return () => window.clearInterval(intervalId);
  }, [router]);

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
              <Flex direction="column">
                <Box justifyContent="center" display="flex" padding={10}>
                  <Box backgroundColor="white" padding={8}>
                    <QRCode value={QRData} />
                  </Box>
                </Box>
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
