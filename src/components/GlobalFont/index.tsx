import { Global } from "@emotion/react";

const Fonts = () => (
    <Global
        styles={`
      /* latin */
      @font-face {
        font-family: 'Tusker Grotesk';
        font-display: swap;
        src: url('./fonts/TuskerGrotesk-3600Semibold.woff2') format('woff2'),
            url('./fonts/TuskerGrotesk-3600Semibold.woff') format('woff'),
            url('./fonts/TuskerGrotesk-3600Semibold.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Helvetica';
        font-display: swap;
        src: url('./fonts/Helvetica.ttf') format('truetype');
      }
      `}
    />
);

export default Fonts;
