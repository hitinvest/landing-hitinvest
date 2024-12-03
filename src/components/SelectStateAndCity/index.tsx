import React from "react";
import { Select as SelectChakra } from "@chakra-ui/react";

interface IStructJson {
    sigla: string;
    nome: string;
    cidades: string[];
}

interface IProps {
    data: IStructJson[];
    stateSelected: string | null;
    citySelected: string | null;
    onSelectState: (e: string) => void;
    onSelectCity: (e: string) => void;
}

const Select: React.FC<IProps> = ({
    data,
    onSelectCity,
    onSelectState,
    stateSelected,
}) => {
    const cities = data.find((state) => state.sigla === stateSelected);
    return (
        <>
            <SelectChakra
                onChange={(e) => {
                    onSelectState(e.target.value);
                }}
            >
                <option value="">Selecione o Estado</option>
                {data.map((item, index) => (
                    <option key={item.nome + index} value={item.sigla}>
                        {item.nome}
                    </option>
                ))}
            </SelectChakra>
            <SelectChakra
                disabled={!stateSelected}
                onChange={(e) => onSelectCity(e.target.value)}
            >
                <option value="">Selecione a Cidade</option>
                {cities?.cidades.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </SelectChakra>
        </>
    );
};

export { Select };
