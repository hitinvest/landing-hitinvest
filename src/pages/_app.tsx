import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "@/themes";
import SiteHead from "@/components/SiteHead";
import Fonts from "@/components/GlobalFont";
import { AuthProvider } from "@/resources/auth";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <SiteHead />
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </ChakraProvider>
    );
}
