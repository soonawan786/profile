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

function ProfilesMain({
  cardHead,
  categoryName,
  profiles_cat_data,
  latest_profile_data,
  countries_data,
}) {
  const router = useRouter();
  const currentURL = router.asPath;
  const { category } = router.query;
  const categoryTitle = category.split("=")[0];

  const titleData = `${titleCase(categoryTitle)} | Almuflihoon`;
  const metaDescription = `Explore the groundbreaking innovations and impactful journeys of ${categoryTitle} at Almuflihoon.`;

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

  console.log("profiles_cat_data::", profiles_cat_data);

  return (
    <>
      <ProfileMetadata
        title={titleData}
        metaDescription={metaDescription}
        keyWords={`Famous Personalities of Pakistan, Famous Personalities of World`}
        structuredData={structuredData}
      />

      {(!profiles_cat_data && profiles_cat_data) ||
      profiles_cat_data.length === 0 ? (
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
                        href: PATH_INFOKIDUNYA.root,
                      },
                      {
                        name: titleCase(categoryTitle),
                      },
                    ]}
                  />
                </div>
              </Col>
            </Row>
            <div className="flex flex-wrap -m-4">
              <div className="p-3 lg:w-3/4 sm:w-1/2 w-full">
                <div className="mt-4">
                  <TitleCard cardData={cardHead} />
                </div>
                <div className="mt-4">
                  <div className="my-4 text-3xl font-bold ">
                    Pakistan {categoryName} Profiles
                  </div>
                  <LatestProfiles latest_profileData={latest_profile_data} />
                </div>

                <div className="mt-4">
                  <CountriesList countriesData={countries_data} />
                </div>
              </div>
              <div className="p-3 lg:w-1/4 sm:w-1/2 w-full">
                <div className="mt-4">
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

export async function getServerSideProps({ params }) {
  const { category } = params;
  const categoryNameUrl = category.split("=")[0];
  const categoryName = categoryNameUrl
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const categoryId = category.split("=")[1];
  try {
    const profiles_cat_res = await axios.get(
      `${process.env.API_URL}/directory/category-listing`
    );
    const profiles_cat_data = profiles_cat_res.data.data;

    const latest_profile_res = await axios.get(
      `${process.env.API_URL}/directory/profile-by-category?category_id=${categoryId}`
    );
    const latest_profile_data = latest_profile_res.data.data;

    const countries_res = await axios.get(
      `${process.env.API_URL}/get/countries`
    );
    const countries_data = countries_res.data;

    const cardHead = `
        <h1 style="font-size:24px; font-weight: bold">Pakistan ${categoryName}</h1>
        <div style="font-size:16px">View profiles of ${categoryName} from Pakistan and other countries. Famous ${categoryName} have a large fan following. However, their fans are always curious about their lifestyle and want to get all possible information about them. At this portal, you can view all key details about your favorite stars. You can view details about their date of birth, age and education.</div>
      `;

    return {
      props: {
        cardHead,
        categoryName,
        profiles_cat_data,
        latest_profile_data,
        countries_data,
      },
    };
  } catch (error) {
    return {
      props: {
        cardHead: {},
        categoryName: {},
        profiles_cat_data: {},
        latest_profile_data: {},
        countries_data: {},
      },
    };
  }
}
