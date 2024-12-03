export interface CreditCard {
    expiration_card: string;
    titular_cartao: string;
    card_number: string;
    security_code: string;
}

export type PartType = "gold" | "silver" | "bronze";

export interface CreateSale {
    cliente_id: number;
    valor: number;
    titular_cartao: string;
    expiration_card: number;
    card_number: string;
    security_code: string;
}

export interface TransactionRequest {
    items: Array<{
        name: string;
        value: number;
        amount: number;
    }>;
    payment: {
        credit_card: {
            customer: {
                name: string;
                cpf: string;
                email: string;
                birth: string;
                phone_number: string;
            };
            installments: number;
            payment_token: string;
            billing_address: {
                street: string;
                number: string;
                neighborhood: string;
                zipcode: string;
                city: string;
                complement?: string;
                state: string;
            };
        };
    };
}

export interface PaymentResponse {
    code: number;
    data: {
        installments: number;
        installment_value: number;
        charge_id: number;
        status: "approved" | "unpaid" | "paid";
        total: number;
        payment: "credit_card" | "boleto" | "pix" | string;
        refusal?: {
            reason: string;
            retry: boolean;
        };
    };
}

export interface RetryPaymentRequest {
    payment: {
        credit_card: {
            customer: {
                name: string;
                cpf: string;
                email: string;
                birth: string;
                phone_number: string;
            };
            billing_address: {
                street: string;
                number: string;
                neighborhood: string;
                zipcode: string;
                city: string;
                complement?: string;
                state: string;
            };
            payment_token: string;
        };
    };
}
