import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalBody,
    ModalContent,
    Text,
    Box,
    ModalCloseButton,
    useDisclosure,
    Image,
    Button,
} from "@chakra-ui/react";

interface IProps {
    children: React.ReactNode;
}

const ResponseCreditCardModal: React.FC<IProps> = ({ children }) => {
    const { onOpen, onClose, isOpen } = useDisclosure();
    const [step, setStep] = React.useState(1);
    return (
        <>
            <Box display="inline" onClick={onOpen}>
                {children}
            </Box>
            <Modal isOpen={isOpen} onClose={() => null} size="xl">
                <ModalOverlay />
                <ModalContent>
                    {step === 2 && (
                        <ModalCloseButton
                            onClick={onClose}
                            color="secondary.400"
                            fontSize={16}
                            fontWeight="300"
                        />
                    )}
                    <ModalBody pb={6} px={4}>
                        {step === 1 && (
                            <>
                                <Image
                                    src="/checkout/dotone.svg"
                                    alt="Aprovado"
                                    mx="auto"
                                    my={5}
                                    w={8}
                                    h={8}
                                />
                                <Image
                                    src="/checkout/approved.svg"
                                    alt="Aprovado"
                                    mx="auto"
                                    my={10}
                                    w={"86px"}
                                    h={"95px"}
                                />
                                <Text
                                    fontWeight="bold"
                                    textAlign="center"
                                    fontSize={24}
                                >
                                    Pagamento Aprovado
                                </Text>
                                <Text
                                    color="primary.600"
                                    fontSize={16}
                                    textAlign="center"
                                    my={10}
                                >
                                    Tudo certo! O seu pagamento foi confirmado e
                                    aprovado.
                                </Text>
                                <Button
                                    onClick={() => setStep(2)}
                                    w="100%"
                                    variant="solidPrimary"
                                >
                                    Prosseguir
                                </Button>
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <Image
                                    src="/checkout/dottwo.svg"
                                    alt="Aprovado"
                                    mx="auto"
                                    my={5}
                                    w={8}
                                    h={8}
                                />
                                <Image
                                    src="/checkout/mail.svg"
                                    alt="Aprovado"
                                    mx="auto"
                                    my={5}
                                    w={"86px"}
                                    h={"95px"}
                                />
                                <Text
                                    fontWeight="bold"
                                    textAlign="center"
                                    fontSize={24}
                                >
                                    Verifique seu e-mail
                                </Text>
                                <Text
                                    color="primary.600"
                                    fontSize={16}
                                    textAlign="center"
                                    mt={10}
                                >
                                    Enviamos um e-mail para confirmar a criação
                                    da sua conta. Depois de acessar o e-mail
                                    enviado, realize o primeiro acesso em nossa
                                    plataforma.
                                </Text>
                                <Text
                                    color="primary.600"
                                    fontSize={16}
                                    textAlign="center"
                                    mt={5}
                                    mb={10}
                                >
                                    O e-mail pode demorar até 5 minutos para
                                    chegar.
                                </Text>

                                <Button
                                    onClick={() => {
                                        onClose();
                                        setStep(1);
                                    }}
                                    w="100%"
                                    variant="solidPrimary"
                                >
                                    Concluir
                                </Button>
                            </>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export { ResponseCreditCardModal };
