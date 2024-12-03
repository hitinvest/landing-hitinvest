/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
    Heading,
    Flex,
    Text,
    chakra,
    Grid,
    FormControl,
    FormErrorMessage,
    Input,
    FormLabel,
    Button,
} from "@chakra-ui/react";
import { Card } from "@/components/Card";
import { TextInput } from "@/components/TextInput";
import { LoginFormModal } from "@/components/LoginFormModal";
import { observer } from "mobx-react-lite";
import { CheckoutStrings } from "@/resources/strings/checkout.strings";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "@/resources/auth";
import { formatters } from "@/resources/formatters";

const userSchema = z
    .object({
        nome: z
            .string({ required_error: "É necessário preencher este campo." })
            .min(1, { message: "Nome inválido." }),
        phone: z
            .string({ required_error: "É necessário preencher este campo." })
            .min(8, { message: "Telefone Inválido" }),
        email: z
            .string({ required_error: "É necessário preencher este campo." })
            .email({ message: "O email não é válido." }),
        nascimento: z
            .string({ required_error: "É necessário preencher este campo." })
            .min(10, { message: "Data Inválida" }),
        cpf_cnpj: z
            .string({ required_error: "Campo obrigatório" })
            .min(14, { message: "CPF Inválido" }),
        confirmEmail: z
            .string({ required_error: "É necessário preencher este campo." })
            .email({ message: "O email não é válido." }),
    })
    .refine((data) => data.email === data.confirmEmail, {
        path: ["confirmEmail"],
        message: "Os e-mails precisam ser iguais.",
    });

export type UserSchema = z.infer<typeof userSchema>;

interface IProps {
    setUserForm: (e: UserSchema) => void;
}

