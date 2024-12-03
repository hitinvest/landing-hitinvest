import { CreditCard } from "./CreditCard";
import { Discount } from "./Discount";
import { PaymentMethod } from "./PaymentMethod";
import { PurchaseInformation } from "./PurchaseInformation";
import { UserForm } from "./UserForm";
import { Address } from "./Address";
import { AwaitPayment } from "./QrCodePix/AwaitPayment";
import { LoadingPayment } from "./QrCodePix/LoadingPayment";
import { ApprovedPayment } from "./QrCodePix/ApprovedPayment";

export const FinalizeOrderForm = {
    UserForm,
    PaymentMethod,
    PurchaseInformation,
    CreditCard,
    Discount,
    Address,
    AwaitPayment,
    LoadingPayment,
    ApprovedPayment,
};
