import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CelebritiesCards({ profile_featureData }) {
  const Profile_Feature = profile_featureData;

  return (
    <>
      <div>
        <div className="flex flex-wrap justify-center items-center -m-2">
          {Profile_Feature &&
            Profile_Feature.slice(0, 4).map((profile, i) => {
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
      </div>
    </>
  );
}
