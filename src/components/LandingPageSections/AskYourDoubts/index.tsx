import React from "react";
import {
    Heading,
    Text,
    Accordion,
    AccordionItem,
    Box,
    AccordionPanel,
    AccordionButton,
    Flex,
    Image,
} from "@chakra-ui/react";

const AskYourDoubts: React.FC = () => {
    const faqItems = [
        {
            title: "Quais formas de pagamento disponíveis?",
            description:
                "Você pode comprar um pedaço usando Cartão de Crédito, Débito, Pix ou Crypto (USDC).",
        },
        {
            title: "O que são royalties musicais?",
            description:
                "Os Royalties Musicais são os pagamentos que os criadores, participantes e dentre outras pessoas envolvidas nas músicas recebem toda vez que suas músicas são tocadas no Spotify, Deezer, YouTube Music e outras plataformas de streaming.",
        },
        {
            title: "Como terei acesso aos benefícios?",
            description:
                "Ao adquirir um pedaço, você terá acesso a plataforma HitInvest, onde terá acesso a todas informações sobre o seu pedaço e acesso aos benefícios.",
        },
        {
            title: "Quais os riscos envolvidos na compra de royalties musicais?",
            description:
                "Como qualquer investimento, comprar royalties musicais também possui riscos. O retorno financeiro depende do sucesso contínuo da música e da sua frequência de reprodução, o que pode variar de acordo com o mercado musical e preferências do público.",
        },
        {
            title: "Como vou receber os royalties musicais?",
            description:
                "Você receberá os pagamentos de royalties musicais através da plataforma HitInvest, onde poderá visualizar o saldo de royalties e solicitar saque no Pix ou em Crypto quando atingir o valor mínimo de R$50,00.",
        },
        {
            title: "O pagamento de royalties acontece todo mês?",
            description:
                "Depois de ocorrer o lançamento da música, o primeiro pagamento de royalties acontece após 90 dias, depois deste prazo, o pagamento ocorre a cada mês. A cada pagamento a plataforma HitInvest tem um prazo de 15 dias úteis para adicionar o saldo de royalties em sua conta.",
        },
        {
            title: "Vou receber pagamentos de royalties para o resto da vida?",
            description:
                "Atualmente, não temos nenhum pedaço que pague royalties para toda vida, quem sabe em breve? Enquanto isso, verifique quantos anos você terá direito a receber com o pedaço que você quer comprar. Além disso, o pagamento de royalties depende de diversos fatores, como a frequência de reproduções, que pode variar de acordo com o mercado musical.",
        },
        {
            title: "Quais as principais vantagens dos royalties musicais?",
            description:
                "Investir em royalties musicais é como se tornar um dono especial de uma música que as pessoas gostam de ouvir. É como ganhar uma parte do dinheiro toda vez que a música é tocada em plataformas de streaming (Spotify, Deezer, YouTube Music, etc). Isso pode ser bom porque você pode receber um dinheiro regularmente só porque pessoas estão escutando a música que você comprou, além disso, oferece chance de ser dono de um pedacinho do próximo hit nacional, maravilha né? Como investimento, os royalties musicais se mostram como boa uma alternativa aos investimentos de alto rísco porque não está atrelado a bolsa de valores.",
        },
    ];

    return (
        <Flex flexDirection="column" w="100%">
            <Heading
                mb={10}
                fontSize={{ base: 32, md: 64 }}
                textAlign="center"
                fontFamily={`'Tusker Grotesk'`}
                color="black"
            >
                Tire suas dúvidas
            </Heading>
            <Accordion allowToggle w="100%">
                {faqItems.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        borderTop="none"
                        borderBottom="2px solid"
                        borderBottomColor="#EAEAEA"
                    >
                        <Text>
                            <AccordionButton
                                fontSize={{ base: 14, md: 20 }}
                                m={0}
                                p={0}
                                py={5}
                                mb={2}
                            >
                                <Box as="span" flex="1" textAlign="left">
                                    {faq.title}
                                </Box>
                                <Image
                                    src="/arrow.svg"
                                    w={{ base: "16px", md: "24px" }}
                                    alt="Seta"
                                />
                            </AccordionButton>
                        </Text>
                        <AccordionPanel
                            mb={5}
                            p={0}
                            fontSize={{ base: 14, md: 20 }}
                            color="blackAlpha.800"
                        >
                            {faq.description}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Flex>
    );
};

export { AskYourDoubts };
