import React from 'react';
import QRCode from 'qrcode.react';
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react';
import { useRouter } from "next/router";

function VerifierEventPage() {
    const storedUserLogIn = localStorage.getItem('loggedIn')
    const loggedIn = storedUserLogIn ? true : false
    const router = useRouter();

        return (
            <Flex
                direction="column"
                alignItems="center"
                backgroundColor="#040a31"
                color="white"
                padding="1em"
                marginTop="2em"
            >
                <Heading textAlign="center" fontWeight="bold">
                    D&D Night Hosted by imnotArt
                </Heading>
                <Flex
                    justifyContent="space-around"
                    alignItems="center"
                    height="5em"
                    backgroundColor="#233eff"
                    color="white"
                    marginTop="2em"
                >
                    <Button
                        cursor="pointer"
                        fontWeight="bold"
                        // onClick={() => this.handleNavOptionClick('Option 1')}
                    >
                        Register
                    </Button>
                    <Button
                        cursor="pointer"
                        fontWeight="bold"
                        // onClick={() => this.handleNavOptionClick('Option 2')}
                    >
                        Ceptor Club
                    </Button>
                    <Button
                        cursor="pointer"
                        fontWeight="bold"
                        // onClick={() => this.handleNavOptionClick('Option 3')}
                    >
                        Humancore
                    </Button>
                    <Button
                        cursor="pointer"
                        fontWeight="bold"
                        // onClick={() => this.handleNavOptionClick('Option 4')}
                    >
                        PolygonID
                    </Button>
                    <Button
                        cursor="pointer"
                        fontWeight="bold"
                        // onClick={() => this.handleNavOptionClick('Option 5')}
                    >
                        About
                    </Button>
                </Flex>
                <Flex justifyContent="space-between" marginTop="2em" padding="0 1em">
                    <Box textAlign="left">
                        <Text>
                            Date: February 29, 2024
                            <br />
                            Time: 6:00 PM
                        </Text>
                    </Box>
                    <Box textAlign="right">
                        <Text>
                            Location: To Be Revealed
                        </Text>
                    </Box>
                </Flex>
                <Box textAlign="center" marginTop="1em">
                    <QRCode
                        level="Q"
                        style={{ width: 256 }}
                        value={JSON.stringify({
                            id: 928328,
                            name: 'Jane Doe',
                            insider: true,
                        })}
                    />
                </Box>
            </Flex>
        );
    }

export default VerifierEventPage;
