import React from "react";
import { NextPage } from "next";
import { observer } from "mobx-react-lite";
import {
    Button,
    Flex,
    Heading,
    Input,
    Select,
    Text,
    chakra,
} from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";

const componentPage: NextPage = observer(() => {
    return (
        <Flex
            background="url('/checkout/bg-light-blue.svg'), #F9F9F9"
            p={10}
            bgSize="cover"
            direction="column"
            fontFamily="'Albert Sans', sans-serif"
        >
            <Heading my={5}>Botões</Heading>
            <Text
                fontFamily="'Albert Sans', sans-serif"
                fontWeight={600}
                mb={5}
            >
                Variante: <chakra.span color="red">solidPrimary</chakra.span>
            </Text>
            <Flex gap={10} flexWrap="wrap">
                <Button variant="solidPrimary" bg="secondary.800">
                    Active
                </Button>
                <Button variant="solidPrimary" isDisabled>
                    Blocked
                </Button>
                <Button
                    variant="solidPrimary"
                    isLoading
                    spinner={<BeatLoader size={10} color="white" />}
                >
                    Loading
                </Button>
            </Flex>
            <Text
                fontWeight={600}
                my={5}
                fontFamily="'Albert Sans', sans-serif"
            >
                Variante: <chakra.span color="red">outlinePrimary</chakra.span>
            </Text>
            <Flex gap={10} flexWrap="wrap">
                <Button variant="outlinePrimary">Normal</Button>
                <Button variant="outlinePrimary" bg="rgba(217, 234, 253, 0.4)">
                    Active
                </Button>
                <Button variant="outlinePrimary" isDisabled>
                    Disabled
                </Button>
                <Button
                    variant="outlinePrimary"
                    spinner={
                        <BeatLoader size={10} color="rgba(161, 161, 161, 1)" />
                    }
                    isLoading
                ></Button>
            </Flex>
            <Heading my={5}>Input</Heading>
            <Text
                fontFamily="'Albert Sans', sans-serif"
                fontWeight={600}
                mb={5}
            >
                Variante: <chakra.span color="red">OutLine</chakra.span>
            </Text>
            <Flex gap={10}>
                <Input placeholder="default"></Input>
                <Input variant="solid" placeholder="solid"></Input>
            </Flex>
            <Heading my={5}>Select</Heading>
            <Text
                fontFamily="'Albert Sans', sans-serif"
                fontWeight={600}
                mb={5}
            >
                Variante: <chakra.span color="red">OutLine</chakra.span>
            </Text>
            <Flex gap={10}>
                <Select>
                    <option>BG transparente</option>
                    <option>2</option>
                    <option>3</option>
                </Select>
                <Select>
                    <option>BG transparente</option>
                    <option>2</option>
                    <option>3</option>
                </Select>
            </Flex>
        </Flex>
    );
});

export default componentPage;
