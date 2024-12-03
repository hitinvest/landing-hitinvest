import React from "react";
import { observer } from "mobx-react-lite";
import { Heading, Flex, Text, Image, chakra, Box } from "@chakra-ui/react";
import { Card } from "@/components/Card";
import { CheckoutStrings } from "@/resources/strings/checkout.strings";

const ApprovedPayment: React.FC = observer(() => {
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
                    mb={16}
                >
                    {sectionStrings.title}
                </Heading>
                <Flex direction="column" gap={4}>
                    <Box w="86px" mx="auto">
                        <Image
                            src="/checkout/approved.svg"
                            alt="Aprovado"
                            w={86}
                            mx="auto"
                        />
                    </Box>
                    <Heading
                        fontFamily="'Albert Sans', sans-serif"
                        textTransform="none"
                        fontSize={24}
                        color="#107048"
                        textAlign="center"
                        mb={7}
                    >
                        {sectionStrings.approved}
                    </Heading>
                    <Text
                        textAlign="center"
                        lineHeight={1.8}
                        color="primary.800"
                        fontSize={16}
                    >
                        Opa! O seu pagamento foi confirmado e aprovado.
                        <br /> Agora, clique no botão “
                        <chakra.span color="black">
                            Finalizar Compra
                        </chakra.span>
                        ” para continuar.
                    </Text>
                </Flex>
            </Flex>
        </Card>
    );
});

export { ApprovedPayment };
