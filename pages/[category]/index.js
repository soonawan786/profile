import React from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import TitleCard from "@/pages/components/TitleCard";

import CelebritiesList from "@/pages/components/profile/CelebritiesList";
import LatestProfiles from "@/pages/components/profile/LatestProfiles";
import CountriesList from "@/pages/components/profile/CountriesList";
import ProfileMetadata from "@/pages/components/profile/ProfileMetadata";

function ProfilesMain({
  cardHead,
  categoryName,
  profiles_cat_data,
  latest_profile_data,
  countries_data,
}) {
  return (
    <>
      {(!profiles_cat_data && profiles_cat_data) ||
      profiles_cat_data.length === 0 ? (
        <Container>
          <div>No Data Found</div>
        </Container>
      ) : (
        <>
          <ProfileMetadata
            titleData={`
            Famous Personalities of Pakistan & World - List of Actors, Anchor, Sports Persons | Infokidunya`}
            metaDescription={`
            Famous Personalities of Pakistan &amp; World - Find List of Popular Actors, Anchor, Sports Persons with their biographies. | Infokidunya`}
            keyWords={`Famous Personalities of Pakistan, Famous Personalities of World`}
          />

          <Container className="p-10">
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

                {/* <div className="mt-4">
                  <CountriesList countriesData={countries_data} />
                </div> */}
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
