import React from "react";
import { Box } from "@chakra-ui/react";
interface IProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <>
            <Box height="100%">{children}</Box>
        </>
    );
};

export default MainLayout;
