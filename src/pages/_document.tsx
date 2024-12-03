import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;600;700&family=Bebas+Neue&family=Roboto:wght@400&family=Syncopate:wght@700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
                    rel="stylesheet"
                ></link>
                <link rel="icon" href="/hit.png" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                ></link>
                <link
                    rel="stylesheet"
                    href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"
                />
                <link rel="stylesheet" href="style.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
