/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import { CreditCardData } from "@/resources/api/interfaces";
import EfiPay from "payment-token-efi";

const generatePaymentToken = async (card: CreditCardData) => {
    if (typeof window === "undefined") {
        console.warn(
            "generatePaymentToken só pode ser chamado no lado do cliente."
        );
        return;
    }
    const EfiPay = (await import("payment-token-efi")).default;

    try {
        const result = (await EfiPay.CreditCard.setAccount(
            process.env.NEXT_PUBLIC_ACCOUNT_INDENTIFY || ""
        )
            .setEnvironment("sandbox")
            .setCreditCardData({
                brand: card.brand,
                number: card.number,
                cvv: card.cvv,
                expirationMonth: card.expirationMonth,
                expirationYear: card.expirationYear,
                reuse: true,
            })
            .getPaymentToken()) as EfiPay.CreditCard.PaymentTokenResponse;

        const payment_token = result.payment_token;
        const card_mask = result.card_mask;

        console.log("payment_token", payment_token);
        console.log("card_mask", card_mask);
    } catch (error: any) {
        console.log("Código: ", error.code);
        console.log("Nome: ", error.error);
        console.log("Mensagem: ", error.error_description);
    }
};

export const efiPayService = { generatePaymentToken };
