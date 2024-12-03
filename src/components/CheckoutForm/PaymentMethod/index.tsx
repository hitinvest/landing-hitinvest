import React from "react";
import { Heading, Button, Flex } from "@chakra-ui/react";
import { Card } from "@/components/Card";
import { CheckoutStrings } from "@/resources/strings/checkout.strings";

interface IProps {
    onClickCredit: () => void;
    onClickPix: () => void;
    onClickCrypto: () => void;
}

const PaymentMethod: React.FC<IProps> = ({
    onClickCredit,
    onClickPix,
    onClickCrypto,
}) => {
    const sectionStrings = CheckoutStrings.paymentMethod;
    return (
        <Card mt={10}>
            <Heading
                my={5}
                textTransform="none"
                fontSize={{ base: 20, md: 24 }}
                color="primary.800"
            >
                {sectionStrings.howToPay}
            </Heading>
            <Flex gap={5} flexDirection={{ base: "column", md: "row" }}>
                <Button
                    w="100%"
                    variant="outlinePrimary"
                    onClick={onClickCredit}
                >
                    {sectionStrings.creditCard}
                </Button>
                <Button w="100%" variant="outlinePrimary" onClick={onClickPix}>
                    {sectionStrings.qrcode}
                </Button>
                <Button
                    w="100%"
                    variant="outlinePrimary"
                    onClick={onClickCrypto}
                >
                    {sectionStrings.crypto}
                </Button>
            </Flex>
        </Card>
    );
};

export { PaymentMethod };
