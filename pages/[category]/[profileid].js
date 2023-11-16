import React from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import ProfileTitleCard from "@/pages/components/profile/ProfileDetailComponent";
import YouMayAlsoLike from "@/pages/components/profile/YouMayAlsoLike";
import ProfileMetadata from "@/pages/components/profile/ProfileMetadata";
import { Alert } from "react-bootstrap";

function ProfilesMain({
  cardHead,
  profiles_cat_data,
  profile_feature_data,
  profile_detail,
}) {
  return (
    <>
      {!profile_detail ||
      (!profiles_cat_data && profiles_cat_data) ||
      profiles_cat_data.length === 0 ? (
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
          <ProfileMetadata
            titleData={`
            ${
              profile_detail && profile_detail.meta_title === null
                ? "(will update soon)"
                : profile_detail.meta_title
            } | Infokidunya`}
            metaDescription={`
            ${
              profile_detail && profile_detail.meta_description === null
                ? "(will update soon)"
                : profile_detail.meta_description
            } | Infokidunya`}
            keyWords={
              profile_detail && profile_detail.keywords === null
                ? "(will update soon)"
                : profile_detail.keywords
            }
          />

          <Container className="p-10">
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
