/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Center, Text, Heading, Image, Box, Button } from "@chakra-ui/react";
import { landingPageStrings } from "@/resources/strings/landing-page.strings";
import { Carousel } from "react-responsive-carousel";
import { CardNumberOfArtist } from "@/components/CardNumberOfArtist";

const MeetTheArtist: React.FC = () => {
    const sectionString = landingPageStrings.meetTheArtist;
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

    return (
        <>
            <Center
                gap={10}
                mb={10}
                flexDirection="column"
                p={2}
                mx="auto"
                w={{ base: "95%", lg: "70%" }}
            >
                <Heading
                    fontFamily={`'Tusker Grotesk'`}
                    fontSize={{ base: 32, md: 64 }}
                    color="black"
                >
                    {sectionString.title}
                </Heading>
                <Text
                    textAlign="center"
                    fontSize={{ base: 14, md: 20 }}
                    lineHeight="21px"
                >
                    {sectionString.description}
                </Text>
                <Center gap={5} display={{ base: "none", lg: "flex" }}>
                    {sectionString.cards.map((card, index) => (
                        <CardNumberOfArtist
                            key={index + "T"}
                            number={card.number}
                            type={card.type}
                            socialMedia={card.socialMedias}
                        />
                    ))}
                </Center>
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
                    renderArrowPrev={buttonPrev}
                    renderArrowNext={buttonNext}
                    swipeable
                    emulateTouch
                    autoPlay
                    infiniteLoop
                    centerMode
                    centerSlidePercentage={80}
                    interval={5000}
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                >
                    {sectionString.cards.map((card, index) => (
                        <CardNumberOfArtist
                            key={index + "T"}
                            number={card.number}
                            type={card.type}
                            socialMedia={card.socialMedias}
                        />
                    ))}
                </Carousel>
            </Box>
        </>
    );
};

export { MeetTheArtist };
