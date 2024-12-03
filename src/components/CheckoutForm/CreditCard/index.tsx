/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { observer } from "mobx-react-lite";
import {
    Heading,
    Flex,
    Image,
    Grid,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
} from "@chakra-ui/react";
import { Card } from "@/components/Card";
import { formatters } from "@/resources/formatters";
import { CheckoutStrings } from "@/resources/strings/checkout.strings";
import { Controller, useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCard as CreditCardType } from "@/resources/interfaces";

interface IProps {
    onClick: () => void;
    setCreditCard: (creditCard: CreditCardType) => void;
}

const creditCardSchema = z.object({
    card_number: z.string({
        required_error: "O número do cartão é obrigatório.",
    }),
    expiration_card: z.string({
        required_error: "A validadade do cartão é um campo obrigatório.",
    }),
    security_code: z.string({
        required_error: "O código de segurança é obrigatório.",
    }),
    titular_cartao: z.string({
        required_error: "Necessário informar o Titular.",
    }),
});

export type CreditCardSchema = z.infer<typeof creditCardSchema>;

export const CreditCard: React.FC<IProps> = observer(
    ({ onClick, setCreditCard }) => {
        const sectionStrings = CheckoutStrings.creditCardForm;
        const {
            register,
            handleSubmit,
            control,
            formState: { errors },
            trigger,
        } = useForm<CreditCardSchema>({
            resolver: zodResolver(creditCardSchema),
            mode: "onTouched",
        });

        const onSubmit = (data: CreditCardSchema) => {
            console.log("submit feito:", data);
            setCreditCard(data as CreditCardType);
        };

        const formValues = useWatch({
            control,
            name: ["card_number", "expiration_card", "security_code"],
        });
        const hasValues = formValues.some((item) => item === undefined);
        React.useEffect(() => {
            if (!hasValues) {
                const checkValidation = async () => {
                    const isValid = await trigger();
                    if (isValid && formValues[2].length === 3) {
                        handleSubmit(onSubmit)();
                    }
                };
                checkValidation();
            }
        }, [formValues, trigger, handleSubmit]);

        return (
            <Card mt={10}>
                <Flex>
                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        w="100%"
                    >
                        <Heading
                            textTransform="none"
                            fontSize={{ base: 20, md: 24 }}
                            color="primary.800"
                        >
                            {sectionStrings.title}
                        </Heading>
                        <Flex gap={3}>
                            <Image src="/visa.svg" w="32px" alt="Visa" />
                            <Image src="/mastercard.svg" w="32px" alt="Visa" />
                            <Image
                                src="/americanexpress.svg"
                                w="32px"
                                alt="Visa"
                            />
                            <Image src="/elo.svg" w="32px" alt="Visa" />
                        </Flex>
                    </Flex>
                </Flex>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid
                        gridTemplateColumns={{ md: "1fr 1fr" }}
                        gap={4}
                        mt={5}
                    >
                        <FormControl isInvalid={!!errors.titular_cartao}>
                            <FormLabel>
                                {CheckoutStrings.creditCardForm.fields.cardName}
                            </FormLabel>
                            <Input
                                placeholder="Insira o nome do titular"
                                {...register("titular_cartao")}
                            />
                            <FormErrorMessage margin={0}>
                                {errors.titular_cartao?.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.card_number}>
                            <FormLabel>
                                {
                                    CheckoutStrings.creditCardForm.fields
                                        .cardNumber
                                }
                            </FormLabel>
                            <Controller
                                control={control}
                                name="card_number"
                                render={({ field }) => (
                                    <Input
                                        placeholder="Insira o número do cartão"
                                        maxLength={19}
                                        onChange={(e) => {
                                            const formatted =
                                                formatters.creditCard(
                                                    e.target.value
                                                );
                                            field.onChange(formatted);
                                        }}
                                        value={field.value}
                                    />
                                )}
                            />
                            <FormErrorMessage margin={0}>
                                {errors.card_number?.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.expiration_card}>
                            <FormLabel>
                                {CheckoutStrings.creditCardForm.fields.validity}
                            </FormLabel>
                            <Controller
                                control={control}
                                name="expiration_card"
                                render={({ field }) => (
                                    <Input
                                        placeholder="Insira a validade"
                                        maxLength={7}
                                        onChange={(e) => {
                                            const formatted =
                                                formatters.dateValidity(
                                                    e.target.value
                                                );
                                            field.onChange(formatted);
                                        }}
                                        value={field.value}
                                    />
                                )}
                            />
                            <FormErrorMessage margin={0}>
                                {errors.expiration_card?.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.expiration_card}>
                            <FormLabel>
                                {CheckoutStrings.creditCardForm.fields.cvv}
                            </FormLabel>
                            <Input
                                maxLength={3}
                                placeholder="Insira o código CVV"
                                {...register("security_code")}
                            />
                            <FormErrorMessage margin={0}>
                                {errors.security_code?.message}
                            </FormErrorMessage>
                        </FormControl>
                    </Grid>
                </form>
                <Flex mt={5} gap={2} justifyContent="right">
                    <Text
                        onClick={onClick}
                        textAlign="right"
                        fontSize={{ base: 14, md: 16 }}
                        color="secondary.300"
                        fontWeight={600}
                        cursor="pointer"
                        _hover={{
                            textDecor: "underline",
                        }}
                    >
                        {sectionStrings.changePaymentMethod}
                    </Text>
                    <Image src="/doubleArrow.svg" alt="Trocar" />
                </Flex>
            </Card>
        );
    }
);
