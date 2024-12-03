import React from "react";
import {
    Button,
    Flex,
    Heading,
    Image,
    ListItem,
    Text,
    UnorderedList,
    chakra,
} from "@chakra-ui/react";
import { Card } from "@/components/Card";
import { Counter } from "@/components/Counter";
import { CheckoutStrings } from "@/resources/strings/checkout.strings";
import { efiPayService } from "@/services/efi-pay.service";

interface IProps {
    possibleToFinish: boolean;
    isLoading: boolean;
    setTotalValue: (e: number) => void;
    totalValue: number;
    sendOrder: () => void;
}

const PurchaseInformation: React.FC<IProps> = ({
    possibleToFinish,
    setTotalValue,
    totalValue,
    isLoading,
    sendOrder,
}) => {
    const sectionString = CheckoutStrings.purchaseInformation;
    const [count, setCount] = React.useState(1);
    const [type, setType] = React.useState("");

    let multiplyValue = 1;
    const card = {
        brand: "visa",
        number: "4485785674290087",
        cvv: "123",
        expirationMonth: "05",
        expirationYear: "2029",
    };
    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const partType = localStorage.getItem("partType");
            setType(partType as string);
        }
    }, [totalValue]);

    const whatAPartType = (): string => {
        switch (type) {
            case "bronze":
                multiplyValue = 25;
                return sectionString.bronzePart;
            case "silver":
                multiplyValue = 75;
                return sectionString.silverPart;
            case "gold":
                multiplyValue = 800;
                return sectionString.goldenPart;
            default:
                multiplyValue = 1;
                return "Parte não selecionada";
        }
    };

    return (
        <Card color="primary.800" height="max-content" minW={350}>
            <Heading
                mb={5}
                fontSize={{ base: 20, md: 24 }}
                textTransform="none"
            >
                {sectionString.title}
            </Heading>
            <Flex
                gap={3}
                flexDirection="column"
                borderBottom="1px solid"
                borderColor="primary.400"
                pb={5}
                mb={5}
            >
                <Flex gap={3}>
                    <Image src="/goldenSquare.svg" alt="Quadrado" />
                    <Flex flexDirection="column">
                        <Text
                            fontFamily="'Albert Sans', sans-serif"
                            fontSize={{ base: 16, md: 20 }}
                        >
                            {whatAPartType()}
                        </Text>
                        <Counter
                            count={count}
                            setCount={setCount}
                            setTotalValue={() =>
                                setTotalValue(multiplyValue * count)
                            }
                        />
                    </Flex>
                </Flex>
                <Text
                    fontWeight="bold"
                    fontFamily="'Albert Sans', sans-serif"
                    color="primary.600"
                >
                    {sectionString.artist}{" "}
                    <chakra.span fontWeight="normal">Matuê</chakra.span>
                </Text>
                <Text
                    color="primary.600"
                    fontWeight="bold"
                    fontFamily="'Albert Sans', sans-serif"
                >
                    {sectionString.music}{" "}
                    <chakra.span fontWeight="normal">Quer Voar</chakra.span>
                </Text>
            </Flex>
            <Flex
                gap={3}
                flexDirection="column"
                borderBottom="1px solid"
                borderColor="primary.400"
                pb={5}
                mb={5}
            >
                <Heading
                    mb={5}
                    fontSize={{ base: 20, md: 24 }}
                    textTransform="none"
                >
                    {sectionString.yourRights}
                </Heading>
                <UnorderedList
                    display="flex"
                    flexDirection="column"
                    color="primary.800"
                    gap={{ base: 2, md: 4 }}
                    fontSize={{ base: 16, md: 20 }}
                >
                    <ListItem>{sectionString.benefits.first}</ListItem>
                    <ListItem>{sectionString.benefits.second}</ListItem>
                    <ListItem>{sectionString.benefits.tertiary}</ListItem>
                    <ListItem>{sectionString.benefits.fourth}</ListItem>
                    <ListItem>{sectionString.benefits.fifth}</ListItem>
                </UnorderedList>
            </Flex>
            <Flex
                gap={3}
                flexDirection="column"
                borderBottom="1px solid"
                borderColor="primary.400"
                pb={5}
                mb={5}
            >
                <Text
                    fontWeight="bold"
                    fontSize={16}
                    fontFamily="'Albert Sans', sans-serif"
                    color="primary.600"
                >
                    {sectionString.serviceTax}{" "}
                    <chakra.span fontWeight="normal">[R$0,00]</chakra.span>
                </Text>
                <Text
                    fontWeight="bold"
                    fontSize={16}
                    color="primary.600"
                    fontFamily="'Albert Sans', sans-serif"
                >
                    {sectionString.discount}{" "}
                    <chakra.span fontWeight="normal">[R$0,00]</chakra.span>
                </Text>
            </Flex>
            <Heading
                mb={5}
                fontSize={{ base: 20, md: 24 }}
                textTransform="none"
                color="primary.800"
            >
                {sectionString.total}{" "}
                <chakra.span fontWeight="normal">{`[R$${totalValue}]`}</chakra.span>
            </Heading>
            <Button
                onClick={() => efiPayService.generatePaymentToken(card)}
                w="100%"
                h="48px"
                fontFamily="'Albert Sans', sans-serif"
                variant="solidPrimary"
            >
                {sectionString.finalize}
            </Button>
        </Card>
    );
};

export { PurchaseInformation };
