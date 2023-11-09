import React from "react";
import Image from "next/image";
import Link from "next/link";
import PlaceholderImage from "@/public/assets/placeholder_infokidunya.webp";
import add_ellipsis from "@/utils/ellipse";
import { useState } from "react";
import { useEffect } from "react";

export default function LatestNewsComponent({ latestblogsData }) {
  const LatestBlogData = latestblogsData ? latestblogsData.data : "N/A";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="parent-container">
        <div className="mt-2 grid grid-cols-1 xl:grid-cols-2 gap-1">
          <div className="image-container">
            <Link
              href={`/blogs-&-articles/${
                LatestBlogData[0].category
                  ? LatestBlogData[0].category?.name.toLowerCase() +
                    `=` +
                    LatestBlogData[0].category?.id
                  : "category"
              }/${
                LatestBlogData[0].middle_category
                  ? LatestBlogData[0].middle_category?.name.toLowerCase() +
                    `=` +
                    LatestBlogData[0].middle_category?.id
                  : "middle_category"
              }/${
                LatestBlogData[0].sub_category
                  ? LatestBlogData[0].sub_category?.name.toLowerCase() +
                    `=` +
                    LatestBlogData[0].sub_category?.id
                  : "sub_category"
              }/${LatestBlogData[0].slug_title}=${LatestBlogData[0].id}`}
              className="no-underline flex flex-wrap w-full h-96 xl:h-auto"
            >
              <Image
                alt={LatestBlogData ? LatestBlogData[0].title : "N/A"}
                className="w-full  h-full block  absolute "
                src={
                  LatestBlogData
                    ? LatestBlogData[0].featured_image_url
                    : PlaceholderImage
                }
                loading="lazy"
                width={0}
                height={0}
                unoptimized
              />
              <div className="gradient-overlay"></div>
              <div className="text-overlay px-4 flex flex-col justify-end items-start">
                <h2 className="text-2xl title-font mb-2 text-white font-bold">
                  {LatestBlogData ? LatestBlogData[0].title : "N/A"}
                </h2>
                <p className="text-[#a0a0a0] ">
                  {LatestBlogData ? LatestBlogData[0].sub_title : "N/A"}
                </p>
                <p className="text-[#a0a0a0] border-l-2 border-red-400 pl-2 text-sm">
                  {LatestBlogData[0]?.category?.name || "N/A"}
                </p>
              </div>
            </Link>
          </div>

          {!isMobile ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {LatestBlogData && Array.isArray(LatestBlogData) ? (
                LatestBlogData.slice(1, 5).map((news, i) => {
                  return (
                    <div className="image-container" key={i}>
                      <Link
                        href={`/blogs-&-articles/${
                          news.category
                            ? news.category?.name.toLowerCase() +
                              `=` +
                              news.category?.id
                            : "category"
                        }/${
                          news.middle_category
                            ? news.middle_category?.name.toLowerCase() +
                              `=` +
                              news.middle_category?.id
                            : "middle_category"
                        }/${
                          news.sub_category
                            ? news.sub_category?.name.toLowerCase() +
                              `=` +
                              news.sub_category?.id
                            : "sub_category"
                        }/${news.slug_title}=${news.id}`}
                        className="no-underline flex flex-wrap w-full h-44"
                      >
                        <Image
                          alt={news ? news.title : "N/A"}
                          className="w-full  h-full block  absolute "
                          src={
                            news ? news.featured_image_url : PlaceholderImage
                          }
                          width={0}
                          height={0}
                          unoptimized
                        />
                        <div className="gradient-overlay"></div>
                        <div className="text-overlay px-3 flex flex-col justify-end items-start">
                          <h2 className="text-lg title-font mb-2 text-white font-bold">
                            {news ? add_ellipsis(news.title, 40) : "N/A"}
                          </h2>

                          <p className="text-[#a0a0a0] border-l-2 border-red-400 pl-2 text-sm">
                            {news?.category?.name || "N/A"}
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                })
              ) : (
                <p>No latest blogs and articles data available.</p>
              )}
            </div>
          ) : (
            <div className="mt-2">
              {LatestBlogData && Array.isArray(LatestBlogData) ? (
                LatestBlogData.slice(1, 5).map((news, i) => (
                  <Link
                    key={i}
                    href={`/blogs-&-articles/${
                      LatestBlogData[0].category
                        ? LatestBlogData[0].category?.name.toLowerCase() +
                          `=` +
                          LatestBlogData[0].category?.id
                        : "category"
                    }/${
                      LatestBlogData[0].middle_category
                        ? LatestBlogData[0].middle_category?.name.toLowerCase() +
                          `=` +
                          LatestBlogData[0].middle_category?.id
                        : "middle_category"
                    }/${
                      LatestBlogData[0].sub_category
                        ? LatestBlogData[0].sub_category?.name.toLowerCase() +
                          `=` +
                          LatestBlogData[0].sub_category?.id
                        : "sub_category"
                    }/${LatestBlogData[0].slug_title}=${LatestBlogData[0].id}`}
                    className="no-underline group"
                  >
                    <div className="flex flex-col justify-end items-start">
                      <h2 className="text-base title-font text-black font-bold">
                        {news ? news.title : "N/A"}
                      </h2>
                      <p className="text-black border-l-2 border-red-400 pl-2 text-sm mb-0 group-hover:underline">
                        {news?.category?.name || "N/A"}
                      </p>
                    </div>
                    <hr />
                  </Link>
                ))
              ) : (
                <p>No latest blogs and articles data available.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
