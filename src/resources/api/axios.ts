import axios from "axios";

const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://hitapi.cariocanft.com.br/api";
const token =
    typeof window !== "undefined" && typeof window.localStorage !== "undefined"
        ? localStorage.getItem("token")
        : "";
const axiosInstance = () => {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export { BASE_URL, axiosInstance };
