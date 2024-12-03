import React from "react";
import { observer } from "mobx-react-lite";
import { Grid, Heading } from "@chakra-ui/react";
import { Card } from "@/components/Card";
import { TextInput } from "@/components/TextInput";
import { CheckoutStrings } from "@/resources/strings/checkout.strings";

interface IProps {
    setDiscount: (e: string) => void;
}

const Discount: React.FC<IProps> = observer(({ setDiscount }) => {
    const sectionStrings = CheckoutStrings.discountForm;
    return (
        <Card mt={10}>
            <Heading
                textTransform="none"
                fontSize={24}
                mb={5}
                color="primary.800"
            >
                {sectionStrings.title}
            </Heading>
            <Grid gridTemplateColumns="1fr 1fr" gap={10}>
                <TextInput
                    label={sectionStrings.ticketDiscount}
                    placeholder="Insira um cupom"
                    onChange={(e) => setDiscount(e.target.value)}
                />
            </Grid>
        </Card>
    );
});

export { Discount };
