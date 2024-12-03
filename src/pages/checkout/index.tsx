/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Link from "next/link";
import { NextPage } from "next";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// MARK: Store
import { CheckoutStore } from "@/stores/CheckoutStore";

// MARK: Component
import { CheckoutStrings } from "@/resources/strings/checkout.strings";
import { Logo } from "@/components/Logo";
import { FinalizeOrderForm } from "@/components/CheckoutForm";
import { CryptoPayment } from "@/components/CheckoutForm/CryptoPayment";
import { CreditCard, PartType } from "@/resources/interfaces";
import { useAuth } from "@/resources/auth";
import { UserSchema } from "@/components/CheckoutForm/UserForm";
import { ToastContainer } from "react-toastify";
import { formatters } from "@/resources/formatters";

const Checkout: NextPage = observer(() => {
    const pageString = CheckoutStrings;
    const store = useLocalObservable(() => new CheckoutStore());
    const [creditCard, setCreditCard] = React.useState<CreditCard>();
    const [userForm, setUserForm] = React.useState<UserSchema>();

    const { user } = useAuth();

    const type =
        typeof window !== "undefined" &&
        typeof window.localStorage !== "undefined"
            ? (localStorage.getItem("partType") as string as PartType)
            : "";

    React.useEffect(() => {
        const matchValue = () => {
            switch (type) {
                case "gold":
                    store.totalValue = 800;
                    break;
                case "silver":
                    store.totalValue = 75;
                    break;
                case "bronze":
                    store.totalValue = 25;
                    break;
                default:
                    return 0;
            }
        };
        matchValue();
    }, []);

    return (
        <Flex
            background="url('/checkout/bg-light-blue.svg'), #F9F9F9"
            pb={10}
            bgSize="cover"
        >
            <Flex
                direction="column"
                w={{ base: "100%", lg: "90%", xl: "80%" }}
                mx="auto"
                px={4}
            >
                <Flex
                    justifyContent="space-between"
                    py={5}
                    alignItems="center"
                    borderBottom="1px solid"
                    borderColor="primary.200"
                >
                    <Heading fontFamily="Syncopate" fontSize={43}>
                        {pageString.artist}
                    </Heading>
                    <Box display={{ base: "none", md: "block" }}>
                        <Logo />
                    </Box>
                </Flex>
                <Flex fontSize={14} gap={1} mt={5}>
                    <Link href="/">
                        <Text
                            cursor="pointer"
                            color="primary.500"
                            fontSize={{ base: 14, md: 18 }}
                            fontWeight="400"
                        >
                            {pageString.pathUrl}
                        </Text>
                    </Link>
                    <Text
                        color="primary.400"
                        fontSize={{ base: 14, md: 18 }}
                        fontWeight={600}
                    >
                        {pageString.maskLink}
                    </Text>
                </Flex>
                <Heading
                    my={7}
                    textTransform="none"
                    fontFamily="Albert Sans"
                    fontSize={{ base: 24, md: 32 }}
                >
                    {pageString.title}
                </Heading>
                <Flex flexDirection={{ base: "column", lg: "row" }} gap={10}>
                    <Flex flexDirection="column">
                        <FinalizeOrderForm.UserForm setUserForm={setUserForm} />
                        {store.showCredit === null &&
                            store.showPix === null &&
                            store.showCrypto === null && (
                                <FinalizeOrderForm.PaymentMethod
                                    onClickPix={() => (store.showPix = true)}
                                    onClickCredit={() =>
                                        (store.showCredit = true)
                                    }
                                    onClickCrypto={() =>
                                        (store.showCrypto = true)
                                    }
                                />
                            )}
                        <Box maxW="780px">
                            {store.showPix && (
                                <Carousel
                                    swipeable
                                    emulateTouch
                                    autoPlay={false}
                                    infiniteLoop
                                    showThumbs={false}
                                    showIndicators={false}
                                    showStatus={false}
                                >
                                    <FinalizeOrderForm.AwaitPayment />
                                    <FinalizeOrderForm.LoadingPayment />
                                    <FinalizeOrderForm.ApprovedPayment />
                                </Carousel>
                            )}
                        </Box>
                        {store.showCredit && (
                            <>
                                <FinalizeOrderForm.CreditCard
                                    setCreditCard={setCreditCard}
                                    onClick={() => {
                                        store.showCredit = null;
                                    }}
                                />
                                {/* <FinalizeOrderForm.Discount
                                    setDiscount={(e) => (store.discount = e)}
                                /> */}
                                <FinalizeOrderForm.Address
                                    addressForm={{
                                        field: store.addressForm.field,
                                    }}
                                />
                            </>
                        )}
                        {store.showCrypto && !store.isConnected && (
                            <CryptoPayment.ConnectWallet
                                onClick={() => (store.showCrypto = null)}
                                isConnected={store.isConnected}
                                setIsConnected={(isConnected) =>
                                    (store.isConnected = isConnected)
                                }
                            />
                        )}
                        {store.showCrypto && store.isConnected && (
                            <CryptoPayment.hasConnected
                                setTerms={(terms) =>
                                    (store.acceptTerms = terms)
                                }
                                setHasBallance={(hasBallance) =>
                                    (store.hasBallance = hasBallance)
                                }
                                acceptTerms={store.acceptTerms}
                                totalValue={store.totalValue}
                            />
                        )}
                    </Flex>
                    <FinalizeOrderForm.PurchaseInformation
                        sendOrder={() =>
                            creditCard
                                ? store.createSale(
                                      {
                                          cliente_id: Number(user?.id),
                                          valor: Number(
                                              store.totalValue.toFixed(2)
                                          ),
                                          card_number: creditCard.card_number,
                                          security_code:
                                              creditCard.security_code,
                                          titular_cartao:
                                              creditCard.titular_cartao,
                                          expiration_card: Number(
                                              formatters.onlyNumbers(
                                                  creditCard.expiration_card
                                              )
                                          ),
                                      },
                                      userForm
                                  )
                                : null
                        }
                        isLoading={store.loader}
                        setTotalValue={(total) => (store.totalValue = total)}
                        totalValue={store.totalValue}
                        possibleToFinish={false}
                    />
                </Flex>
            </Flex>
            <ToastContainer />
        </Flex>
    );
});

export default Checkout;
