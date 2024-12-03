import React, { useCallback, useEffect } from "react";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import { Flex, Image, Text } from "@chakra-ui/react";
import { formatters } from "@/resources/formatters";

const ConnectMetamaskButton = ({
    networkConfig,
    disappear,
    isConnected,
    setIsConnected,
}) => {
    const connectMetamask = useCallback(async () => {
        if (!window.ethereum) {
            toast.error("Carteira Cripto não detectada.");
            return;
        }
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            if (accounts.length === 0) {
                toast.error("Usuário negou a conexão.");
            }
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const network = await provider.getNetwork();
            if (network.chainId !== parseInt(networkConfig.chainId, 16)) {
                await window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [networkConfig],
                });

                const newNetwork = await provider.getNetwork();
                setIsConnected(
                    newNetwork.chainId === parseInt(networkConfig.chainId, 16)
                );
                if (
                    newNetwork.chainId === parseInt(networkConfig.chainId, 16)
                ) {
                    toast.success(
                        `Conectado à ${networkConfig.chainName} com sucesso!`
                    );
                } else {
                    toast.error(
                        `Falha ao conectar à ${networkConfig.chainName}.`
                    );
                }
            } else {
                setIsConnected(true);
                toast.success(
                    `Já está conectado à ${networkConfig.chainName}!`
                );
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                const balanceWei = await provider.getBalance(address);
                const balanceEther = ethers.utils.formatEther(balanceWei);
                localStorage.setItem(
                    "wallet",
                    formatters.cutMetamaskAddress(address)
                );
                localStorage.setItem("ballance", balanceEther);
            }
        } catch (err) {
            setIsConnected(false);
            console.error(err);
        }
    }, [networkConfig, setIsConnected]);

    useEffect(() => {
        if (!window.ethereum) return;

        const handleAccountsChanged = async () => {
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const network = await provider.getNetwork();
            setIsConnected(
                accounts.length > 0 &&
                    network.chainId === parseInt(networkConfig.chainId, 16)
            );
        };

        handleAccountsChanged();

        window.ethereum.on("accountsChanged", handleAccountsChanged);
        window.ethereum.on("chainChanged", handleAccountsChanged);

        return () => {
            if (window.ethereum.removeListener) {
                window.ethereum.removeListener(
                    "accountsChanged",
                    handleAccountsChanged
                );
                window.ethereum.removeListener(
                    "chainChanged",
                    handleAccountsChanged
                );
            }
        };
    }, [networkConfig, setIsConnected]);

    return (
        <>
            {disappear && isConnected ? null : (
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
                    mb={3}
                    onClick={connectMetamask}
                    _disabled={isConnected}
                >
                    <Image
                        cursor="pointer"
                        src="/checkout/fox.svg"
                        w="32px"
                        alt="Raposa"
                    />
                    <Text
                        cursor="pointer"
                        fontFamily="'Inter', sans-serif"
                        fontWeight={600}
                    >
                        {isConnected
                            ? `Conectado à ${networkConfig.chainName}`
                            : `Metamask`}
                    </Text>
                </Flex>
            )}
        </>
    );
};

export default ConnectMetamaskButton;
