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

function ProfilesMain({
  cardHead,
  profiles_cat_data,
  profile_feature_data,
  profile_detail,
}) {
  const router = useRouter();
  const { category, profileid } = router.query;
  const categoryTitle = category.split("=")[0];
  const categoryId = category.split("=")[1];
  const profileName = profileid.split("=")[0];
  return (
    <>
      <ProfileMetadata
        titleData={`
            ${
              profile_detail && profile_detail.meta_title === null
                ? profileName
                : profile_detail.meta_title
            } | Almuflihoon`}
        metaDescription={`
            ${
              profile_detail && profile_detail.meta_description === null
                ? `${profileName} is a Famous person. Check out this page to learn more about ${profileName}&#39;s career, age, family, pics biography &amp; more.
                `
                : profile_detail.meta_description
            } | Almuflihoon`}
        keyWords={
          profile_detail && profile_detail.keywords === null
            ? "(will update soon)"
            : profile_detail.keywords
        }
      />
      {!profile_detail ||
      (!profiles_cat_data && profiles_cat_data) ||
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
    const profiles_cat_res = await axios.get(
      `${process.env.API_URL}/directory/category-listing`
    );
    const profiles_cat_data = profiles_cat_res.data.data;

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
        profiles_cat_data,
        profile_feature_data,
        profile_detail,
      },
    };
  } catch (error) {
    return {
      props: {
        cardHead: {},
        profiles_cat_data: {},
        profile_feature_data: {},
        profile_detail: {},
      },
    };
  }
}
