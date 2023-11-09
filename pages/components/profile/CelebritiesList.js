import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function CelebritiesList({ profilescatData }) {
  const categories = profilescatData;
  const [visibleCategories, setvisibleCategories] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");
  const increment = 10;
  const totalCategories = categories?.length || 0;
  const filteredCategories = categories
    ? categories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const showMoreCategories = () => {
    const remainingCategories = filteredCategories.length - visibleCategories;
    const categoriesToShow = Math.min(increment, remainingCategories);
    setvisibleCategories(
      (prevvisibleCategories) => prevvisibleCategories + categoriesToShow
    );
  };

  const showLessCategories = () => {
    setvisibleCategories(8);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    setvisibleCategories(8);
  }, [searchQuery]);

  return (
    <>
      <div className="h-auto md:h-auto px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-md">
        <h3 className="px-2 text-2xl font-bold tracking-tight text-gray-900">
          Pakistani Celebrities
        </h3>

        <input
          type="text"
          placeholder="Search Celebrities"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="mb-1 px-2 py-1 w-full border border-gray-300 rounded focus:outline-[#00899d] "
        />
        <div className="flex flex-col">
          {filteredCategories.slice(0, visibleCategories).map((category) => (
            <Link
              key={category.id}
              className=" no-underline font-normal text-gray-700 px-2 p-2 hover:text-white hover:bg-gray-600 rounded-sm transition ease-in-out cursor-pointer duration-200"
              href={`/${category.name.toLowerCase().replace(/ /g, "-")}=${
                category.id
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>

        {visibleCategories < filteredCategories.length && (
          <button
            onClick={showMoreCategories}
            className="d-flex text-center justify-center w-full mt-3 hover:bg-gray-100 border border-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <span>View More</span>
          </button>
        )}
        {visibleCategories === filteredCategories.length &&
          visibleCategories > 8 && (
            <button
              onClick={showLessCategories}
              className="d-flex text-center justify-center w-full mt-3 hover:bg-gray-100 border border-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <span>View Less</span>
            </button>
          )}
      </div>
    </>
  );
}
