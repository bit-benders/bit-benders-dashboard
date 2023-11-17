import { CreateCredentialModal } from "@/src/components/CreateCredentialModal";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import userStore from "@/src/stores/userStore";
import theme from "@/src/styles/theme";
import { Box, Image, Text, Grid, Flex, Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";

function IssueCredentialsPage() {
  const { loggedIn } = userStore();
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
                <Text
                  fontSize="1rem"
                  fontWeight="700"
                  fontFamily={theme.fonts.body}
                  color={theme.colors.primary}
                >
                  CREATED CREDENTIALS
                </Text>
                <Grid templateColumns="repeat(6, 1fr)" gap={8} mt="1rem">
                  <Text fontSize="0.75rem">NO CREDENTIALS CREATED</Text>
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
          <Footer />
        </Box>
      )}
    </>
  );
}

export default IssueCredentialsPage;
