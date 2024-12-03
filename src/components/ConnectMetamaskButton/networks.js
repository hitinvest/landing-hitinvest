export const mumbai = {
    chainId: `0x${(80001).toString(16)}`,
    chainName: "Mumbai",
    nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
    },
    rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
};

export const polygon = {
    chainId: `0x${(137).toString(16)}`,
    chainName: "Polygon",
    nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
    },
    rpcUrls: ["https://polygon.llamarpc.com"],
    blockExplorerUrls: ["https://polygonscan.com/"],
};
