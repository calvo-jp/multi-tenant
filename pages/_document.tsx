import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Source+Sans+Pro:wght@400;600;700&family=Source+Serif+Pro:wght@400;600;700;900&display=swap"
        />
      </Head>

      <body className="min-h-screen scroll-smooth bg-white font-sans text-neutral-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
