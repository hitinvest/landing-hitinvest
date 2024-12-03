import React from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalBody,
    ModalContent,
    useDisclosure,
    chakra,
    Flex,
    Box,
    Text,
    ModalCloseButton,
    FormControl,
    FormErrorMessage,
} from "@chakra-ui/react";
import { TextInput } from "../TextInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "@/resources/auth";
import { errorStrings } from "@/resources/strings/errors.strings";

interface IProps {
    children: React.ReactNode;
}

const loginSchema = z.object({
    email: z.string().email({ message: errorStrings.invalidEmail }),
    password: z.string().min(4, { message: errorStrings.minPassword }),
});

export type LoginSchema = z.infer<typeof loginSchema>;

const LoginFormModal: React.FC<IProps> = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { login, isLoading } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginSchema) => {
        login(data, () => onClose());
    };

    return (
        <>
            <Box display="inline" onClick={onOpen}>
                {children}
            </Box>
            <Modal isOpen={isOpen} onClose={onClose} size="lg">
                <ModalOverlay />
                <ModalContent mx={6}>
                    <ModalCloseButton
                        color="secondary.400"
                        fontSize={16}
                        fontWeight="300"
                    />
                    <Flex
                        w="375px"
                        mx="auto"
                        flexDirection="column"
                        gap={3}
                        color="primary.800"
                    >
                        <ModalHeader
                            textAlign="center"
                            fontFamily="'Albert Sans', sans-serif"
                            fontSize={34}
                            mt={10}
                        >
                            Faça login
                            <chakra.span
                                fontWeight="bold"
                                color="secondary.300"
                            >
                                _
                            </chakra.span>
                        </ModalHeader>
                        <ModalBody pb={6}>
                            <Flex flexDirection="column">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <FormControl
                                        isInvalid={!!errors.password}
                                        mb={5}
                                    >
                                        <TextInput
                                            inputProps={{
                                                ...register("email"),
                                            }}
                                            label="Email"
                                            placeholder="Insira seu email"
                                            type="Email"
                                        />
                                        <FormErrorMessage>
                                            {errors.email?.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                    <FormControl isInvalid={!!errors.password}>
                                        <TextInput
                                            inputProps={{
                                                ...register("password"),
                                            }}
                                            label="Senha"
                                            placeholder="Insira sua senha"
                                            type="password"
                                        />
                                        <FormErrorMessage>
                                            {errors.password?.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                    <Text
                                        fontSize={14}
                                        mt={5}
                                        cursor="pointer"
                                        color="tertiary.400"
                                        textDecor="underline"
                                        textAlign="right"
                                    >
                                        Esqueceu sua senha?
                                    </Text>
                                    <Button
                                        bg="secondary.300"
                                        _hover={{
                                            bg: "secondary.800",
                                        }}
                                        variant="solid"
                                        color="white"
                                        w="330px"
                                        mx="auto"
                                        mt="5"
                                        type="submit"
                                        isLoading={isLoading}
                                    >
                                        Entrar na minha conta
                                    </Button>
                                </form>
                            </Flex>
                        </ModalBody>
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    );
};

export { LoginFormModal };
