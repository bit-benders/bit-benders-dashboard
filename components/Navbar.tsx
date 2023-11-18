import {
  Flex,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  VStack,
  Button,
  useTheme,
  Image,
  Box,
  Tooltip,
  Heading,
  Spinner,
} from "@chakra-ui/react";
// import { useConnection } from "@solana/wallet-adapter-react";
import { useRouter } from "next/router";
// import { useEffect } from "react";
import userStore from "@/stores/userStore";
import toast from "react-hot-toast";
import { useMagic } from "../contexts/MagicProvider";
// import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useState } from "react";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

export const Navbar: React.FC = () => {
  const { loggedIn, loginType, wallet_address } = userStore();
  const router = useRouter();
  const { pathname } = useRouter();
  const theme = useTheme();
  const { magic } = useMagic();
  const {
    user,
    isAuthenticated,
    handleLogOut: handleDynamicLogOut,
  } = useDynamicContext();
  const [isLogoutInProgress, setLogoutInProgress] = useState(false);

  const getTextColor = (route: string) => {
    if (pathname.includes(route)) {
      return theme.colors.lightBlue;
    }
    return theme.colors.primary;
  };

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(wallet_address);
      toast.success("Copied Address");
    } catch (err) {
      console.error("Failed to copy address: ", err);
      toast.error("Failed to copy address");
    }
  };

  const formatUsername = (name: string) => {
    if (name.length <= 6 || name == "") {
      return name;
    }
    return `${name.substring(0, 2)}...${name.substring(name.length - 4)}`;
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      bg={theme.colors.background}
      h="10vh"
    >
      <Flex
        w="15%"
        h="100%"
        justifyContent="center"
        flexDirection="column"
        align="start"
        py="1rem"
        px="2rem"
      >
        <Image
          src="/logo.png"
          alt="Game"
          borderRadius="1px"
          h="30px"
          w="30px"
          cursor="pointer"
          onClick={() => {
            const gameId = "1234";
            router.push(`/game/${gameId}`);
          }}
        />
      </Flex>

      <Flex
        w="70%"
        h="100%"
        justifyContent="center"
        align="center"
        py="1rem"
        px="2rem"
        gap="5rem"
      >
        <Text
          cursor="pointer"
          fontSize="0.75rem"
          fontWeight="700"
          letterSpacing="1px"
          fontFamily={theme.fonts.body}
          borderRadius="1px"
          color={getTextColor("/mycredentials")}
          py="0.5rem"
          px="1rem"
          onClick={() => router.push("/mycredentials")}
        >
          MY CREDENTIALS
        </Text>
        <Text
          cursor="pointer"
          fontSize="0.75rem"
          fontWeight="700"
          letterSpacing="1px"
          fontFamily={theme.fonts.body}
          borderRadius="1px"
          color={getTextColor("/issuecredentials")}
          py="0.5rem"
          px="1rem"
          onClick={() => router.push("/issuecredentials")}
        >
          ISSUE CREDENTIALS
        </Text>

        {/* <Text
          cursor="pointer"
          fontSize="1rem"
          fontWeight="600"
          fontFamily={theme.fonts.heading}
          color={getTextColor("/network")}
          onClick={() => {}}

        >
          THE NETWORK
        </Text> */}
      </Flex>

      <Flex w="15%" h="100%" justifyContent="flex-end" align="center" pr="2rem">
        {loggedIn ? (
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <Button
                bg={theme.colors.background}
                py="0.5rem"
                h="2rem"
                px="2rem"
                cursor="pointer"
                borderColor={theme.colors.primary}
                borderWidth="2px"
                borderRadius="1px"
                color={theme.colors.primary}
                fontSize="0.75rem"
                letterSpacing="1px"
                fontWeight="600"
                _hover={{
                  color: theme.colors.background,
                  borderColor: theme.colors.primary,
                  bg: theme.colors.primary,
                }}
              >
                {formatUsername(wallet_address)}
              </Button>
            </PopoverTrigger>

            <PopoverContent
              bg={theme.colors.background}
              color={theme.colors.primary}
              borderColor={theme.colors.primary}
              borderRadius="1px"
              borderWidth="2px"
              minW="10rem"
              w="15rem"
              outline="none"
              zIndex={100}
              boxShadow="1px 1px 20px black"
            >
              <VStack spacing={4} p="1rem">
                <Flex direction="column">
                  <Flex align="center" justifyContent="flex-start" pb="1.25rem">
                    <Box>
                      <Tooltip
                        label="Account"
                        aria-label="Account"
                        bg={theme.colors.black}
                      >
                        <Image
                          src="/profilePic.svg"
                          alt="User Profile Pic"
                          boxSize="3rem"
                          ml="-0.25rem"
                          mr="1rem"
                          cursor="pointer"
                          onClick={() => {
                            // router.push("/account");
                          }}
                        />
                      </Tooltip>
                    </Box>
                    <Tooltip
                      label="Address"
                      aria-label="Address"
                      bg={theme.colors.black}
                    >
                      <Text color={theme.colors.primary}>
                        {formatUsername(wallet_address)}
                      </Text>
                    </Tooltip>

                    <Tooltip
                      label="Copy"
                      aria-label="Copy"
                      bg={theme.colors.black}
                    >
                      <Flex color={theme.colors.primary}>
                        <FaCopy
                          style={{
                            marginLeft: "10px",
                            cursor: "pointer",
                          }}
                          onClick={handleCopyClick}
                        />
                      </Flex>
                    </Tooltip>
                  </Flex>
                  <Button
                    variant="outline"
                    borderWidth="2px"
                    borderColor={theme.colors.primary}
                    bg={theme.colors.background}
                    borderRadius="1px"
                    fontWeight="600"
                    fontSize="0.75rem"
                    w="100%"
                    mb="0.5rem"
                    h="2.5rem"
                    isDisabled={isLogoutInProgress}
                    isLoading={isLogoutInProgress}
                    spinner={
                      <Flex flexDirection="row" align="center">
                        <Spinner color={theme.colors.primary} size="sm" />
                      </Flex>
                    }
                    onClick={async () => {
                      setLogoutInProgress(true);
                      try {
                        if (loggedIn && loginType == "WALLET") {
                          await handleDynamicLogOut();
                          new Promise((resolve) => setTimeout(resolve, 1500));
                        }
                        // if (
                        //   loggedIn &&
                        //   loginType == "EMAIL" &&
                        //   (await magic?.user.isLoggedIn()) &&
                        //   magic
                        // ) {
                        //   await magic?.user.logout();
                        // }
                        userStore.setState({
                          loggedIn: false,
                          loginType: "",
                          username: "",
                          wallet_address: "",
                        });
                        router.push("/");
                        toast.success("Logged out");
                      } catch (e) {
                        toast.error("Failed to logout");
                      }
                      router.push("/login");
                      setLogoutInProgress(false);
                    }}
                    _hover={{
                      color: theme.colors.background,
                      borderColor: theme.colors.primary,
                      bg: theme.colors.primary,
                    }}
                  >
                    LOGOUT
                  </Button>
                </Flex>
              </VStack>
            </PopoverContent>
          </Popover>
        ) : (
          <>
            <Button
              onClick={() => router.push("/login")}
              bg={theme.colors.background}
              py="0.5rem"
              h="2rem"
              px="2rem"
              cursor="pointer"
              borderColor={theme.colors.lightBlue}
              borderWidth="2px"
              borderRadius="1px"
              color={theme.colors.lightBlue}
              fontSize="0.75rem"
              letterSpacing="1px"
              fontWeight="600"
              _hover={{
                color: theme.colors.background,
                borderColor: theme.colors.primary,
                bg: theme.colors.primary,
              }}
            >
              LOGIN
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};
