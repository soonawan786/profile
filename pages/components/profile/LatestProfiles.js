import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AltImage from "@/public/assets/placeholder_infokidunya.webp";

export default function LatestProfiles({ latest_profileData }) {
  const Latest_Profile = latest_profileData ? latest_profileData : "N/A";

  const [displayedCardCount, setDisplayedCardCount] = useState(8);
  const loadMoreCards = () => {
    setDisplayedCardCount(displayedCardCount + 8); // Increase by 3 cards
  };
  return (
    <>
      <div>
        <div className="flex flex-wrap justify-center items-center -m-2">
          {Array.isArray(Latest_Profile) &&
            Latest_Profile.slice(0, displayedCardCount).map((profile, i) => {
              return (
                <Link
                  href={`/${profile.category.name
                    .toLowerCase()
                    .replace(/ /g, "-")}=${profile.category.id}/${profile.name
                    .toLowerCase()
                    .replace(/ /g, "-")}=${profile.id}`}
                  className="no-underline xl:w-1/4 md:w-1/2 py-2 px-2"
                  key={i}
                >
                  <div className="bg-gray-100 rounded-lg transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out">
                    <Image
                      className="h-56 rounded w-full object-cover object-center mb-2"
                      src={profile.image_url ? profile.image_url : AltImage}
                      alt={profile.name ? profile.name : "Profile Image"}
                      loading="lazy"
                      width={0}
                      height={0}
                      unoptimized
                    />
                    <div className="px-4 py-2">
                      <h2 className="text-base text-center text-gray-900 title-font font-bold mb-2">
                        {profile.name ? profile.name : "N/A"}
                      </h2>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>

        {displayedCardCount < Latest_Profile.length && (
          <button
            className="d-flex text-center justify-center w-full mt-3 hover:bg-gray-100 border border-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={loadMoreCards}
          >
            <span>More View</span>
          </button>
        )}
      </div>
    </>
  );
}
