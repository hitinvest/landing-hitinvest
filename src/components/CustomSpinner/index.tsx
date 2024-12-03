import React from "react";
import { Box, Center, keyframes } from "@chakra-ui/react";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const CustomSpinner: React.FC = () => {
    return (
        <Center
            bg="conic-gradient(from 180deg at 50% 50%, rgba(59, 148, 227, 0) 0deg, #676BFF 360deg)"
            w="42px"
            h="42px"
            rounded="full"
            animation={`${rotate} .7s linear infinite`}
        >
            <Box w="34px" h="34px" bg="white" rounded="full" />
        </Center>
    );
};

export { CustomSpinner };
