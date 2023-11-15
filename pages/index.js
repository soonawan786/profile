import axios from "axios";
import TitleCard from "./components/TitleCard";
import CelebritiesCards from "./components/profile/CelebritiesCards";
import CelebritiesList from "./components/profile/CelebritiesList";
import LatestProfiles from "./components/profile/LatestProfiles";
import CountriesList from "./components/profile/CountriesList";
import ProfileMetadata from "./components/profile/ProfileMetadata";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomBreadcrumbs from "./components/custom-breadcrumbs";
import { useRouter } from "next/router";

function ProfilesMain({
  cardHead,
  profiles_cat_data,
  latest_profile_data,
  profile_feature_data,
  countries_data,
}) {
  const router = useRouter();
  const currentURL = router.asPath;
  const titleData = `Famous Personalities of Pakistan & World - List of Actors, Anchor, Sports Persons | Almuflihoon`;
  const metaDescription = `Famous Personalities of Pakistan &amp; World - Find List of Popular Actors, Anchor, Sports Persons with their biographies. | Almuflihoon`;

  const structuredData = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: `${titleData}`,
    description: `${metaDescription}`,
    url: `https://almuflihoon.com${currentURL}`,
    sameAs: [
      "https://www.facebook.com/Infokidunya.official",
      "https://www.instagram.com/infokidunya/",
    ],
  };
  return (
    <>
      <ProfileMetadata
        title={titleData}
        metaDescription={metaDescription}
        keyWords={`Famous Personalities of Pakistan, Famous Personalities of World`}
        structuredData={structuredData}
      />

      {!profiles_cat_data &&
      profiles_cat_data.length === 0 &&
      !latest_profile_data &&
      latest_profile_data.length === 0 &&
      !profile_feature_data &&
      profile_feature_data.length === 0 &&
      !profile_feature_data &&
      profile_feature_data.length === 0 ? (
        <Container>
          <div>No Data Found</div>
        </Container>
      ) : (
        <>
          <Container className="p-10">
            <Row className="mt-4 -mb-10">
              <Col xs={12} sm={12} md={12} lg={12}>
                <div className="alquran-title">
                  <h1>Profiles</h1>
                  <CustomBreadcrumbs
                    links={[
                      {
                        name: "Home",
                      },
                    ]}
                  />
                </div>
              </Col>
            </Row>
            <div className="flex flex-wrap flex-col md:flex-row -m-4">
              <div className="p-3 md:w-3/4  w-full">
                <div className="mt-1">
                  <TitleCard cardData={cardHead} />
                </div>
                <div className="mt-4">
                  <div className="my-2 text-3xl font-bold ">
                    Featured Celebrities
                  </div>
                  <CelebritiesCards
                    profile_featureData={profile_feature_data}
                  />
                </div>

                <div className="mt-4">
                  <div className="my-2 text-3xl font-bold ">
                    Latest Profiles
                  </div>
                  <LatestProfiles latest_profileData={latest_profile_data} />
                </div>

                <div className="mt-4">
                  <CountriesList countriesData={countries_data} />
                </div>
              </div>
              <div className="p-3 md:w-1/4 w-full">
                <div className="mt-1">
                  <CelebritiesList profilescatData={profiles_cat_data} />
                </div>
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
}

export default ProfilesMain;

export async function getServerSideProps() {
  try {
    const profiles_cat_res = await axios.get(
      `${process.env.API_URL}/directory/category-listing`
    );
    const profiles_cat_data = profiles_cat_res.data.data;

    const latest_profile_res = await axios.get(
      `${process.env.API_URL}/directory/latest-profile`
    );
    const latest_profile_data = latest_profile_res.data.data;

    const profile_feature_res = await axios.get(
      `${process.env.API_URL}/directory/profile-feature`
    );
    const profile_feature_data = profile_feature_res.data.data;

    const countries_res = await axios.get(
      `${process.env.API_URL}/get/countries`
    );
    const countries_data = countries_res.data;

    const cardHead = `
        <h1 style="font-size:24px; font-weight: bold">Profiles of Famous People From Around the World</h1>
        <div style="font-size:16px">View profiles of renowned anchors, sports persons, actors, and actresses. Fans often want to know about the key insights and information about personalities whom they love or admire. However, finding all of the information in one place is usually difficult. Look the profiles of celebrities from Pakistan and countries around the world With the help of this portal, you can get information about the date of birth, education, age, weight, height, and other details of your favorite celebrities.</div>
      `;

    return {
      props: {
        cardHead,
        profiles_cat_data,
        latest_profile_data,
        profile_feature_data,
        countries_data,
      },
    };
  } catch (error) {
    return {
      props: {
        cardHead: {},
        profiles_cat_data: [],
        latest_profile_data: [],
        profile_feature_data: [],
        countries_data: [],
      },
    };
  }
}
