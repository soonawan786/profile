import Link from "next/link";
import React from "react";
import WorldFlag from "react-world-flags";
import { Alert } from "react-bootstrap";

export default function CountriesList({ countriesData }) {
  const CountriesList = countriesData;
  return (
    <>
      <div>
        <div className="h-auto md:h-auto px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-md">
          <div className="my-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-3">
            {CountriesList && CountriesList.length > 0 ? (
              CountriesList.map((country, i) => {
                return (
                  <Link
                    key={i}
                    className="country-link"
                    href={`/profiles/country/${encodeURIComponent(
                      country.name.toLowerCase()
                    )}=${country.id}`}
                  >
                    <div className="flex justify-start items-center">
                      <WorldFlag className="flags" code={country.iso3} />{" "}
                      <span className="ml-3">{country.name}</span>
                    </div>
                  </Link>
                );
              })
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
        </div>
      </div>
    </>
  );
}
