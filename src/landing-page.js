import fonts from "./fonts";

export default async (frameContent) => {
  const fontFile = fonts[0].file; // TODO: we'll have more than 1 font at some point
  const fontName = fonts[0].name;

  const html = String.raw;
  const markup = html`
    <!DOCTYPE html>
    <html>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.js"></script>
        <style>
          @font-face {
            font-family: "${fontName}";
            src: local("${fontName}"), url("/fonts/${fontFile}") format("woff2");
          }
          :root {
            --background: white;
            --text: black;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --background: black;
              --text: white;
            }
          }
          body {
            font-family: "${fontName}";
            background: var(--background);
            color: var(--text);
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          figure {
            display: inline-block;
            margin: 0;
            max-width: 100%;
          }
          img {
            max-width: 100%;
            border: 4px inset var(--text);
          }
          .buttons {
            display: flex;
          }
          .buttons form {
            flex-grow: 1;
          }
          input[type="submit"] {
            font-family: "${fontName}";
            padding: 1rem;
            display: block;
          }
          html,
          body {
            margin: 0;
            padding: 0;
          }
          canvas {
            display: flex;
            width: 100vw;
            height: 100vh;
            transition: all 0.2s cubic-bezier(0.17, 0.67, 0.86, 0.57);
          }
        </style>

        <meta property="og:image" content="${frameContent.image}" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:post_url" content="${frameContent.postURL}" />
        <meta property="fc:frame:image" content="${frameContent.image}" />
        ${frameContent.buttons} ${frameContent.inputs}

        <title>Abstract Art</title>
      </head>
      <body>
        <!-- Container for p5.js canvas -->
        <script src="https://p5.gilbster.xyz/sketch.js"></script>
        <script src="https://p5.gilbster.xyz/sector.js"></script>
        <main></main>
      </body>
    </html>
  `;
  return markup;
};
