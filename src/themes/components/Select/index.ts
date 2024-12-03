import { ComponentStyleConfig } from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme";

export const Select: ComponentStyleConfig = {
    defaultProps: {
        variant: "outline",
        _hover: {
            bg: "gray.200",
        },
    },
    variants: {
        outline: (props) => ({
            ...theme.components.Button.variants?.outline(props),
            field: {
                color: "primary.800",
                h: 50,
                fontSize: 16,
                transition: ".4s",
                borderColor: "#6D6E74",
                _focus: {
                    boxShadow: "0 0 0 0",
                    bg: "rgba(240,240,255,.6)",
                    borderColor: "#6D6E74",
                    outline: 0,
                },
                _hover: {
                    bg: "rgba(240,240,255,.6)",
                    borderColor: "#6D6E74",
                },
            },
        }),
    },
};
