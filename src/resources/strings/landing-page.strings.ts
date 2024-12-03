const landingPageStrings = {
    meetTheArtist: {
        title: "CONHEÇA O ARTISTA",
        description:
            'Matheus Brasileiro Aguiar, mais conhecido como Matuê, é um rapper, trapper, cantor e compositor brasileiro. Ficou conhecido com os singles "Anos Luz", lançado em 2017 e Banco, lançado em 2019. É considerado um símbolo do trap brasileiro.',
        cards: [
            {
                socialMedias: [
                    "/landing-page/instagram.svg",
                    "/landing-page/twitter.svg",
                    "/landing-page/tiktok.svg",
                ],
                type: "seguidores",
                number: "+6.2M",
            },
            {
                socialMedias: ["/landing-page/spotify.svg"],
                type: "ouvintes mensais",
                number: "+5.0M",
            },
            {
                socialMedias: ["/landing-page/youtube.svg"],
                type: "visualizações",
                number: "+3.2B",
            },
        ],
    },
    partsAvalaible: {
        sectionTitle: "PEDAÇOS DISPONÍVEIS",
        generics: {
            whatDoYouGet: "O QUE VOCÊ GANHA AO COMPRAR",
            buyNow: "COMPRAR AGORA",
        },
        bronze: {
            type: "BRONZE",
            typeImg: "/landing-page/bronzeCircle.svg",
            price: "R$ 25",
            benefits: [
                {
                    icon: "/landing-page/coin.svg",
                    description: "Receba rendimentos por 2 anos",
                },
                {
                    icon: "/landing-page/sing.svg",
                    description: "0.002% dos Royalties Digitais",
                },
                {
                    icon: "/landing-page/ballonMessage.svg",
                    description: "Acesso à grupo exclusivo no Telegram",
                },
            ],
        },
        silver: {
            type: "PRATA",
            typeImg: "/landing-page/silverCircle.svg",
            price: "R$ 75",
            benefits: [
                {
                    icon: "/landing-page/coin.svg",
                    description: "Receba rendimentos por 2 anos",
                },
                {
                    icon: "/landing-page/sing.svg",
                    description: "0.002% dos Royalties Digitais",
                },
                {
                    icon: "/landing-page/ballonMessage.svg",
                    description: "Acesso à grupo exclusivo no Telegram",
                },
                {
                    icon: "/landing-page/cam.svg",
                    description: "Vídeochamada em grupo com o artista",
                },
            ],
        },
        golden: {
            type: "OURO",
            typeImg: "/landing-page/goldenCircle.svg",
            price: "R$ 800",
            benefits: [
                {
                    icon: "/landing-page/coin.svg",
                    description: "Receba rendimentos por 2 anos",
                },
                {
                    icon: "/landing-page/sing.svg",
                    description: "0.002% dos Royalties Digitais",
                },
                {
                    icon: "/landing-page/ballonMessage.svg",
                    description: "Acesso à grupo exclusivo no Telegram",
                },
                {
                    icon: "/landing-page/cam.svg",
                    description: "Vídeochamada em grupo com o artista",
                },
                {
                    icon: "/landing-page/shirt.svg",
                    description: "Camisa exclusiva do lançamento",
                },
                {
                    icon: "/landing-page/ticket.svg",
                    description: "Ingresso para 1x show do artista",
                },
            ],
        },
    },
};

export { landingPageStrings };
