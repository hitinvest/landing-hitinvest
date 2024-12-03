/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import React, { createContext, useContext, ReactNode } from "react";
import { useToast } from "@chakra-ui/react";
import { axiosInstance } from "../api/axios";
import { Login, User } from "../api/interfaces";
import { useRouter } from "next/router";

interface AuthContextType {
    login: (loginData: Login, onSuccess?: () => void) => void;
    logout: (token: string) => void;
    user?: User;
    isLoading: boolean;
    criarUsuario: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const router = useRouter();
    let user =
        typeof window !== "undefined" &&
        typeof window.localStorage !== "undefined"
            ? JSON.parse(localStorage.getItem("userInfo") as string)
            : "";
    const toast = useToast();

    // const allowedRoutes = ["/login"];
    // const isRouteAllowed = allowedRoutes.includes(router.pathname);

    // React.useEffect(() => {
    //     if (!token && !isRouteAllowed) {
    //         router.push("/login");
    //     }
    // }, []);

    const login = async (loginData: Login, onSuccess?: () => void) => {
        setIsLoading(true);
        try {
            const response = await axiosInstance().post(`/guest/login`, {
                ...loginData,
            });
            if (response.status === 200 && response.data) {
                localStorage.setItem(
                    "token",
                    JSON.stringify(response.data.dados.token)
                );
                localStorage.setItem(
                    "userInfo",
                    JSON.stringify(response.data.dados)
                );
                if (onSuccess) {
                    onSuccess();
                }
            }
            toast({
                title: "Olá, " + response.data.dados.name,
                description: "Você está autenticado.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        } catch (error: any) {
            toast({
                title: "Houve um erro.",
                description: error.response.data.mensagem,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };
    const criarUsuario = async () => {
        const user = {
            nome: "Cliente Hit",
            email: "cliente_hit@hit.com",
            email_confirmation: "cliente_hit@hit.com",
            password: "10203040",
            password_confirmation: "10203040",
            tipo: "cliente",
            cpf_cnpj: "715.536.520-37",
            rg: "35.284.057-2",
            nascimento: "1992-04-03",
            nacionalidade: "brasileira",
            sexo: "masculino",
            telefone: "(11) 98765-4321",
            pep: true,
            tipo_pep: "tipo de pep",
            fatca: true,
            crs: true,
            indicacao: "indicacao123",
            cep: "12345-678",
            endereco: "Rua Exemplo",
            numero: "123",
            complemento: "apto 456",
            cidade: "São Paulo",
            bairro: "Bairro Exemplo",
            estado: "SP",
            pais: "BR",
        };

        await axiosInstance().post(`/guest/register`, {
            ...user,
        });
    };

    const logout = async (token: string) => {
        setIsLoading(true);
        try {
            await axiosInstance().post("/guest/logout", token);
            router.push("/login");
            localStorage.removeItem("userInfo");
            user = "";
            toast({
                title: "Logout Feito",
                description: "Você foi desconectado.",
                status: "info",
                duration: 3000,
                isClosable: true,
            });
        } catch (error: any) {
            toast({
                title: "Houve um erro.",
                description: error.response.data.mensagem,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{ login, logout, user, isLoading, criarUsuario }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
};
