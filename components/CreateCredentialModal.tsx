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
import { useForm, Controller, useFieldArray } from "react-hook-form";
import React, { useEffect, useState } from "react";
import userStore from "@/stores/userStore";
import toast from "react-hot-toast";

export function CreateCredentialModal() {
  const {
    isOpen: isCreateDropModalOpen,
    onOpen: onCreateDropModalOpen,
    onClose: onCreateDropModalClose,
  } = useDisclosure();

  const { loggedIn, loginType, username, wallet_address } = userStore();

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
        CREATE PSYCHOGRAPHIC PROFILE +
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
              PSYCHOGRAPHIC PROFILE QUIZ
            </Heading>
          </ModalHeader>
          <ModalBody>
            {!takingQuiz ? (
              <VStack as="form" gap="1rem" onSubmit={handleSubmit(onSubmit)}>
                <Flex flexDirection="column" w="100%" mt="0rem">
                  <Text
                    fontWeight="600"
                    fontFamily={theme.fonts.body}
                    fontSize="0.75rem"
                    pb="0.25rem"
                  >
                    What do you go by? (Name/Nickname)*
                  </Text>
                  <Controller
                    name="userName"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Enter your name/nickname"
                        w="100%"
                        h="2rem"
                        fontSize="0.75rem"
                        bg={theme.colors.input}
                        borderWidth="2px"
                        borderRadius="1px"
                        borderColor={theme.colors.input}
                        fontWeight="500"
                        letterSpacing="1px"
                        color={theme.colors.primary}
                        focusBorderColor={theme.colors.input}
                        _placeholder={{ color: theme.colors.primary }}
                        _focus={{ boxShadow: "none" }}
                      />
                    )}
                  />

                  {errors.userName && <span>User name is required</span>}
                </Flex>
                <Flex flexDirection="column" w="100%" mt="0rem">
                  <Text
                    fontWeight="600"
                    fontFamily={theme.fonts.body}
                    fontSize="0.75rem"
                    pb="0.25rem"
                  >
                    Describe your personality*
                  </Text>
                  <Controller
                    name="personalityDescription"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Textarea
                        {...field}
                        placeholder="Describe your personality"
                        w="100%"
                        minH="5rem"
                        fontSize="0.75rem"
                        bg={theme.colors.input}
                        borderWidth="2px"
                        borderRadius="1px"
                        borderColor={theme.colors.input}
                        fontWeight="500"
                        letterSpacing="1px"
                        color={theme.colors.primary}
                        focusBorderColor={theme.colors.input}
                        _placeholder={{ color: theme.colors.primary }}
                        _focus={{ boxShadow: "none" }}
                        resize="vertical"
                      />
                    )}
                  />
                  {errors.personalityDescription && (
                    <Text color="red.500" fontSize="sm" mt="1">
                      Personality description is required
                    </Text>
                  )}
                </Flex>
                <Flex flexDirection="column" w="100%" mt="0rem">
                  <Text
                    fontWeight="600"
                    fontFamily={theme.fonts.body}
                    fontSize="0.75rem"
                    pb="0.25rem"
                  >
                    Random personality question*
                  </Text>
                  <Controller
                    name="personalityQuestion"
                    control={control}
                    defaultValue=""
                    rules={{ required: false }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Enter answer to question"
                        w="100%"
                        h="2rem"
                        fontSize="0.75rem"
                        bg={theme.colors.input}
                        borderWidth="2px"
                        borderRadius="1px"
                        borderColor={theme.colors.input}
                        fontWeight="500"
                        letterSpacing="1px"
                        color={theme.colors.primary}
                        focusBorderColor={theme.colors.input}
                        _placeholder={{ color: theme.colors.primary }}
                        _focus={{ boxShadow: "none" }}
                      />
                    )}
                  />
                  {errors.personalityQuestion && (
                    <Text color="red.500" fontSize="sm" mt="1">
                      Personality question is required
                    </Text>
                  )}
                </Flex>
                <Flex flexDirection="column" w="100%" mt="0rem">
                  <Text
                    fontWeight="600"
                    fontFamily={theme.fonts.body}
                    fontSize="0.75rem"
                    pb="0.25rem"
                  >
                    Profile Pic
                  </Text>
                  <Flex alignItems="end" marginBottom="0.5rem">
                    {/* Image Preview or Placeholder */}
                    {selectedProfileImage ? (
                      <Flex
                        flexDirection="column"
                        alignItems="center"
                        marginRight="1rem"
                      >
                        <Image
                          src={URL.createObjectURL(selectedProfileImage)}
                          alt="Selected profile image"
                          style={{
                            borderRadius: "4px",
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                        />
                      </Flex>
                    ) : (
                      <Flex
                        align="center"
                        justifyContent="center"
                        boxSize="100px"
                        backgroundColor={theme.colors.input}
                        borderRadius="1px"
                        marginRight="1rem"
                      >
                        <Text
                          textAlign="center"
                          w="80%"
                          color={theme.colors.primary}
                          fontSize="0.75rem"
                        >
                          No image selected
                        </Text>
                      </Flex>
                    )}

                    <Flex
                      alignItems="start"
                      justifyContent="center"
                      borderRadius="1px"
                      flexDirection="column"
                      marginRight="1rem"
                      gap={2}
                    >
                      {selectedProfileImage ? (
                        <Text fontSize="0.75rem">
                          {selectedProfileImage &&
                            truncateFilename(selectedProfileImage.name)}
                        </Text>
                      ) : (
                        <Text
                          w="100%"
                          h="100%"
                          color={theme.colors.primary}
                          fontSize="0.75rem"
                        ></Text>
                      )}
                      <Controller
                        name="profileImage"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <label
                            style={{
                              display: "inline-block",
                              width: "auto",
                              padding: "0.5rem 1rem",
                              fontSize: "0.75rem",
                              backgroundColor: theme.colors.background,
                              borderWidth: "2px",
                              borderRadius: "2px",
                              borderColor: theme.colors.primary,
                              fontWeight: "600",
                              color: theme.colors.primary,
                              cursor: "pointer",
                            }}
                          >
                            SELECT IMAGE
                            <Input
                              {...field}
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                if (
                                  e.target.files &&
                                  e.target.files.length > 0
                                ) {
                                  setSelectedProfileImage(e.target.files[0]);
                                  field.onChange(e.target.files[0].name);
                                } else {
                                  setSelectedProfileImage(null);
                                  field.onChange("");
                                }
                              }}
                              style={{
                                display: "none",
                              }}
                              value=""
                            />
                          </label>
                        )}
                      />
                    </Flex>
                  </Flex>
                  {errors.profileImage && (
                    <span>Profile image is required</span>
                  )}
                </Flex>
                {fields.map((field, index) => (
                  <Flex
                    key={field.id}
                    flexDirection="column"
                    w="100%"
                    mt="0.25rem"
                  >
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text
                        fontWeight="600"
                        fontFamily={theme.fonts.body}
                        fontSize="0.75rem"
                        pb="0.25rem"
                      >
                        Additional Message {index + 1}*
                      </Text>
                      <Text
                        fontSize="0.75rem"
                        color={theme.red[700]}
                        fontWeight="600"
                        cursor="pointer"
                        onClick={() => remove(index)}
                      >
                        REMOVE
                      </Text>
                    </Flex>
                    <Controller
                      name={`additionalPersonalityTraits.${index}.type`}
                      control={control}
                      defaultValue={field.type}
                      render={({ field }) => (
                        <Select
                          {...field}
                          w="100%"
                          h="2rem"
                          fontSize="0.75rem"
                          bg={theme.colors.input}
                          borderWidth="2px"
                          borderRadius="1px"
                          borderColor={theme.colors.input}
                          fontWeight="500"
                          letterSpacing="1px"
                          color={theme.colors.primary}
                          focusBorderColor={theme.colors.input}
                          _focus={{ boxShadow: "none" }}
                        >
                          {options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Select>
                      )}
                    />

                    <Controller
                      name={`additionalPersonalityTraits.${index}.message`}
                      control={control}
                      defaultValue={field.message}
                      render={({ field }) => (
                        <Textarea
                          {...field}
                          placeholder="Describe your additional personality trait"
                          w="100%"
                          minH="8rem"
                          fontSize="0.75rem"
                          bg={theme.colors.input}
                          borderWidth="2px"
                          borderRadius="1px"
                          borderColor={theme.colors.input}
                          fontWeight="500"
                          letterSpacing="1px"
                          color={theme.colors.primary}
                          focusBorderColor={theme.colors.input}
                          _placeholder={{ color: theme.colors.primary }}
                          _focus={{ boxShadow: "none" }}
                          resize="vertical"
                        />
                      )}
                    />
                  </Flex>
                ))}

                {fields.length < maxMessages && (
                  <Button
                    onClick={() => append({ type: "", message: "" })}
                    w="100%"
                    mt="0.5rem"
                    fontWeight="600"
                    bg={theme.colors.background}
                    color={theme.colors.primary}
                    borderWidth="2px"
                    borderColor={theme.colors.primary}
                    borderRadius="1px"
                    _hover={{
                      bg: theme.colors.primary,
                      color: theme.colors.background,
                    }}
                    fontSize="0.75rem"
                  >
                    ADD MESSAGE +
                  </Button>
                )}
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
