import theme from "@/styles/theme";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Input,
  Flex,
  VStack,
  Text,
  Heading,
  Spinner,
  Box,
  HStack,
  Textarea,
  Select,
  Image,
} from "@chakra-ui/react";
import ChakraReactSelect from "./ChakraReactSelect";
import { useForm, Controller } from "react-hook-form";
import React, { useEffect, useState } from "react";
import userStore from "@/stores/userStore";
import toast from "react-hot-toast";
import { useFieldArray } from "react-hook-form";
import { useRouter } from "next/router";

export function CreateHumanCoreCredential() {
  const {
    isOpen: isCreateDropModalOpen,
    onOpen: onCreateDropModalOpen,
    onClose: onCreateDropModalClose,
  } = useDisclosure();

  const { loggedIn, loginType, username, wallet_address } = userStore();
  const router = useRouter()

  // const [selectedOption, setSelectedOption] = useState<OptionType[]>([]);
  const [takingQuiz, setTakingQuiz] = useState(false);
  const [selectedProfileImage, setSelectedProfileImage] = useState<File | null>(
    null
  );
  const { handleSubmit, control, formState } = useForm<FormData>();
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "additionalPersonalityTraits",
  });
  const maxMessages = 10;

  const onSubmit = async (data: FormData) => {
    router.push("/issuecredentials")

    /*
    try {
      setTakingQuiz(true);

      if (!loggedIn) {
        throw Error("Not logged in");
      }


      console.log("0");

      toast.success("Credential created");
    } catch (error) {
      console.error("Error in onSubmit:", error);
      toast.error("Failed to create credential");
    } finally {
      setTakingQuiz(false);
    }
    */
  };

  return (
    <>
      <Button
        onClick={onCreateDropModalOpen}
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
        CREATE PSYCHOGRAPHIC PROFILE WITH HUMANCORE +
      </Button>
      <Modal
        isOpen={isCreateDropModalOpen}
        onClose={onCreateDropModalClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg={theme.colors.background} color={theme.colors.primary}>
          <ModalHeader>
            <Heading fontSize="1.5rem" fontFamily={theme.fonts.body}>
              IMPORT FROM HUMANCORE
            </Heading>
          </ModalHeader>
          <ModalBody>
            {!takingQuiz ? (
              <VStack as="form" gap="1rem" onSubmit={handleSubmit(onSubmit)}>

                  <Button
                    onClick={() => router.push("https://app.humancore.ai/")}
                    variant="outline"
                    borderColor={theme.colors.primary}
                    border="2px solid"
                    borderRadius="1px"
                    color={theme.colors.primary}
                    w="47%"
                    h="2.5rem"
                    fontSize="0.75rem"
                    fontWeight="600"
                    isDisabled={takingQuiz}
                    _disabled={{
                      opacity: 0.5,
                      cursor: "default",
                      backgroundColor: "transparent",
                    }}
                  >
                    IMPORT
                  </Button>
                <Flex
                  justifyContent="space-between"
                  w="100%"
                  py="1rem"
                  mt="1rem"
                >
                  <Button
                    onClick={onCreateDropModalClose}
                    variant="outline"
                    borderColor={theme.colors.primary}
                    border="2px solid"
                    borderRadius="1px"
                    color={theme.colors.primary}
                    w="47%"
                    h="2.5rem"
                    fontSize="0.75rem"
                    fontWeight="600"
                    isDisabled={takingQuiz}
                    _disabled={{
                      opacity: 0.5,
                      cursor: "default",
                      backgroundColor: "transparent",
                    }}
                  >
                    CANCEL
                  </Button>
                  <Button
                    type="submit"
                    variant="outline"
                    borderColor={theme.colors.primary}
                    backgroundColor={theme.colors.primary}
                    borderWidth="2px"
                    borderRadius="1px"
                    color={theme.colors.background}
                    w="47%"
                    h="2.5rem"
                    fontSize="0.75rem"
                    fontWeight="700"
                    _hover={{
                      color: theme.colors.background,
                      backgroundColor: theme.colors.primary,
                      borderColor: theme.colors.primary,
                    }}
                    isDisabled={takingQuiz}
                    _disabled={{
                      opacity: 0.5,
                      cursor: "default",
                      borderColor: theme.colors.primary,
                    }}
                  >
                    CREATE
                  </Button>
                </Flex>
              </VStack>
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
                  SUBMITTING RESPONSES
                </Text>
                <Text mt={10} fontSize="0.5rem" fontWeight="600" color="red">
                  WARNING: CLOSING WINDOW MAY RESULT IN QUIZ NOT BEING SUBMITTED
                </Text>
              </Flex>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "typea", label: "Type A" },
  { value: "typeb", label: "Type B" },
  { value: "typec", label: "Type C" },
];

type AdditionalPersonalityTrait = {
  type: string;
  message: string;
};

type FormData = {
  userName: string;
  personalityDescription: string;
  personalityQuestion: string;
  profileImage: string;
  additionalPersonalityTraits: AdditionalPersonalityTrait[];
};

function truncateFilename(filename: string, maxLength = 30) {
  if (filename.length <= maxLength || !filename.includes(".")) return filename;

  const lastDotIndex = filename.lastIndexOf(".");
  const fileExtension = filename.slice(lastDotIndex);
  const threeCharsBeforeDot = filename.slice(lastDotIndex - 5, lastDotIndex);
  const mainPartLength =
    maxLength - threeCharsBeforeDot.length - fileExtension.length - 3; // -3 for "..."
  if (mainPartLength <= 0) return `...${threeCharsBeforeDot}${fileExtension}`;
  return `${filename.slice(
    0,
    mainPartLength
  )}...${threeCharsBeforeDot}${fileExtension}`;
}
