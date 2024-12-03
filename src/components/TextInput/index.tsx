import React from "react";
import { Input, Flex, Text, InputProps } from "@chakra-ui/react";

interface IProps {
    label?: string;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    type?: React.HTMLInputTypeAttribute;
    isReadOnly?: boolean;
    isDisabled?: boolean;
    value?: string;
    maxLength?: number;
    inputProps?: InputProps;
}

export const TextInput: React.FC<IProps> = ({
    label,
    onChange,
    placeholder,
    type,
    isReadOnly,
    isDisabled,
    value,
    maxLength,
    inputProps,
}) => {
    return (
        <Flex flexDirection="column" gap={2}>
            <Text
                fontWeight={600}
                fontFamily="Albert Sans"
                color="primary.800"
                fontSize={16}
            >
                {label}
            </Text>
            <Input
                {...inputProps}
                maxLength={maxLength}
                isReadOnly={isReadOnly}
                isDisabled={isDisabled}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
        </Flex>
    );
};
