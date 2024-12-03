import React from "react";
import { Heading, Image, Flex, Text, keyframes } from "@chakra-ui/react";

const Operation = () => {
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
                fontSize={{ base: 32, md: 48, lg: 64 }}
                fontWeight="bold"
                as="h3"
                color="black"
                animation={`${fadeInAnimation} 1s ease-in-out forwards`}
                fontFamily={`'Tusker Grotesk', sans-serif`}
            >
                COMO FUNCIONA
            </Heading>
            <Flex
                gap={5}
                mb={{ base: 5, lg: 20 }}
                direction={{ base: "column", lg: "row" }}
                animation={`${fadeInAnimation} 1s ease-in-out forwards`}
            >
                <Flex
                    gap={5}
                    maxW={{ base: "95%", lg: 631 }}
                    minW={{ base: "95%", md: 500 }}
                >
                    <Image
                        width={{ base: 130, lg: 228 }}
                        src="/landing-page/royalties.svg"
                        alt="royalties"
                        mx={{ base: "auto", md: "unset" }}
                    />
                    <Flex
                        direction="column"
                        gap={4}
                        justifyContent="space-between"
                        py={4}
                    >
                        <Heading
                            lineHeight={1.2}
                            fontSize={{ base: 25, md: 40, lg: 48 }}
                            fontWeight="bold"
                            fontFamily={`'Tusker Grotesk'`}
                            color="black"
                        >
                            ROYALTIES PARA FÃ’S
                        </Heading>
                        <Text fontSize={{ base: 14, md: 16, lg: 20 }}>
                            Disponibilizamos para venda uma parte dos royalties
                            do nosso próximo lançamento. Com isso conseguimos
                            arrecadar fundos e nossos fãs irão ganhar uma parte
                            do que a música render através de reproduções nas
                            plataformas de streaming.
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    gap={5}
                    maxW={{ base: "95%", lg: 631 }}
                    minW={{ base: "95%", md: 500 }}
                >
                    <Image
                        w={{ base: 130, lg: 228 }}
                        src="/landing-page/benefit.svg"
                        alt="benefit"
                        mx={{ base: "auto", md: "unset" }}
                    />
                    <Flex
                        direction="column"
                        gap={4}
                        justifyContent="space-between"
                        py={4}
                    >
                        <Heading
                            lineHeight={1}
                            fontSize={{ base: 25, md: 40, lg: 48 }}
                            fontWeight="bold"
                            fontFamily={`'Tusker Grotesk'`}
                            color="black"
                        >
                            BENEFÍCIOS EXCLUSIVOS
                        </Heading>
                        <Text fontSize={{ base: 14, md: 16, lg: 20 }}>
                            Os fã’s que adquirem um pedaço do nosso próximo
                            lançamento terão acesso a vantagens e benefícios
                            exclusivos. Uma oportunidade única para verdadeiros
                            fãs se aproximarem ainda mais do Matuê.
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export { Operation };
