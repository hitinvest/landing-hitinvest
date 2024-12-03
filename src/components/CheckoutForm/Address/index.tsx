import React from "react";
import { Heading, Flex, Image, Grid, Text, Box } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { Card } from "@/components/Card";
import { TextInput } from "@/components/TextInput";
import { Select } from "@/components/Select";
import data from "@/resources/statesAndCities.json";
import { CheckoutStrings } from "@/resources/strings/checkout.strings";

type FieldType =
    | "zipcode"
    | "publicPlace"
    | "streetNumber"
    | "complementary"
    | "neighborhood"
    | "cep"
    | "city"
    | "state";

interface FormValues {
    field: (field: FieldType) => {
        name: FieldType;
        value: string;
        onChange: (element: {
            target: {
                value: string;
            };
        }) => void;
    };
}

interface IProps {
    addressForm: FormValues;
}

export const Address: React.FC<IProps> = observer(({ addressForm }) => {
    const sectionStrings = CheckoutStrings.addresForm;
    const [state, setState] = React.useState("");
    const [city, setCity] = React.useState("");

    const onChangeState = (e: string) => {
        setState(e);
        addressForm.field("state").onChange({ target: { value: e } });
    };
    const onChangeCity = (e: string) => {
        setCity(e);
        addressForm.field("city").onChange({ target: { value: e } });
    };

    return (
        <Card mt={10}>
            <Flex>
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    w="100%"
                >
                    <Heading
                        textTransform="none"
                        fontSize={{ base: 20, md: 24 }}
                        color="primary.800"
                    >
                        {sectionStrings.title}
                    </Heading>
                    <Flex gap={{ base: 0, md: 2 }}>
                        <Text
                            fontSize={{ base: 14, md: 16 }}
                            color="secondary.200"
                            fontWeight={600}
                            cursor="pointer"
                            _hover={{
                                textDecor: "underline",
                            }}
                        >
                            {sectionStrings.ask}
                        </Text>
                        <Image src="/help.svg" alt="Ajuda" />
                    </Flex>
                </Flex>
            </Flex>
            <Grid
                mt={5}
                gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap={7}
            >
                <TextInput
                    {...addressForm.field("zipcode")}
                    label={sectionStrings.fields.zipcode}
                    placeholder="Insira o CEP do endereço"
                />
                <Box display={{ base: "none", md: "flex" }} />
                <TextInput
                    {...addressForm.field("publicPlace")}
                    label={sectionStrings.fields.publicPlace}
                    placeholder="Insira o logradouro"
                />
                <TextInput
                    {...addressForm.field("streetNumber")}
                    label={sectionStrings.fields.number}
                    placeholder="Insira o número"
                />
                <TextInput
                    {...addressForm.field("neighborhood")}
                    label={sectionStrings.fields.neighborhood}
                    placeholder="Insira o Bairro"
                />
                <TextInput
                    {...addressForm.field("complementary")}
                    label={sectionStrings.fields.complementary}
                    placeholder="Insira o complemento"
                />
                <Select
                    data={data.estados}
                    onSelectState={onChangeState}
                    onSelectCity={onChangeCity}
                    stateSelected={state}
                    citySelected={city}
                />
            </Grid>
        </Card>
    );
});
