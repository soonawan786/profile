import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import TitleCard from "@/pages/components/TitleCard";

import CelebritiesList from "@/pages/components/profile/CelebritiesList";
import LatestProfiles from "@/pages/components/profile/LatestProfiles";
import CountriesList from "@/pages/components/profile/CountriesList";
import ProfileMetadata from "@/pages/components/profile/ProfileMetadata";
import { useRouter } from "next/router";
import CustomBreadcrumbs from "@/pages/components/custom-breadcrumbs/CustomBreadcrumbs";
import { PATH_INFOKIDUNYA } from "@/utils/paths";
import { titleCase } from "title-case";
import { Alert } from "react-bootstrap";

const ProfileByCountry = ({
  cardHead,
  countryName,
  profiles_cat_data,
  latest_profile_data,
  countries_data,
}) => {
  const router = useRouter();
  const currentURL = router.asPath;

  const titleData = `${titleCase(countryName)} Celebrities | Almuflihoon`;
  const metaDescription = `Explore profiles of famous ${titleCase(
    countryName
  )} celebrities. Learn about their careers, ages, families, and more. Almuflihoon provides detailed information about ${titleCase(
    countryName
  )} stars.`;

  const structuredData = {
    "@context": "http://schema.org",
    "@type": "WebPage",
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
      !countries_data &&
      countries_data.length === 0 ? (
        <Container>
          <>
            {["warning"].map((variant) => (
              <Alert key={variant} variant={variant} className="w-full">
                No Data Found!
              </Alert>
            ))}
          </>
        </Container>
      ) : (
        <>
          <Container className="p-10">
            <Row className="mt-4 -mb-10">
              <Col xs={12} sm={12} md={12} lg={12}>
                <div className="alquran-title">
                  <h1>{titleCase(countryName)} Profiles</h1>
                  <CustomBreadcrumbs
                    links={[
                      {
                        name: "Home",
                        href: PATH_INFOKIDUNYA.root,
                      },
                      {
                        name: titleCase(countryName),
                      },
                    ]}
                  />
                </div>
              </Col>
            </Row>
            <div className="flex flex-wrap -m-4">
              <div className="p-3 lg:w-3/4  w-full">
                <div className="mt-4">
                  <TitleCard cardData={cardHead} />
                </div>
                <div className="mt-4">
                  <div className="my-4 text-3xl font-bold ">
                    Pakistan {countryName} Profiles
                  </div>
                  <LatestProfiles latest_profileData={latest_profile_data} />
                </div>
              </div>
              <div className="p-3 lg:w-1/4 w-full">
                <div className="mt-4">
                  <CelebritiesList profilescatData={profiles_cat_data} />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <CountriesList countriesData={countries_data} />
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default ProfileByCountry;

export async function getServerSideProps({ params }) {
  const { country } = params;
  const countryId = country.split("=")[1];

  const countryName = country.split("=")[0];
  try {
    const profiles_cat_res = await axios.get(
      `${process.env.API_URL}/directory/category-listing`
    );
    const profiles_cat_data = profiles_cat_res.data.data;

    const latest_profile_res = await axios.get(
      `${process.env.API_URL}/directory/latest-profile?country_id=${countryId}`
    );
    const latest_profile_data = latest_profile_res.data.data;

    const countries_res = await axios.get(
      `${process.env.API_URL}/get/countries`
    );
    const countries_data = countries_res.data;

    const cardHead = `
    <h1 style="font-size:24px; font-weight: bold">${titleCase(
      countryName
    )} Celebrities </h1>
    <div style="font-size:16px">Explore profiles of famous ${titleCase(
      countryName
    )} celebrities. Learn about their careers, ages, families, and more. Almuflihoon provides detailed information about ${titleCase(
      countryName
    )} stars.</div>`;

    return {
      props: {
        cardHead,
        countryName,
        profiles_cat_data,
        latest_profile_data,
        countries_data,
      },
    };
  } catch (error) {
    return {
      props: {
        cardHead: {},
        countryName: {},
        profiles_cat_data: [],
        latest_profile_data: [],
        countries_data: [],
      },
    };
  }
}
