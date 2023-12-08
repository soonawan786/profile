import "@/styles/globals.css";
import "@/styles/Main.css";
import "@/styles/Headerstyle.css";
import "@/styles/Header.css";
import "@/styles/Footer.css";
import "@/styles/islamWorld.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { headermenuItems } from "@/utils/menuItems/MenuItems";
import HeaderNavbar from "./components/header/HeaderNavbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; // Optional for global styles
import theme from "../themes/theme"; // Adjust the import path accordingly

export default function App({ Component, pageProps }) {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "Almuflihoon",
    alternateName: "amh",
    logo: "https://pub-7564e1ce46b04eb49d76ed31d1ab3299.r2.dev/uploads/Almuflihoon.webp",
    description:
      "Almuflihoon - Explore inspiring biographies of influential figures at Almuflihoon, your go-to source for captivating stories that have shaped our world.",
    url: "https://almuflihoon.com",
    founder: "Muhammad Kamran Yousaf",
    funder: "VOH Technologies",
    numberOfEmployees: "50-100",
    parentOrganization:
      "VOH Technologies (SMC-Private) Limited & VOH Technologies LLC",
    slogan: "A World Of Information",
    sameAs: [
      "https://www.facebook.com/Infokidunya.official",
      "https://www.instagram.com/infokidunya/",
      // Add more social media profiles
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@almuflihoon.com",
      contactType: "Customer support",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />{" "}
        <Head>
          <meta
            itemProp="image"
            content={`https://pub-7564e1ce46b04eb49d76ed31d1ab3299.r2.dev/uploads/ogImage.jpg`}
          />
          <meta itemProp="publisher" content="almuflihoon" />
          <meta itemProp="editor" content="almuflihoon" />
          <meta itemProp="sourceOrganization" content="VOH Technologies LLC" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />

          <script
            id="script1"
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KLYS4C3EDK');
      `,
            }}
          ></script>
          <script
            id="script2"
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-KLYS4C3EDK"
          ></script>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1558863166168778"
            crossorigin="anonymous"
          ></script>
        </Head>
        <div className={`bg-[#f8f8fa]`}>
          <HeaderNavbar menuItem={headermenuItems} />

          <Component {...pageProps} />

          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
