import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

const Logo = () => {
    return (
        <Flex alignItems="center" gap={2} my={10}>
            <Text fontSize={{ base: 14, sm: 20 }} color="#7C7C7C">
                Em parceria com
            </Text>
            <Image src="/logoFooter.svg" alt="Logo" h={{ base: 5, sm: 30 }} />
        </Flex>
    );
};

export { Logo };
