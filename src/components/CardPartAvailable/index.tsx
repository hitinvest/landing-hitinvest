import React from "react";
import { Flex, Heading, Image, Text, Box, Button } from "@chakra-ui/react";

interface IBenefit {
    icon: string;
    description: string;
}

interface IProps {
    type: string;
    typeImg: string;
    price: string;
    benefits: IBenefit[];
    onClickBuy: () => void;
}

const CardPartAvailable: React.FC<IProps> = ({
    type,
    price,
    benefits,
    typeImg,
    onClickBuy,
}) => {
    return (
        <Flex
            h={{ base: 475, md: 600 }}
            w={{ base: 277, md: 401 }}
            direction="column"
            p={5}
            mb={10}
            mx={{ base: "auto", lg: 5 }}
            gap={2}
            border="1px solid"
            borderColor="primary.200"
            rounded="md"
            justifyContent="space-between"
        >
            <Flex direction="column" gap={2}>
                <Box w={{ base: "35px", md: "52px", lg: "55px" }}>
                    <Image
                        src={typeImg}
                        w={55}
                        alt="Círculo"
                        className="image-carousel"
                    />
                </Box>
                <Heading
                    fontFamily={`'Tusker Grotesk'`}
                    color="black"
                    textAlign="left"
                    fontSize={{ base: 27, md: 37, lg: 40 }}
                >
                    {type}
                </Heading>
                <Text
                    color="#3E3C56"
                    fontWeight="bold"
                    textAlign="left"
                    fontSize={{ base: 14, md: 22 }}
                >
                    {price}
                </Text>
                <Box
                    pb={3}
                    mb={3}
                    borderBottom="2px solid"
                    borderBottomColor="primary.500"
                    fontWeight="bold"
                >
                    <Text
                        textAlign="left"
                        color="primary.500"
                        fontSize={{ base: 14, md: 20 }}
                    >
                        O QUE VOCÊ GANHA AO COMPRAR
                    </Text>
                </Box>
                <Flex direction="column" gap={2}>
                    {benefits.map((benefit, index) => (
                        <Flex
                            key={`${index} key-part`}
                            gap={2}
                            h={{ base: 27, md: "unset" }}
                            bg="secondary.50"
                            p={2}
                            alignItems="center"
                        >
                            <Box
                                display="inline"
                                w={{ base: "18px", md: "20px" }}
                            >
                                <Image
                                    src={benefit.icon}
                                    alt="Círculo Bronze"
                                />
                            </Box>
                            <Text fontSize={{ base: 11, md: 16 }}>
                                {benefit.description}
                            </Text>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
            <Button w="100%" variant="solidPrimary" onClick={onClickBuy}>
                COMPRAR AGORA
            </Button>
        </Flex>
    );
};

export { CardPartAvailable };
