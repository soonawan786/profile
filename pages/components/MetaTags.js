// components/MetaTags.js
import Head from "next/head";
import { useRouter } from "next/router";
import { titleCase } from "title-case";

const MetaTags = ({ title, description, keywords }) => {
  const defaultTitle = "Almuflihoon"; // Replace with your default title
  const router = useRouter();
  const currentURL = router.asPath;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${titleCase(title ? `${title} | ${defaultTitle}` : defaultTitle)}`,
    description: `${description}`,
    url: `https://almuflihoon.com${currentURL}`,
    sameAs: [
      "https://www.facebook.com/Infokidunya.official",
      "https://www.instagram.com/infokidunya/",
      // Add more social media profiles
    ],
  };
  return (
    <Head>
      <title>
        {titleCase(title ? `${title} | ${defaultTitle}` : defaultTitle)}
      </title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 day" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="googlebot" content="index, follow" />
      <meta name="robots" content="index, follow" />

      <meta
        name="keywords"
        content={
          "almuflihoon, " +
          "al muflihoon, " +
          "al-muflihoon, " +
          "almuflihun, " +
          "almuflihoon website, " +
          "Bollywood Actors, " +
          "Hollywood Actors, " +
          "Pakistani Actors, " +
          "earn money online, " +
          "TV Serial Actors, " +
          "Film Industry Stars, " +
          "Celebrity Performers, " +
          "News Anchors, " +
          "TV Show Hosts, " +
          "Event Hosts, " +
          "Talk Show Anchors, " +
          "Journalism Personalities, " +
          "Broadcasting Professionals, " +
          "Celebrities, " +
          "Pop Icons, " +
          "Sports Stars, " +
          "Public Figures, " +
          "Social Media Influencers, " +
          "Music Legends, " +
          "Film Celebrities, " +
          "Music Artists, " +
          "Comedians, " +
          "Reality TV Stars, " +
          "YouTube Personalities, " +
          "Award-Winning Performers, " +
          "Historical Icons, " +
          "World Leaders, " +
          "Cultural Icons, " +
          "Pioneers and Innovators, " +
          "Revolutionaries, " +
          "Great Thinkers, " +
          "Regional Celebrities, " +
          "Local Heroes, " +
          "Community Leaders, " +
          "Hometown Stars, " +
          "Notable Residents, " +
          "Motivational Speakers, " +
          "Philanthropists, " +
          "Humanitarians, " +
          "Activists, " +
          "Role Models, " +
          "Inspirational Figures, " +
          keywords
        }
      />
      <meta property="og:site_name" content="almuflihoon" />
      <meta
        property="og:url"
        content={"https://almuflihoon.com" + currentURL}
      />
      <link rel="canonical" href={"https://almuflihoon.com" + currentURL} />
      <meta
        property="og:image"
        content={`https://pub-7564e1ce46b04eb49d76ed31d1ab3299.r2.dev/uploads/ogImage.jpg`}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={titleCase(title ? `${title} | ${defaultTitle}` : defaultTitle)}
      />
      <meta property="og:description" content={description} />
      <meta name="twitter:site" content="https://almuflihoon.com" />
      <meta
        name="twitter:image"
        content={`https://pub-7564e1ce46b04eb49d76ed31d1ab3299.r2.dev/uploads/ogImage.jpg`}
      />
      <meta name="twitter:creator" content="Muhammad Kamran Yousaf" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  );
};

export default MetaTags;
