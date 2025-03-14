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
import { Alert } from "react-bootstrap";

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
              <div className="p-3 lg:w-3/4  w-full">
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
              </div>
              <div className="p-3 lg:w-1/4 w-full">
                <div className="mt-1">
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
}

export default ProfilesMain;

export async function getServerSideProps() {
  try {
    //profile indexing
    const latest_profile_res = await axios.get(
      `${process.env.API_URL}/directory/latest-profile`
    );
    const latest_profile_data = latest_profile_res.data.data;

    if (latest_profile_data && latest_profile_data.length > 0) {
      // Create an array of URLs
      const allProfileURLs = latest_profile_data.map((post) => {
        return `https://almuflihoon.com/profiles/${encodeURIComponent(
          post.category.name.toLowerCase()
        )}=${post.category.id}/${encodeURIComponent(post.name.toLowerCase())}=${
          post.id
        }`;
      });

      // Make a request to your get-indexing API endpoint
      const getIndexingResponse = await axios.post(
        `${process.env.BASE_URL}/api/get-indexing`,
        { urls: allProfileURLs }
      );

      const indexingResults = getIndexingResponse.data;

      // Assuming 'indexingResults' is the array of indexing results
      const failedIndexingResults = indexingResults.filter(
        (result) => result.response.error
      );

      // Extracting URLs from failed indexing results
      const failedURLs = failedIndexingResults.map((result) => result.url);

      console.log("Failed URLs::", failedURLs, failedURLs.length);
      if (failedURLs && failedURLs.length > 0) {
        const postResponse = await fetch(
          `${process.env.BASE_URL}/api/post-indexing`,
          {
            method: "POST", // Corrected method name
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              urls: failedURLs,
            }),
          }
        );

        const postIndexingResponse = await postResponse.json();

        console.log("postIndexingResponse::", postIndexingResponse);
      }
    }

    const profiles_cat_res = await axios.get(
      `${process.env.API_URL}/directory/category-listing`
    );
    const profiles_cat_data = profiles_cat_res.data.data;

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
    console.log("error ::", error);
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
