import {
    Center,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Text,
    chakra,
    ModalBody,
    useDisclosure,
    Box,
    Image,
} from "@chakra-ui/react";
import React from "react";
import { CustomSpinner } from "../CustomSpinner";

interface IProps {
    children: React.ReactNode;
}

const MetaMaskQRCodeModal: React.FC<IProps> = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box onClick={onOpen}>{children}</Box>
            <Modal
                isCentered
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent w="max-content">
                    <ModalCloseButton />
                    <ModalBody my={4}>
                        <Text
                            fontWeight={600}
                            fontSize={24}
                            mb="1rem"
                            textAlign="center"
                        >
                            QR Code
                        </Text>
                        <Text fontSize={14} textAlign="center">
                            Escaneie o QR Code com a MetaMask
                        </Text>
                        <Center h={300}>
                            <Image
                                src="/checkout/fakeQRCode.svg"
                                alt="qrcode"
                            />
                            <CustomSpinner />
                        </Center>
                        <Text fontSize={14} textAlign="center">
                            Ainda não tem MetaMask?{" "}
                            <chakra.span
                                color="tertiary.400"
                                textDecor="underline"
                                cursor="pointer"
                            >
                                Clique aqui
                            </chakra.span>
                        </Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export { MetaMaskQRCodeModal };
