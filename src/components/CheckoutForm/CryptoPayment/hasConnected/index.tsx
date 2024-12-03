import React from "react";
import { observer } from "mobx-react-lite";
import { Heading, Flex, Image, Text, Checkbox } from "@chakra-ui/react";
import { Card } from "@/components/Card";
import { CheckoutStrings } from "@/resources/strings/checkout.strings";

interface IProps {
    setTerms: (e: boolean) => void;
    acceptTerms: boolean;
    setHasBallance: (e: boolean) => void;
    totalValue: number;
}

const hasConnected: React.FC<IProps> = observer(
    ({ setTerms, acceptTerms, setHasBallance, totalValue }) => {
        const sectionStrings = CheckoutStrings.cryptoPayment;
        const [wallet, setWallet] = React.useState<string>("");
        const getWallet = localStorage.getItem("wallet") as string;
        const getBallance = localStorage.getItem("ballence") as string;
        React.useEffect(() => {
            setTimeout(() => setWallet(getWallet), 1000);
            setTimeout(
                () => setHasBallance(Number(getBallance) > totalValue),
                500
            );
            console.log(getBallance, totalValue);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [wallet]);

        return (
            <Card mt={10} h="max-content" py={10}>
                <Flex direction="column" fontFamily="'Inter', sans-serif">
                    <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        mb={3}
                    >
                        <Heading
                            fontFamily="'Albert Sans', sans-serif"
                            textTransform="none"
                            fontSize={24}
                            color="primary.800"
                        >
                            {sectionStrings.metaMaskTitle}
                        </Heading>
                        <Flex gap={2} bg="#D8FFE3" rounded="16px" p={2}>
                            <Image
                                src="/checkout/walletConected.svg"
                                alt="Trocar"
                                w="12px"
                            />
                            <Text
                                fontSize={16}
                                color="#0B6625"
                                fontFamily="'Inter', sans-serif"
                                fontWeight={400}
                            >
                                {sectionStrings.walletConnected}
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        border="1px solid rgba(0,0,0,.1)"
                        p={3}
                        rounded="lg"
                        alignItems="center"
                        bg="#FAFAFA"
                        gap={4}
                    >
                        <Image
                            src="/checkout/iconWalletConnected.svg"
                            alt="Trocar"
                            w="48px"
                        />
                        <Flex direction="column" gap={2}>
                            <Text
                                fontWeight={600}
                                fontSize={14}
                                fontFamily="'Inter', sans-serif"
                            >
                                {sectionStrings.youWallet}
                            </Text>
                            <Text
                                fontWeight={600}
                                fontSize={14}
                                color="primary.700"
                                fontFamily="'Inter', sans-serif"
                            >
                                {wallet}
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex alignItems="center" gap={3} mt={5}>
                        <Checkbox onChange={() => setTerms(!acceptTerms)} />
                        <Text
                            fontSize={14}
                            lineHeight={1.8}
                            dangerouslySetInnerHTML={{
                                __html: sectionStrings.agreement,
                            }}
                        />
                    </Flex>
                </Flex>
            </Card>
        );
    }
);

export { hasConnected };
