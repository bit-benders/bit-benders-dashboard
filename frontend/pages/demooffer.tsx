import theme from "@/styles/theme";
import { Box, Image, Text, Grid, Flex, Button, Input, Link } from "@chakra-ui/react";

import { QRCode } from "@/components";

import { Navbar } from "@/components/Navbar";


function DemoOfferPage() {
  return (
    <>
    <Navbar />
    <Box minHeight="100vh">
        <Flex
        h="92vh"
        w="100vw"
        bg={theme.colors.background}
        color={theme.colors.primary}
        fontFamily="Montserrat"
        justifyContent="center"
        align="center"
        >
         <Box justifyContent="center" display="flex" padding={10} >
            <Box backgroundColor="white" padding={8}>
              <QRCode value={"kasjlakjsflsdkfjsldfkj"}/>
            </Box>
          </Box>
        </Flex>
    </Box>
    <Link href="https://user-ui:password-ui@issuer-ui.polygonid.me/credentials/issue?schema=5bfaecfa-29af-44f6-b416-049750a27b73">
      <Text textColor="white" marginTop={20} align="center">Test Issuer</Text>
    </Link>
    </>
  );
}

export default DemoOfferPage;
