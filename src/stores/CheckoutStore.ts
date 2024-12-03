import { makeAutoObservable } from "mobx";
import FormManager from "@/resources/mobx/FormManager";
import { CreateUser } from "@/resources/api/interfaces";
import { axiosInstance } from "@/resources/api/axios";
import { CreateSale } from "@/resources/interfaces";
import { toast } from "react-toastify";
import { UserSchema } from "@/components/CheckoutForm/UserForm";

export class CheckoutStore {
    // MARK: States
    public loader = false;
    public showPix: boolean | null = null;
    public showCrypto: boolean | null = null;
    public showCredit: boolean | null = null;
    public isConnected = false;
    public acceptTerms = false;
    public hasBallance = false;
    public totalValue = 1;

    constructor() {
        makeAutoObservable(this);
    }

    // User data
    public userForm = new FormManager<CreateUser>({
        nome: "",
        email: "",
        password: "",
        password_confirmation: "",
        cpf_cnpj: "",
        nascimento: "",
        nome_mae: "",
        telefone: "",
        email_confirmation: "",
    });

    public createUser = () => {
        this.loader = true;
        try {
            axiosInstance().post("/guest/register-checkout", {
                ...this.userForm.getAllValues(),
            });
        } catch (e) {
            console.log(e);
        } finally {
            this.loader = false;
        }
    };

    public createSale = async (data: CreateSale, userForm?: UserSchema) => {
        this.loader = true;
        const month = data.expiration_card.toString().slice(0, 2);
        const year = data.expiration_card.toString().slice(2);
        try {
            await axiosInstance().post("/guest/register-checkout", {
                ...userForm,
            });
            await axiosInstance().post<CreateSale>("/pagamentos/cartao", {
                cliente_id: data.cliente_id,
                expiration_month: Number(month),
                expiration_year: Number(year),
                card_number: data.card_number.replaceAll(" ", ""),
                security_code: data.security_code,
                titular_cartao: data.titular_cartao,
                valor: data.valor,
            });
        } catch (e: any) {
            toast.error(e.mensagem);
        } finally {
            this.loader = false;
        }
    };

    // User data
    public userDataUponFirstPurchase = new FormManager({
        name: "",
        email: "",
        confirmEmail: "",
        phone: "",
    });

    // Card data
    public validationCard: Date = new Date();

    public cardForm = new FormManager({
        cardNumber: "",
        name: "",
        cvv: "",
        cpf: "",
        validity: "",
        birthday: "",
    });

    // Discount
    public discount = "";

    // Address Data
    public addressForm = new FormManager({
        zipcode: "",
        publicPlace: "", // Logradouro
        streetNumber: "",
        neighborhood: "",
        complementary: "",
        state: "",
        cep: "",
        city: "",
    });
}
