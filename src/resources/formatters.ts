export const formatters = {
    cpf: (v: string) => {
        v = v.replace(/\D/g, "");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return v;
    },
    dateValidity: (input: string) => {
        // Remove caracteres não numéricos da data
        input = input.replace(/\D/g, "");

        input = input.replace(/(\d{2})(\d)/, "$1 / $2");
        input = input.replace(/(\d{2})(\d)/, "$1 / $2");
        return input;
    },
    formatPhoneNumber: (value: string) => {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "($1) $2");
        value = value.replace(/(\d)(\d{4})$/, "$1-$2");

        return value;
    },
    dateString: (input: string) => {
        // Remove caracteres não numéricos da data
        input = input.replace(/\D/g, "");

        input = input.replace(/(\d{2})(\d)/, "$1/$2");
        input = input.replace(/(\d{2})(\d)/, "$1/$2");
        input = input.replace(/(\d{4})(\d)$/, "$1/$2");
        return input;
    },
    creditCard: (input: string) => {
        input = input.replace(/\D/g, "");
        input = input.replace(/(\d{4})(\d)/, "$1 $2");
        input = input.replace(/(\d{4})(\d)/, "$1 $2");
        input = input.replace(/(\d{4})(\d)/, "$1 $2");
        input = input.replace(/(\d{4})(\d)/, "$1 $2");

        return input;
    },
    onlyNumbers: (str: string) => str.replace(/\D/g, ""),
    cutMetamaskAddress: (address: string) => {
        if (address.length < 10) {
            return address;
        }
        const prefix = address.slice(0, 4);
        const suffix = address.slice(-4);
        return `${prefix}...${suffix}`;
    },
};
