import React from "react";
import { observer } from "mobx-react-lite";
import { Heading, Flex, Image, Text } from "@chakra-ui/react";
import { Card } from "@/components/Card";
import { CheckoutStrings } from "@/resources/strings/checkout.strings";
import { MetaMaskQRCodeModal } from "@/components/MetaMaskPixModal";
import { polygon } from "@/components/ConnectMetamaskButton/networks";
import ConnectMetamaskButton from "@/components/ConnectMetamaskButton";

interface IProps {
    onClick: () => void;
    setIsConnected: (e: boolean) => void;
    isConnected: boolean;
}

const ConnectWallet: React.FC<IProps> = observer(
    ({ onClick, isConnected, setIsConnected }) => {
        const sectionStrings = CheckoutStrings.cryptoPayment;
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
                            {sectionStrings.title}
                        </Heading>
                        <Flex gap={2}>
                            <Text
                                onClick={onClick}
                                fontSize={{ base: 14, md: 16 }}
                                color="secondary.300"
                                fontWeight={500}
                                cursor="pointer"
                                textDecor="underline"
                            >
                                {sectionStrings.changePaymentMethod}
                            </Text>
                            <Image
                                src="/doubleArrow.svg"
                                alt="Trocar"
                                w="18px"
                            />
                        </Flex>
                    </Flex>
                    <Flex gap={2} mb={10}>
                        <Text color="primary.800" fontSize={14}>
                            {sectionStrings.newInCrypto1}
                        </Text>
                        <Text fontSize={14} color="#23489F" cursor="pointer">
                            {sectionStrings.newInCrypto2}
                        </Text>
                    </Flex>
                    <Heading
                        textTransform="none"
                        fontSize={20}
                        color="primary.800"
                        textAlign="center"
                        mb={5}
                    >
                        {sectionStrings.connectWallet}
                    </Heading>
                    <ConnectMetamaskButton
                        networkConfig={polygon}
                        disappear={!isConnected}
                        isConnected={isConnected}
                        setIsConnected={setIsConnected}
                    />
                    <Flex
                        border="1px solid rgba(0,0,0,.1)"
                        p={4}
                        justifyContent="center"
                        rounded="lg"
                        alignItems="center"
                        gap={4}
                        cursor="pointer"
                        _hover={{
                            bg: "rgba(0,0,0,.1)",
                        }}
                    >
                        <MetaMaskQRCodeModal>
                            <Image
                                cursor="pointer"
                                src="/checkout/coinbase.svg"
                                w="32px"
                                alt="Raposa"
                            />
                        </MetaMaskQRCodeModal>
                        <Text
                            cursor="pointer"
                            fontFamily="'Inter', sans-serif"
                            fontWeight={600}
                        >
                            Coinbase Wallet
                        </Text>
                    </Flex>
                    <Text
                        mt={5}
                        px={4}
                        textAlign="center"
                        color="primary.800"
                        fontSize={14}
                        fontFamily="'Inter', sans-serif"
                        fontWeight={400}
                        dangerouslySetInnerHTML={{
                            __html: sectionStrings.terms,
                        }}
                    />
                </Flex>
            </Card>
        );
    }
);

export { ConnectWallet };
