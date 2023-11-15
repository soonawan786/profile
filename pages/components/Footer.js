import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import facebook from "/public/assets/facebook.png";
import youtube from "/public/assets/youtube.png";
import twitter from "/public/assets/twitter.png";
import instagram from "/public/assets/instagram.png";
import tiktok from "/public/assets/tiktok.png";
import linkedin from "/public/assets/linkedin.png";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
const api_url = process.env.NEXT_PUBLIC_API_URL;
import { Icon } from "@iconify/react";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [footerPages, setfooterPages] = useState("");
  const pagesName = ["About Us", "Privacy Policy", "Terms & Conditions"];

  useEffect(() => {}, []);
  // This function will handle the scroll event and determine if the button should be shown
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };
  // Attach the scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="mt-3 footer-ssmd">
      <div className="f-set-md">
        <h1 className="footer-logo-setting">Almuflihoon</h1>
      </div>

      <Container className="p-2 sm:p-0 md:p-0 lg:p-0 xl:p-0">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center items-center">
          <div className="d-flex gap-3 flex-wrap justify-center">
            <div>
              <Link
                href="https://www.facebook.com/Infokidunya.official"
                className="text-black"
              >
                <Icon
                  icon="akar-icons:facebook-fill"
                  width="25"
                  height="25"
                  className="hover:text-[#00899d]"
                />
              </Link>
            </div>
            <div>
              <Link
                href="https://www.instagram.com/infokidunya/"
                className="text-black"
              >
                <Icon
                  icon="formkit:instagram"
                  width="25"
                  height="25"
                  className="hover:text-[#00899d]"
                />
              </Link>
            </div>
          </div>
          <div className="d-flex gap-3 flex-wrap justify-center">
            <div>
              <Link
                href={`/about-us`}
                className="no-underline text-black text-sm hover:underline"
              >
                <span className="hover:text-[#00899d] hover:underline ">
                  About Us
                </span>
              </Link>
            </div>

            <div>
              <Link
                href={`/privacy-policy`}
                className="no-underline text-black text-sm "
              >
                <span className="hover:text-[#00899d] hover:underline ">
                  Privacy Policy
                </span>
              </Link>
            </div>

            <div>
              <Link
                href={`/terms`}
                className="no-underline text-black text-sm "
              >
                {" "}
                <span className="hover:text-[#00899d] hover:underline ">
                  Terms & Conditions
                </span>
              </Link>
            </div>
          </div>
          <div className="copyright">
            ©{" "}
            <a
              href="https://almuflihoon.com/"
              style={{ color: "black", textDecoration: "none" }}
            >
              Almuflihoon
            </a>{" "}
            | A project of{" "}
            <Link
              href="https://vohtech.com/"
              className="no-underline text-black text-sm "
            >
              <span className="hover:text-[#00899d] hover:underline ">
                {" "}
                VOH Technologies
              </span>
            </Link>
          </div>
        </div>
        {showBackToTop && (
          <div
            className="back-to-top-button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaArrowUp />
          </div>
        )}
      </Container>
    </div>
  );
}
