import Image from "next/image";
import React from "react";
import { Table } from "react-bootstrap";
import ProfileDisclaimer from "./ProfileDisclaimer";
import AltImage from "@/public/assets/placeholder_infokidunya.webp";

import parse from "html-react-parser";
import { Alert } from "react-bootstrap";

const ProfileDetailComponent = ({ cardData, profileDetail }) => {
  const ProfileDetail = profileDetail ? profileDetail : "N/A";
  return (
    <>
      <div>
        <div className="max-w-full px-6 py-2 bg-white border border-gray-200 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-start items-center">
            <div className="w-4/5 flex justify-center">
              {cardData && Object.keys(cardData).length > 0 ? (
                <div dangerouslySetInnerHTML={{ __html: cardData }} />
              ) : (
                <>
                  {["warning"].map((variant) => (
                    <Alert key={variant} variant={variant} className="w-full">
                      No Data Found!
                    </Alert>
                  ))}
                </>
              )}
            </div>
            <div className="w-full md:w-1/5 flex flex-row justify-center items-center ">
              <Image
                src={
                  ProfileDetail.image_url ? ProfileDetail.image_url : AltImage
                }
                alt={
                  ProfileDetail && ProfileDetail.name
                    ? ProfileDetail.name
                    : "Profile Image"
                }
                className="w-72 h-72 md:mt-0 md:w-56 md:h-56 rounded object-cover"
                width={0}
                height={0}
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="my-3 text-2xl font-bold">Biography</div>

          <Table
            className="shadow-sm"
            striped
            bordered
            hover
            variant="light"
            responsive
          >
            <tbody>
              <tr>
                <td className="text-lg font-bold">Date of Birth</td>
                <td>
                  {ProfileDetail && ProfileDetail.dob === null
                    ? "(will update soon)"
                    : ProfileDetail.dob}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-bold">Age</td>
                <td>
                  {ProfileDetail && ProfileDetail.age === null
                    ? "(will update soon)"
                    : ProfileDetail.age}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-bold">Birth Place</td>
                <td>
                  {ProfileDetail && ProfileDetail.place_of_birth === null
                    ? "(will update soon)"
                    : ProfileDetail.place_of_birth}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-bold">Residence</td>
                <td>
                  {ProfileDetail && ProfileDetail.resident === null
                    ? "(will update soon)"
                    : ProfileDetail.resident}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-bold">Nationality</td>
                <td>
                  {ProfileDetail && ProfileDetail.nationality === null
                    ? "(will update soon)"
                    : ProfileDetail.nationality}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-bold">Country</td>
                <td>
                  {ProfileDetail && ProfileDetail.country === null
                    ? "(will update soon)"
                    : ProfileDetail.country.name}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-bold">Profession</td>
                <td>
                  {ProfileDetail && ProfileDetail.profession === null
                    ? "(will update soon)"
                    : ProfileDetail.profession}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-bold">Education</td>
                <td>
                  {ProfileDetail && ProfileDetail.education === null
                    ? "(will update soon)"
                    : ProfileDetail.education}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-bold">Father</td>
                <td>
                  {ProfileDetail && ProfileDetail.father_name === null
                    ? "(will update soon)"
                    : ProfileDetail.father_name}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-bold">Mother</td>
                <td>
                  {ProfileDetail && ProfileDetail.mother_name === null
                    ? "(will update soon)"
                    : ProfileDetail.mother_name}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-bold">Siblings</td>
                <td>
                  {ProfileDetail && ProfileDetail.siblings === null
                    ? "(will update soon)"
                    : ProfileDetail.siblings}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-bold">Religion</td>
                <td>
                  {ProfileDetail && ProfileDetail.religion === null
                    ? "(will update soon)"
                    : ProfileDetail.religion}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-bold">Spouse</td>
                <td>
                  {ProfileDetail && ProfileDetail.spouse === null
                    ? "(will update soon)"
                    : ProfileDetail.spouse}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-bold">Horoscope</td>
                <td>
                  {ProfileDetail && ProfileDetail.horoscope === null
                    ? "(will update soon)"
                    : ProfileDetail.horoscope}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-bold">Weight</td>
                <td>
                  {ProfileDetail && ProfileDetail.weight === null
                    ? "(will update soon)"
                    : ProfileDetail.weight}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-bold">Height</td>
                <td>
                  {ProfileDetail && ProfileDetail.height === null
                    ? "(will update soon)"
                    : ProfileDetail.height}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-bold">Net Worth</td>
                <td>
                  {ProfileDetail && ProfileDetail.net_worth === null
                    ? "(will update soon)"
                    : ProfileDetail.net_worth}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-bold">Category</td>
                <td>
                  {ProfileDetail &&
                  ProfileDetail.category &&
                  ProfileDetail.category.name === null
                    ? "(will update soon)"
                    : ProfileDetail.category && ProfileDetail.category.name}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="mt-2">
          <div className="my-3 text-2xl font-bold">
            Personal Profile About{" "}
            {ProfileDetail && ProfileDetail.name === null
              ? "(will update soon)"
              : ProfileDetail.name}
          </div>
        </div>

        <div className="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          {ProfileDetail && ProfileDetail.long_description === null
            ? "(will update soon)"
            : parse(
                ProfileDetail.long_description || "<p>(will update soon)</p>"
              )}
        </div>

        <div className="mt-4">
          <ProfileDisclaimer />
        </div>
      </div>
    </>
  );
};

export default ProfileDetailComponent;
