/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Flex, Image, Heading, Text, Box } from "@chakra-ui/react";

const BuyAPart = () => {
    return (
        <>
            <Heading
                mt={10}
                mb={5}
                textAlign="center"
                lineHeight={1}
                fontSize={{ base: 32, md: 48, lg: 64 }}
                fontWeight="bold"
                fontFamily={`'Tusker Grotesk'`}
                color="black"
            >
                ADQUIRA UM PEDAÇO DA MÚSICA
            </Heading>
            <Flex gap={8} flexDirection={{ base: "column", md: "row" }}>
                <Image
                    src="/landing-page/matue.png"
                    alt="matuê"
                    mx={{ base: "auto", md: "unset" }}
                    width={{ base: 178, md: 271 }}
                    height={{ base: 167, md: 271 }}
                />
                <Flex direction="column" justifyContent="space-between" p={4}>
                    <Heading
                        fontSize={{ base: 24, md: 40 }}
                        fontWeight="bold"
                        textAlign={{ base: "center", md: "left" }}
                        fontFamily={`'Tusker Grotesk'`}
                        color="black"
                        mb={3}
                    >
                        "Quer voar"
                    </Heading>
                    <Text
                        lineHeight={1.7}
                        fontSize={{ base: 14, md: 16, lg: 20 }}
                        textAlign={{ base: "center", md: "left" }}
                    >
                        Descubra a poderosa obra de Matuê que celebra a busca
                        pela liberdade e realizações. Batidas cativantes e
                        letras autênticas narram uma jornada de superação e
                        sonhos, pronta para conquistar corações e playlists. As
                        batidas envolventes e a produção impecável fazem dessa
                        música uma verdadeira obra de arte, capaz de prender a
                        atenção de todos os ouvintes desde os primeiros acordes.
                    </Text>
                    <Box
                        w="max-content"
                        p={2}
                        border="1px solid black"
                        rounded="md"
                        mx={{ base: "auto", md: "unset" }}
                        mt={{ base: 8, md: 10, lg: 14 }}
                    >
                        <Text fontWeight="bold" fontSize={{ base: 14, md: 20 }}>
                            Lançamento em 10 de agosto de 2022
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </>
    );
};

export { BuyAPart };
