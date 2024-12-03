import { ComponentStyleConfig } from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
    defaultProps: {
        defaultProps: {
            variant: "outline",
        },
    },
    variants: {
        outline: (props) => ({
            ...theme.components.Button.variants?.outline(props),
            border: "2px solid",
            rounded: "md",
            px: 6,
            height: "48px",
            borderColor: "tertiary.400",
            color: "tertiary.400",
            fontSize: 16,
        }),
        solid: (props) => ({
            ...theme.components.Button.variants?.solid(props),
            _disabled: {
                opacity: 1,
                bg: "#D9D9D9",
                color: "#5F6169",
                colorScheme: "unset",
                cursor: "not-allowed",
                _hover: {
                    bg: "#D9D9D9",
                    color: "#5F6169",
                },
            },
            rounded: "md",
            px: 6,
            height: "44px",
        }),
        solidPrimary: (props) => ({
            ...theme.components.Button.variants?.solid(props),
            bg: "secondary.300",
            height: "40px",
            w: "164px",
            color: "white",
            fontWeight: 600,
            fontFamily: "'Albert Sans', sans-serif",
            transition: ".2s",
            _hover: {
                bg: "secondary.700",
                _disabled: {
                    bg: "#EFEFEF",
                },
                _loading: {
                    bg: "secondary.300",
                },
            },
            _disabled: {
                bg: "#EFEFEF",
                color: "#717172",
                opacity: 1,
            },
            _loading: {
                bg: "secondary.300",
                color: "red",
            },
            _focus: {
                bg: "secondary.700",
            },
            [`@media (min-width: ${props.theme.breakpoints.base})`]: {
                fontSize: 18,
                h: "44px",
            },
            [`@media (min-width: ${props.theme.breakpoints.base})`]: {
                fontSize: 16,
                h: "40px",
            },
        }),
        outlinePrimary: (props) => ({
            ...theme.components.Button.variants?.solid(props),
            bg: "transparent",
            w: "164px",
            border: "2px",
            borderColor: "rgba(65, 119, 221, 1)",
            color: "rgba(65, 119, 221, 1)",
            fontWeight: 600,
            fontFamily: "'Albert Sans', sans-serif",
            transition: ".3s",
            _hover: {
                bg: "rgba(217, 234, 253, 0.4)",
                _disabled: {
                    bg: "transparent",
                    borderColor: "rgba(161, 161, 161, 1)",
                    color: "rgba(161, 161, 161, 1)",
                },
                _loading: {
                    borderColor: "rgba(161, 161, 161, 1)",
                    color: "rgba(161, 161, 161, 1)",
                },
            },
            _disabled: {
                borderColor: "rgba(161, 161, 161, 1)",
                color: "rgba(161, 161, 161, 1)",
                opacity: 1,
            },
            _loading: {
                borderColor: "rgba(161, 161, 161, 1)",
                color: "rgba(161, 161, 161, 1)",
                bg: "transparent",
            },
            _focus: {
                bg: "transparent",
            },
            [`@media (min-width: ${props.theme.breakpoints.base})`]: {
                fontSize: 18,
                h: "44px",
            },
            [`@media (min-width: ${props.theme.breakpoints.base})`]: {
                fontSize: 16,
                h: "44px",
            },
            [`@media (min-width: ${props.theme.breakpoints.md})`]: {
                h: "64px",
                fontSize: 20,
            },
        }),
    },
};
