import { CreateCredentialModal } from "@/components/CreateCredentialModal";
import { Navbar } from "@/components/Navbar";
import userStore from "@/stores/userStore";
import theme from "@/styles/theme";
import { Box, Image, Flex, Grid, Input, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

function MyCredentialsPage() {
  const storedUser = JSON.parse(localStorage.getItem('user'))
  console.log(storedUser)
  if (storedUser) {
    userStore.setState({
      loggedIn: true,
      loginType: 'WALLET',
      username: storedUser.verifiedCredentials[0].address,
      wallet_address: storedUser.verifiedCredentials[0].address,
    });
  }
  const { loggedIn } = userStore()
  const router = useRouter();

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
              <Flex
                flexDirection="row"
                w="100%"
                mt="0.25rem"
                mb="2rem"
                gap="1rem"
              >
                <CreateCredentialModal />
              </Flex>
              <Flex direction="column">
                <Text
                  fontSize="1rem"
                  fontWeight="800"
                  letterSpacing="1px"
                  fontFamily={theme.fonts.body}
                  color={theme.colors.primary}
                >
                  MY CREDENTIALS
                </Text>
                <Grid templateColumns="repeat(6, 1fr)" gap={8} mt="1rem">
                  <Text fontSize="0.75rem">NO CREDENTIALS FOUND</Text>

                  {/* <Box w="10rem" h="100%">
                    <Image
                      src="https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S2_1200x1600-a0ffbc8c70fd33180b6f1bdb1dfd4eb2"
                      alt="Credential"
                      borderRadius="1px"
                      h="10rem"
                      w="10rem"
                      cursor="pointer"
                      onClick={() => {
                        const credentialId = "1234";
                      }}
                    />
                  </Box> */}
                </Grid>
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
        </Box>
      )}
    </>
  );
}

export default MyCredentialsPage;
