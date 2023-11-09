import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export default function ProfileMetadata({
  titleData,
  metaDescription,
  keyWords,
}) {
  const router = useRouter();
  const currentURL = router.asPath;
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: `${titleData}`,
    description: `${metaDescription}`,
    url: `https://infokidunya.com${currentURL}`,
  };
  return (
    <Head>
      <title>{titleData}</title>
      <meta name="title" content={titleData} />
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 day" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="googlebot" content="index, follow" />
      <meta name="robots" content="index, follow" />
      <meta
        name="keywords"
        content={
          "Info Ki Dunya, " +
          "InfoKiDunya, " +
          "Bollywood Actors, " +
          "Hollywood Actors, " +
          "Pakistani Actors, " +
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
          keyWords
        }
      />
      <meta property="og:site_name" content="InfoKiDunya" />
      <meta
        property="og:url"
        content={"https://infokidunya.com" + currentURL}
      />
      <link rel="canonical" href={"https://infokidunya.com" + currentURL} />
      <meta
        property="og:image"
        content={`https://pub-7564e1ce46b04eb49d76ed31d1ab3299.r2.dev/uploads/ogImage.jpg`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={titleData} />
      <meta property="og:description" content={metaDescription} />
      <meta name="twitter:site" content="https://infokidunya.com" />
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
}
