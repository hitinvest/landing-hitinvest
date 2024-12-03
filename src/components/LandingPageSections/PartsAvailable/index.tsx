import React from "react";
import { Box, Button, Center, Heading, Image } from "@chakra-ui/react";
import { CardPartAvailable } from "@/components/CardPartAvailable";
import { landingPageStrings } from "@/resources/strings/landing-page.strings";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/router";
import { PartType } from "@/resources/interfaces";

const PartAvailable: React.FC = () => {
    const sectionStrings = landingPageStrings.partsAvalaible;
    const router = useRouter();
    const buttonNext = (onClickHandler: () => void) => (
        <Button
            position="absolute"
            bg="transparent"
            _hover={{
                bg: "transparent",
            }}
            top="50%"
            right={{ base: "-20px", md: "20px" }}
            cursor="pointer"
            transform="translateY(-50%)"
            zIndex={30}
            onClick={onClickHandler}
        >
            <Image
                cursor="pointer"
                style={{
                    width: "46px",
                }}
                alt="Seta"
                src="/landing-page/arrow-slide-right.svg"
            />
        </Button>
    );

    const buttonPrev = (onClickHandler: () => void) => (
        <Button
            position="absolute"
            bg="transparent"
            _hover={{
                bg: "transparent",
            }}
            top="50%"
            left={{ base: "-20px", md: "20px" }}
            cursor="pointer"
            transform="translateY(-50%)"
            zIndex={30}
            onClick={onClickHandler}
        >
            <Image
                cursor="pointer"
                style={{
                    width: "46px",
                }}
                alt="Seta"
                src="/landing-page/arrow-slide-left.svg"
            />
        </Button>
    );

    const onClickBuyNow = (partType: PartType) => {
        localStorage.setItem("partType", partType);
        router.push("/checkout");
    };

    return (
        <>
            <Heading
                mt={{ base: 10, md: 20 }}
                mb={10}
                textAlign="center"
                fontFamily={`'Tusker Grotesk'`}
                fontSize={{ base: 32, md: 48, lg: 64 }}
                color="black"
            >
                {sectionStrings.sectionTitle}
            </Heading>
            <Center
                gap={20}
                mt={20}
                flexWrap="wrap"
                display={{ base: "none", lg: "flex" }}
            >
                <CardPartAvailable
                    onClickBuy={() => onClickBuyNow("bronze")}
                    typeImg={sectionStrings.bronze.typeImg}
                    type={sectionStrings.bronze.price}
                    price={sectionStrings.bronze.type}
                    benefits={sectionStrings.bronze.benefits}
                />
                <CardPartAvailable
                    onClickBuy={() => onClickBuyNow("silver")}
                    type={sectionStrings.silver.price}
                    typeImg={sectionStrings.silver.typeImg}
                    price={sectionStrings.silver.type}
                    benefits={sectionStrings.silver.benefits}
                />
                <CardPartAvailable
                    onClickBuy={() => onClickBuyNow("gold")}
                    typeImg={sectionStrings.golden.typeImg}
                    type={sectionStrings.golden.price}
                    price={sectionStrings.golden.type}
                    benefits={sectionStrings.golden.benefits}
                />
            </Center>
            <Box display={{ base: "block", lg: "none" }} position="relative">
                <Box
                    w="20%"
                    position="absolute"
                    h="100%"
                    left="0px"
                    zIndex={30}
                    bg="linear-gradient(270deg, transparent 0%, rgba(255,255,255,.9) 90%)"
                />
                <Box
                    w="20%"
                    position="absolute"
                    h="100%"
                    right="0px"
                    zIndex={30}
                    bg="linear-gradient(270deg, rgba(255,255,255,.9) 0%,  transparent 90%)"
                />
                <Carousel
                    centerMode
                    renderArrowPrev={buttonPrev}
                    renderArrowNext={buttonNext}
                    swipeable
                    emulateTouch
                    infiniteLoop
                    selectedItem={1}
                    autoPlay
                    centerSlidePercentage={80}
                    interval={15000}
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                >
                    <CardPartAvailable
                        onClickBuy={() => onClickBuyNow("bronze")}
                        typeImg={sectionStrings.bronze.typeImg}
                        type={sectionStrings.bronze.price}
                        price={sectionStrings.bronze.type}
                        benefits={sectionStrings.bronze.benefits}
                    />
                    <CardPartAvailable
                        onClickBuy={() => onClickBuyNow("silver")}
                        type={sectionStrings.silver.price}
                        typeImg={sectionStrings.silver.typeImg}
                        price={sectionStrings.silver.type}
                        benefits={sectionStrings.silver.benefits}
                    />
                    <CardPartAvailable
                        onClickBuy={() => onClickBuyNow("gold")}
                        typeImg={sectionStrings.golden.typeImg}
                        type={sectionStrings.golden.type}
                        price={sectionStrings.golden.price}
                        benefits={sectionStrings.golden.benefits}
                    />
                </Carousel>
            </Box>
        </>
    );
};

export { PartAvailable };