export const UserForm: React.FC<IProps> = observer(({ setUserForm }) => {
    const [blockInputs, setBlockInputs] = React.useState(false);
    const sectionString = CheckoutStrings.userForm;
    const { user } = useAuth();
    const {
        register,
        control,
        setValue,
        trigger,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<UserSchema>({
        resolver: zodResolver(userSchema),
        mode: "onBlur",
    });

    React.useEffect(() => {
        if (user && user?.cliente) {
            setValue("nome", user?.name);
            setValue("phone", user?.cliente?.telefone);
            setValue("email", user?.email);
            setValue("confirmEmail", user?.email);
            setValue("cpf_cnpj", user?.cliente.cpf_cnpj);
            setValue(
                "nascimento",
                formatters.dateString(user?.cliente.nascimento.toString())
            );
            setUserForm({
                confirmEmail: user.email,
                email: user.email,
                nome: user.name,
                phone: user.cliente.telefone,
                nascimento: formatters.dateString(
                    user.cliente.nascimento.toString()
                ),
                cpf_cnpj: user.cliente.cpf_cnpj,
            });
            setBlockInputs(true);
        }

        const inputs = document.querySelectorAll("input");

        const handleBlur = async () => {
            const values = getValues();
            const allFieldsFilled = Object.values(values).every(
                (value) => value !== undefined && value !== ""
            );
            if (allFieldsFilled) {
                const isValid = await trigger();
                if (isValid) {
                    handleSubmit(onSubmit)();
                }
            }
        };

        inputs.forEach((input) => {
            input.addEventListener("blur", handleBlur);
        });

        return () => {
            inputs.forEach((input) => {
                input.removeEventListener("blur", handleBlur);
            });
        };
    }, [user, setValue, trigger, handleSubmit, getValues]);

    const onSubmit = (data: UserSchema) => {
        setUserForm(data);
    };
    return (
        <Card>
            <Flex>
                <Flex
                    alignItems={{ base: "unset", md: "center" }}
                    justifyContent="space-between"
                    w="100%"
                    direction={{ base: "column", md: "row" }}
                >
                    <Heading
                        textTransform="none"
                        fontSize={{ base: 20, md: 24 }}
                        color="primary.800"
                    >
                        {sectionString.basicInfo}
                    </Heading>

                    <Flex alignItems="center">
                        <Text
                            color="primary.700"
                            fontSize={{ base: 14, md: 18 }}
                        >
                            {sectionString.hasAccount}
                        </Text>
                        <LoginFormModal>
                            <chakra.span
                                ml={2}
                                fontSize={{ base: 14, md: 18 }}
                                cursor="pointer"
                                fontWeight={600}
                                color="secondary.300"
                                _hover={{
                                    textDecor: "underline",
                                }}
                            >
                                {sectionString.logIn}
                            </chakra.span>
                        </LoginFormModal>
                    </Flex>
                </Flex>
            </Flex>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid
                    mt={5}
                    gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    gap={4}
                >
                    <FormControl isInvalid={!!errors.nome}>
                        <TextInput
                            inputProps={{
                                ...register("nome"),
                            }}
                            isDisabled={blockInputs}
                            placeholder="Insira seu nome completo"
                            label={CheckoutStrings.userForm.fields.name}
                        />
                        <FormErrorMessage>
                            {errors.nome?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.phone}>
                        <Controller
                            control={control}
                            name="phone"
                            render={({ field }) => (
                                <TextInput
                                    label={
                                        CheckoutStrings.userForm.fields
                                            .cellPhone
                                    }
                                    isDisabled={blockInputs}
                                    placeholder="75 99999-9999"
                                    maxLength={15}
                                    onChange={(e) => {
                                        const formatted =
                                            formatters.formatPhoneNumber(
                                                e.target.value
                                            );
                                        field.onChange(formatted);
                                    }}
                                    value={field.value}
                                />
                            )}
                        />
                        <FormErrorMessage>
                            {errors.phone?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.cpf_cnpj}>
                        <FormLabel>
                            {CheckoutStrings.creditCardForm.fields.cpf}
                        </FormLabel>
                        <Controller
                            control={control}
                            name="cpf_cnpj"
                            render={({ field }) => (
                                <Input
                                    placeholder="Insira a validade"
                                    maxLength={14}
                                    isDisabled={blockInputs}
                                    onChange={(e) => {
                                        const formatted = formatters.cpf(
                                            e.target.value
                                        );
                                        field.onChange(formatted);
                                    }}
                                    value={field.value}
                                />
                            )}
                        />
                        <FormErrorMessage margin={0}>
                            {errors.cpf_cnpj?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.nascimento}>
                        <FormLabel>
                            {CheckoutStrings.creditCardForm.fields.birthday}
                        </FormLabel>
                        <Controller
                            control={control}
                            name="nascimento"
                            render={({ field }) => (
                                <Input
                                    placeholder="Insira a validade"
                                    maxLength={10}
                                    isDisabled={blockInputs}
                                    onChange={(e) => {
                                        const formatted = formatters.dateString(
                                            e.target.value
                                        );
                                        field.onChange(formatted);
                                    }}
                                    value={field.value}
                                />
                            )}
                        />
                        <FormErrorMessage margin={0}>
                            {errors.nascimento?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.email}>
                        <TextInput
                            isDisabled={blockInputs}
                            inputProps={{
                                ...register("email"),
                            }}
                            label={CheckoutStrings.userForm.fields.email}
                            placeholder="Insira seu email"
                            type="Email"
                        />
                        <FormErrorMessage>
                            {errors.email?.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.confirmEmail}>
                        <TextInput
                            isDisabled={blockInputs}
                            inputProps={{
                                ...register("confirmEmail"),
                            }}
                            placeholder="Insira seu email"
                            label={CheckoutStrings.userForm.fields.confirmEmail}
                        />
                        <FormErrorMessage>
                            {errors.confirmEmail?.message}
                        </FormErrorMessage>
                    </FormControl>
                </Grid>
            </form>
        </Card>
    );
});
