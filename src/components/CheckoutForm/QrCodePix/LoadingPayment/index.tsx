import React from "react";
import { observer } from "mobx-react-lite";
import { Heading, Flex, Text, Center, Spinner } from "@chakra-ui/react";
import { Card } from "@/components/Card";
import { CheckoutStrings } from "@/resources/strings/checkout.strings";

const LoadingPayment: React.FC = observer(() => {
    const sectionStrings = CheckoutStrings.qrCodeForm;
    return (
        <Card mt={10} h={484}>
            <Flex direction="column">
                <Heading
                    fontFamily="'Albert Sans', sans-serif"
                    textTransform="none"
                    fontSize={24}
                    color="primary.800"
                    textAlign="center"
                    mb={7}
                >
                    {sectionStrings.title}
                </Heading>
                <Text
                    fontFamily="'Albert Sans', sans-serif"
                    textAlign="center"
                    color="#6D6E74"
                    mb={5}
                >
                    {sectionStrings.loadingProcess.title}
                </Text>
                <Center h={310}>
                    <Spinner size="lg" color="#676BFF" />
                </Center>
            </Flex>
        </Card>
    );
});

export { LoadingPayment };
