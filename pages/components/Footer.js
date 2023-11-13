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

      <Container>
        <div className="copyright-md">
          <div className="footer-cols-setting">
            <Image
              src={facebook}
              alt="facebook"
              width={0}
              height={0}
              unoptimized
              className="social-icons"
            />
            <Image
              src={twitter}
              alt="twitter"
              width={0}
              height={0}
              unoptimized
              className="social-icons twitter-icon"
            />
            <Image
              src={instagram}
              alt="instagram"
              width={0}
              height={0}
              unoptimized
              className="social-icons instagram-icon"
            />

            <Image
              src={linkedin}
              alt="linkedin"
              width={0}
              height={0}
              unoptimized
              className="social-icons"
            />
            <Image
              src={youtube}
              alt="youtube"
              width={0}
              height={0}
              unoptimized
              className="social-icons youtube-icon"
            />
            <Image
              src={tiktok}
              alt="tiktok"
              width={0}
              height={0}
              unoptimized
              className="social-icons tiktok-icon"
            />
          </div>
          <div className="footer-responsive-280-maindiv">
            <div className="footer-responsive-280">
              <Link href={`/privacy.txt`} className="footer-pages-links">
                {pagesName[1]}
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
            <a
              href="https://vohtech.com/"
              style={{ color: "black", textDecoration: "none" }}
            >
              VOH Technologies
            </a>
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
