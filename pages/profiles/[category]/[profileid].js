import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import ProfileTitleCard from "@/pages/components/profile/ProfileDetailComponent";
import YouMayAlsoLike from "@/pages/components/profile/YouMayAlsoLike";
import ProfileMetadata from "@/pages/components/profile/ProfileMetadata";
import { useRouter } from "next/router";
import CustomBreadcrumbs from "@/pages/components/custom-breadcrumbs/CustomBreadcrumbs";
import { PATH_INFOKIDUNYA } from "@/utils/paths";
import { titleCase } from "title-case";
import { Alert } from "react-bootstrap";

function ProfilesMain({ cardHead, profile_feature_data, profile_detail }) {
  const router = useRouter();
  const currentURL = router.asPath;
  const { category, profileid } = router.query;
  const categoryTitle = category.split("=")[0];
  const categoryId = category.split("=")[1];
  const profileName = profileid.split("=")[0];

  const titleData = `
  ${titleCase(
    `${(profile_detail && profile_detail.meta_title) || profileName}`
  )} | Almuflihoon`;
  const metaDescription = `
  ${
    (profile_detail && profile_detail.meta_description) ||
    `${profileName} is a Famous person. Check out this page to learn more about ${profileName}&#39;s career, age, family, pics biography &amp; more.
      `
  } | Almuflihoon`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${(profile_detail && profile_detail.name) || profileName}`,
    birthDate: `${
      (profile_detail && profile_detail.dob) || "(will update soon)"
    }`,
    birthPlace: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: `${
          (profile_detail && profile_detail.place_of_birth) ||
          "(will update soon)"
        }`,
        addressCountry: `${
          (profile_detail && profile_detail.nationality) || "(will update soon)"
        }`,
      },
    },
    nationality:
      (profile_detail && profile_detail.nationality) || "(will update soon)",
    description:
      (profile_detail && profile_detail.profession) || "(will update soon)",

    height: (profile_detail && profile_detail.height) || "(will update soon)",
    weight: (profile_detail && profile_detail.weight) || "(will update soon)",
    knowsAbout:
      (profile_detail && profile_detail.profession) || "(will update soon)", // You can customize this based on available data
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Horoscope",
        value:
          (profile_detail && profile_detail.horoscope) || "(will update soon)",
      },
    ],
    url: `https://almuflihoon.com${currentURL}`,
    sameAs: [
      "https://www.facebook.com/Infokidunya.official",
      "https://www.instagram.com/infokidunya/",
    ],
    image: (profile_detail && profile_detail.image_url) || null,
  };
  return (
    <>
      <ProfileMetadata
        title={titleData}
        metaDescription={metaDescription}
        keyWords={
          profile_detail && profile_detail.keywords === null
            ? "(will update soon)"
            : profile_detail.keywords
        }
        structuredData={structuredData}
      />
      {!profile_detail &&
      !profile_feature_data &&
      profile_feature_data.length === 0 ? (
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
                  <h1>{titleCase(profileName)}</h1>
                  <CustomBreadcrumbs
                    links={[
                      {
                        name: "Home",
                        href: PATH_INFOKIDUNYA.root,
                      },
                      {
                        name: titleCase(categoryTitle),
                        href: `/profiles/${categoryTitle}=${categoryId}`,
                      },
                      {
                        name: titleCase(profileName),
                      },
                    ]}
                  />
                </div>
              </Col>
            </Row>
            <div className="flex flex-wrap -m-4">
              <div className="mt-4">
                <ProfileTitleCard
                  cardData={cardHead}
                  profileDetail={profile_detail}
                />
              </div>

              <div>
                <div className="my-3 text-2xl font-bold ">
                  You May Also Like
                </div>
                <YouMayAlsoLike profile_featureData={profile_feature_data} />
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
  const { profileid } = params;
  const profileId = profileid.split("=")[1];
  try {
    const profile_feature_res = await axios.get(
      `${process.env.API_URL}/directory/latest-profile`
    );
    const profile_feature_data = profile_feature_res.data.data;

    const profile_detail_res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/directory/profile-detail?id=${profileId}`
    );
    const profile_detail = profile_detail_res.data.data;

    const cardHead = `
        <h1 style="font-size:24px; font-weight: bold">${profile_detail.name}</h1>
        <div style="font-size:16px">${profile_detail.short_description}</div>
      `;

    return {
      props: {
        cardHead,
        profile_feature_data,
        profile_detail,
      },
    };
  } catch (error) {
    return {
      props: {
        cardHead: {},
        profile_feature_data: {},
        profile_detail: {},
      },
    };
  }
}
