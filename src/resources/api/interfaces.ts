export interface Login {
    email: string;
    password: string;
}

export interface Cliente {
    nome_completo: string;
    cpf_cnpj: string;
    status_cpf: string;
    rg: string;
    nascimento: Date;
    telefone: string;
    cep: string;
    endereco: string;
    numero: string;
    complemento: string;
    cidade: string;
    bairro: string;
    estado: string;
    pais: string;
    nivel_kyc: number;
    ppe: boolean;
    negociar_mensalmente: string;
    codigo_parceiro: string;
    indicacao: string;
    limite_anual_brl: string;
    hit_wallet: string;
}

export interface User {
    id: string;
    token: string;
    name: string;
    email: string;
    role: "user" | "admin";
    cliente: Cliente;
}

export interface CreateUser {
    nome: "";
    nome_mae: "";
    email: "";
    email_confirmation: "";
    password: "";
    password_confirmation: "";
    cpf_cnpj: "";
    nascimento: "";
    telefone: "";
}

export interface CreditCardData {
    brand: string;
    number: string;
    cvv: string;
    expirationMonth: string;
    expirationYear: string;
}
