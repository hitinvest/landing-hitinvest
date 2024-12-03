import React from "react";
import { Flex, Button } from "@chakra-ui/react";

interface IProps {
    count: number;
    setCount: (int: number) => void;
    setTotalValue: () => void;
}

const Counter: React.FC<IProps> = ({ count, setCount, setTotalValue }) => {
    return (
        <Flex mt={2} border="1px solid #FAFAFA" w="max-content">
            <Button
                isDisabled
                bg="#FAFAFA"
                _disabled={{
                    bg: "#FAFAFA",
                    cursor: "not-allowed",
                    opacity: 0.3,
                }}
                onClick={() => {
                    setCount(count === 1 ? 1 : count - 1);
                    setTotalValue();
                }}
            >
                -
            </Button>
            <Button bg="white" _hover={{ bg: "white" }} cursor="default">
                {count}
            </Button>
            <Button
                bg="#FAFAFA"
                _disabled={{
                    bg: "#FAFAFA",
                    cursor: "not-allowed",
                    opacity: 0.3,
                }}
                isDisabled
                onClick={() => {
                    setCount(count + 1);
                    setTotalValue();
                }}
            >
                +
            </Button>
        </Flex>
    );
};

export { Counter };
