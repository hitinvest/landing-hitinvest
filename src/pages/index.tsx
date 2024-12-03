import React from "react";
import { Flex } from "@chakra-ui/react";
import MainLayout from "@/layout/MainLayout";
import { Sections } from "@/components/LandingPageSections";
import { Logo } from "@/components/Logo";
import { observer } from "mobx-react-lite";

const Home: React.FC = observer(() => {
    return (
        <MainLayout>
            <Flex
                direction="column"
                bg={{
                    base: "url('/landing-page/bg-ligth-blue-Tablet.svg'), url('/landing-page/bg-ligth-blue-rigth-Tablet.svg')",
                    md: "url('/landing-page/bg-light-blue.svg'), url('/landing-page/bg-light-blue-right.svg') no-repeat",
                }}
                bgPosition={{
                    base: "left top, right top",
                    md: "left top, right top",
                }}
                bgRepeat={{
                    base: "no-repeat",
                    md: "no-repeat",
                }}
            >
                <Sections.Artist />
                <Flex
                    mt={{ base: 14, md: 28 }}
                    gap={{ base: 5, md: 10 }}
                    w={{ base: "95%", lg: "70%" }}
                    mx="auto"
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                >
                    <Sections.Operation />
                    <Sections.BuyAPart />
                </Flex>
                <Sections.PartAvailable />
            </Flex>
            <Flex
                direction="column"
                bg={{
                    base: "url('/landing-page/bg-light-blue-bottom-Mobile.svg')",
                    sm: "url('/landing-page/bg-light.blue-rigth-bottom-Tablet.svg')",
                    md: "url('/landing-page/bg-light-blue-rigth-bottom.svg')",
                }}
                bgPosition={{
                    base: "right bottom",
                    sm: "right bottom",
                    md: "right bottom",
                }}
                bgRepeat={{
                    base: "no-repeat",
                    sm: "no-repeat",
                    md: "no-repeat",
                }}
            >
                <Sections.MeetTheArtist />
                <Flex
                    mt={28}
                    gap={10}
                    w={{ base: "95%", lg: "70%" }}
                    mx="auto"
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                >
                    <Sections.AskYourDoubts />
                    <Logo />
                </Flex>
            </Flex>
        </MainLayout>
    );
});

export default Home;
