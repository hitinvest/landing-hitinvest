import { Heading, Image, Flex, keyframes } from "@chakra-ui/react";
import React from "react";

const Artist = () => {
    const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
    return (
        <>
            <Heading
                mt={20}
                mb={{ base: 10, md: 20, lg: "unset" }}
                color="black"
                textAlign="center"
                fontSize={{ base: 40, md: 48, lg: 64 }}
                fontFamily="'Syncopate', sans-serif"
            >
                MATUÊ
            </Heading>
            <Flex
                mt={{ base: 5, lg: 28 }}
                w={{ base: "100%", lg: "70%" }}
                gap={5}
                mx="auto"
                alignItems="center"
                justifyContent="center"
                flexDirection={{ base: "column-reverse", lg: "row" }}
            >
                <Heading
                    w={{ base: "90%", lg: "35%" }}
                    color="black"
                    mt={{ base: 4, lg: 0 }}
                    fontSize={{ base: 32, md: 48, lg: 64 }}
                    textAlign={"left"}
                    animation={`${fadeInAnimation} 1s ease-in-out forwards`}
                    fontFamily={`'Tusker Grotesk', sans-serif`}
                >
                    Faça parte da nova era da indústria musical E participe
                    diretamente da minha carreira.
                </Heading>
                <Flex
                    animation={`${fadeInAnimation} 1s ease-in-out forwards`}
                    justifyContent="center"
                    gap={{ base: 2, md: 10 }}
                    w={{ base: "100%", lg: "55%" }}
                >
                    <Image
                        objectFit="cover"
                        src={"/landing-page/matue-1.png"}
                        alt="artista"
                        mt={5}
                        rounded="lg"
                        display={{ base: "none", md: "inline-block" }}
                        h={{ base: 370, lg: 410 }}
                        w={{ base: "20%", lg: "30%" }}
                    />
                    <Image
                        objectFit="cover"
                        display={{ base: "inline-block", md: "none" }}
                        src="/landing-page/matue-1-mobile.png"
                        alt="artista"
                        mb={2}
                        rounded="lg"
                        w="25%"
                    />
                    <Image
                        h={{ base: 370, lg: 410 }}
                        display={{ base: "none", md: "inline-block" }}
                        w={{ base: "20%", lg: "30%" }}
                        rounded="lg"
                        objectFit="cover"
                        src="/landing-page/matue-2.png"
                        alt="artista"
                        mt={10}
                    />
                    <Image
                        objectFit="cover"
                        display={{ base: "inline-block", md: "none" }}
                        src="/landing-page/matue-2-mobile.png"
                        alt="artista"
                        rounded="lg"
                        mt={2}
                        w="25%"
                    />
                    <Image
                        h={{ base: "unset", lg: 410 }}
                        w={{ base: "20%", lg: "30%" }}
                        display={{ base: "none", md: "inline-block" }}
                        rounded="lg"
                        objectFit="cover"
                        src="/landing-page/matue-3.png"
                        alt="artista"
                    />
                    <Image
                        objectFit="cover"
                        display={{ base: "inline-block", md: "none" }}
                        src="/landing-page/matue-3-mobile.png"
                        alt="artista"
                        mb={2}
                        rounded="lg"
                        w="25%"
                    />
                </Flex>
            </Flex>
        </>
    );
};

export { Artist };
