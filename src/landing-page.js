import fonts from "./fonts";

export default async (frameContent) => {
  const fontFile = fonts[0].file; // TODO: we'll have more than 1 font at some point
  const fontName = fonts[0].name;

  const html = String.raw;
  const markup = html`
    <!DOCTYPE html>
    <html>
      <head>
        <script src="p5.js"></script>

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
            padding: 2rem;
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
        </style>

        <meta property="og:image" content="${frameContent.image}" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:post_url" content="${frameContent.postURL}" />
        <meta property="fc:frame:image" content="${frameContent.image}" />
        ${frameContent.buttons} ${frameContent.inputs}

        <title>Abstract Art</title>
      </head>
      <body>
        <script src="sketch.js"></script>
        <script src="sector.js"></script>
        <h1>hello world</h1>
        <main>
          <canvas
            id="defaultCanvas0"
            class="p5Canvas"
            width="1280"
            height="553"
            style="width: 1280px; height: 553px;"
          ></canvas>
        </main>
        <figure>
          <img width="600" src="${frameContent.image}" />
        </figure>
      </body>
    </html>
  `;
  return markup;
};
