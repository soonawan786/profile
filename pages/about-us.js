// pages/about-us.js
import React from "react";
import { Container } from "react-bootstrap";
import MetaTags from "./components/MetaTags";

const AboutUs = () => {
  return (
    <>
      <MetaTags
        title="About Us"
        description="Discover the mission of Profiles - your go-to platform for information about famous personalities worldwide."
        keywords="About Us, profile, Famous Personalities, Biography, Celebrities"
      />
      <Container className="py-4">
        <h1>About Us</h1>

        <p>
          Welcome to Profiles, your ultimate destination for discovering
          information about famous personalities from around the world.
        </p>

        <p>
          Our mission is to provide a comprehensive platform where users can
          explore the biographies, achievements, and noteworthy information
          about their favorite celebrities, influencers, leaders, and other
          remarkable individuals.
        </p>

        <h2>What We Offer</h2>

        <p>
          Profiles features a vast collection of profiles, offering insights
          into the lives and accomplishments of renowned figures across various
          fields, including entertainment, sports, politics, music, and more.
          Whether you&apos;re interested in historical icons, contemporary
          stars, or emerging talents, we strive to cover a diverse range of
          personalities.
        </p>

        <h2>Why Choose Profiles?</h2>

        <p>
          At Profiles, we understand the curiosity and admiration people have
          for those who have made a significant impact on society. Our platform
          aims to satiate this curiosity by providing accurate and engaging
          content that showcases the journeys, contributions, and anecdotes of
          famous individuals.
        </p>

        <p>
          Explore our carefully curated profiles, stay updated on the latest
          news and achievements, and immerse yourself in the fascinating stories
          of those who have left an indelible mark on the world.
        </p>

        <h2>Contact Us</h2>

        <p>
          Have questions, suggestions, or feedback? We&apos;d love to hear from
          you! Reach out to us at{" "}
          <a href="mailto:info@vohtech.com">info@vohtech.com</a>.
        </p>
      </Container>
    </>
  );
};

export default AboutUs;
