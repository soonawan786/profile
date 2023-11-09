import add_ellipsis from "@/utils/ellipse";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeCategoryNews = ({ newsData }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {newsData &&
          newsData.slice(0, 6).map((item) => (
            <Link
              href={`/blogs-&-articles/${
                item.category
                  ? item.category?.name.toLowerCase() + `=` + item.category?.id
                  : "category"
              }/${
                item.middle_category
                  ? item.middle_category?.name.toLowerCase() +
                    `=` +
                    item.middle_category?.id
                  : "middle_category"
              }/${
                item.sub_category
                  ? item.sub_category?.name.toLowerCase() +
                    `=` +
                    item.sub_category?.id
                  : "sub_category"
              }/${item.slug_title}=${item.id}`}
              key={item.id}
              className="no-underline text-black max-w-full p-2 bg-white border border-gray-200 rounded-lg shadow-md"
            >
              <div className="d-flex gap-2 hover:text-[#00899d] text-xs leading-normal">
                <Image
                  alt="image description"
                  className="h-14 w-24 object-cover object-center rounded "
                  src={item.featured_image_url}
                  loading="lazy"
                  width={0}
                  height={0}
                  unoptimized
                />
                <div>{add_ellipsis(item.title, 60)}</div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default HomeCategoryNews;
