import React from "react";
import { observer } from "mobx-react-lite";
import {
    Heading,
    Flex,
    Image,
    Text,
    chakra,
    useToast,
    Box,
} from "@chakra-ui/react";
import { Card } from "@/components/Card";
import { CheckoutStrings } from "@/resources/strings/checkout.strings";

const AwaitPayment: React.FC = observer(() => {
    const toast = useToast();
    const sectionStrings = CheckoutStrings.qrCodeForm;

    const [segundosRestantes, setSegundosRestantes] = React.useState(600);

    React.useEffect(() => {
        if (segundosRestantes > 0) {
            const interval = setInterval(() => {
                setSegundosRestantes((segundos) => segundos - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [segundosRestantes]);

    const minutosRestantes = Math.floor(segundosRestantes / 60);
    const segundos = segundosRestantes % 60;

    const clipboard = () => {
        toast({
            title: "Código copiado!",
            status: "success",
            duration: 9000,
            isClosable: true,
        });
        const text = document.getElementById("clipboard")?.innerHTML;
        navigator.clipboard.writeText(text || "");
    };

    return (
        <Card mt={10} h={484}>
            <Flex direction="column">
                <Heading
                    fontFamily="'Albert Sans', sans-serif"
                    textTransform="none"
                    fontSize={24}
                    color="primary.800"
                    textAlign="center"
                >
                    {sectionStrings.title}
                </Heading>
                <Text
                    fontFamily="'Albert Sans', sans-serif"
                    textAlign="center"
                    color="#6D6E74"
                >
                    {sectionStrings.awaitPayment.title}
                </Text>
                <Box w="176px" mx="auto">
                    <Image
                        src="/checkout/qrcode.svg"
                        alt="QRCode"
                        w={176}
                        mx="auto"
                        my={8}
                    />
                </Box>
                <Flex
                    onClick={() => clipboard()}
                    p={3}
                    justifyContent="center"
                    gap={2}
                    mb={5}
                    border="dotted 1px"
                    rounded="md"
                    borderColor="primary.200"
                    cursor="pointer"
                >
                    <Box w="20px">
                        <Image
                            src="/checkout/clip.svg"
                            alt="Clipboard"
                            cursor="pointer"
                        />
                    </Box>
                    <Text cursor="pointer" id="clipboard">
                        {sectionStrings.awaitPayment.pix}
                    </Text>
                </Flex>
                <Text textAlign="center" color="primary.800">
                    {sectionStrings.awaitPayment.warningTime}
                    <chakra.span fontWeight="bold">{` ${minutosRestantes}:${segundos}`}</chakra.span>{" "}
                    minutos
                </Text>
            </Flex>
        </Card>
    );
});

export { AwaitPayment };
