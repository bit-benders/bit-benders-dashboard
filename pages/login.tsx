import {
  Button,
  Flex,
  Stack,
  Text,
  Spinner,
  Input,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { RPCError, RPCErrorCode } from "magic-sdk";
import { useMagic } from "@/contexts/MagicProvider";
import theme from "@/styles/theme";
import userStore from "@/stores/userStore";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import * as web3 from "@solana/web3.js";
import { Keypair } from "@solana/web3.js";
import { DynamicWidget, useDynamicContext } from "@dynamic-labs/sdk-react-core";

function LoginPage() {
  const router = useRouter();
  const { magic } = useMagic();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isLoginInProgress, setLoginInProgress] = useState(false);

  const { loggedIn, username, loginType, wallet_address, userProfilePic } =
    userStore();
  const connection = new web3.Connection(process.env.NEXT_PUBLIC_RPC_URL!);
  const { user, isAuthenticated, handleLogOut } = useDynamicContext();

  useEffect(() => {
    if (isAuthenticated && user && !loggedIn && username.trim() == "") {
      router.push("/mycredentials");
      userStore.setState({
        loggedIn: true,
        loginType: "WALLET",
        username: user.verifiedCredentials[0].address,
        wallet_address: user.verifiedCredentials[0].address,
      });
      toast.success("Logged in");
      setLoginInProgress(false);
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [isAuthenticated, loggedIn, router, user, username]);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100vh"
      w="100vw"
      bg={theme.colors.background}
    >
      <Flex
        direction="column"
        alignItems="center"
        fontFamily="Montserrat"
        p="1rem"
        minWidth="22rem"
      >
        <Flex justifyContent="center" align="center" flexDirection="column">
          <Image src="/logo.png" alt="Game" borderRadius="1px" width="8rem" />
          <Heading
            fontSize="0.75rem"
            letterSpacing="0.25rem"
            fontWeight="400"
            fontFamily={theme.fonts.body}
            color={theme.colors.primary}
            my="1rem"
          >
            BY BIT BENDERS
          </Heading>
        </Flex>
        <Flex
          w="100%"
          // borderColor={theme.colors.white}
          // border="2px solid white"
          // borderRadius="1px"
          mt="3rem"
        >
          {/* {!isLoginInProgress && !connecting ? ( */}
          {!isLoginInProgress ? (
            <Stack spacing={5} w="100%">
              <DynamicWidget
                innerButtonComponent={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {/* <Image
                      src="/ethLogo.svg"
                      alt="Solana Logo"
                      style={{
                        width: "1rem",
                        height: "1rem",
                        marginRight: "0.5rem",
                      }}
                    /> */}
                    <p>LOGIN W/ WALLET</p>
                  </div>
                }
              />
            </Stack>
          ) : (
            <Flex
              w="100%"
              flexDirection="column"
              align="center"
              justifyContent="center"
              color={theme.colors.primary}
              my="4.58rem"
            >
              <Spinner size="sm" />
              <Text mt={3} fontSize="0.75rem" fontWeight="500">
                LOGGING IN
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default LoginPage;
