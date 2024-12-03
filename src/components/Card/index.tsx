import { BoxProps, Flex } from "@chakra-ui/react";
import React from "react";

interface IProps extends BoxProps {
    children: React.ReactNode;
}

const Card: React.FC<IProps> = ({ children, ...rest }) => {
    return (
        <Flex
            background="white"
            p={{ base: 4, md: 10 }}
            direction="column"
            fontFamily="'Albert Sans', sans-serif"
            rounded="md"
            {...rest}
        >
            {children}
        </Flex>
    );
};

export { Card };
