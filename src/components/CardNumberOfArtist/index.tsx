import React from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";

interface IProps {
    number: string;
    type: string;
    socialMedia: string[];
}

const CardNumberOfArtist: React.FC<IProps> = ({
    number,
    type,
    socialMedia,
}) => {
    return (
        <Flex w="100%">
            <Flex
                p={5}
                minH={330}
                w={{ base: 271, md: 330 }}
                mx="auto"
                direction="column"
                justifyContent="space-between"
                rounded="sm"
                border="1px solid"
                borderColor="primary.200"
            >
                <Flex gap={2} alignItems="center">
                    {socialMedia.map((social: string, index: number) => (
                        <Box w="28px" key={index + "B"}>
                            <Image cursor="pointer" src={social} alt={social} />
                        </Box>
                    ))}
                </Flex>
                <Flex direction="column">
                    <Text fontSize={{ base: 64, md: 80 }} fontWeight="bold">
                        {number}
                    </Text>
                    <Text fontSize={{ base: 25, md: 32 }} fontWeight="bold">
                        {type}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export { CardNumberOfArtist };
