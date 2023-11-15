import React from "react";
import { Container } from "react-bootstrap";
import MetaTags from "./components/MetaTags";

const PrivacyPolicy = () => {
  return (
    <>
      {" "}
      <MetaTags
        title="Privacy Policy"
        description="Learn how we collect, use, and disclose your personal information on Almuflihoon platform."
        keywords="Privacy Policy, Almuflihoon, Personal Information"
      />
      <Container className="p-10">
        <div>
          <h1>Privacy Policy</h1>

          <p>
            Welcome to the Almuflihoon. This Privacy Policy ("Policy") describes
            how we collect, use, and disclose your personal information when you
            use our Platform.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect the following types of personal information from you:
          </p>
          <ul className="list-disc">
            <li>
              Information you provide to us: This includes information you
              provide when you create an account, register for our services, or
              otherwise interact with us, such as your name, email address, and
              phone number.
            </li>
            <li>
              Information we collect automatically: This includes information
              about your usage of our Platform, such as your IP address, browser
              type, and device type.
            </li>
            <li>
              Information we collect from third parties: This includes
              information we collect from social media platforms and other third
              parties.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use your personal information for the following purposes:</p>
          <ul className="list-disc">
            <li>
              To provide our services to you: This includes providing you with
              access to our Platform and features.
            </li>
            <li>
              To improve our services: We use your information to improve our
              Platform and services, such as by analyzing usage patterns and
              identifying trends.
            </li>
            <li>
              To communicate with you: We use your information to communicate
              with you about your account, our services, and other matters.
            </li>
            <li>
              To market our services: We may use your information to market our
              services to you.
            </li>
          </ul>

          <h2>Disclosure of Your Information</h2>
          <p>
            We may disclose your personal information to the following third
            parties:
          </p>
          <ul className="list-disc">
            <li>
              Our service providers: We use third-party service providers to
              help us operate our Platform and services, such as web hosting
              providers and email marketing companies.
            </li>
            <li>
              Our business partners: We may disclose your information to our
              business partners, such as advertisers and marketing partners.
            </li>
            <li>
              Law enforcement and other government agencies: We may disclose
              your information to law enforcement or other government agencies
              if required by law or if we believe that disclosure is necessary
              to protect our rights or the rights of others.
            </li>
          </ul>

          <h2>Your Choices</h2>
          <p>
            You have the following choices regarding your personal information:
          </p>
          <ul className="list-disc">
            <li>
              Access: You may request access to your personal information.
            </li>
            <li>
              Correction: You may request that we correct inaccurate personal
              information.
            </li>
            <li>
              Deletion: You may request that we delete your personal
              information.
            </li>
            <li>
              Opt-out: You may opt-out of receiving marketing communications
              from us.
            </li>
          </ul>

          <h2>Security</h2>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. However, no method of
            transmission over the Internet or method of electronic storage is
            100% secure. Therefore, we cannot guarantee the absolute security of
            your personal information.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Policy from time to time. If we make any material
            changes, we will notify you by email or by posting a notice on our
            Platform.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Policy, please contact us at:
          </p>
          <p>
            Almuflihoon
            <br />
            info@infokidunya.com
          </p>

          <p>Effective Date: November 12, 2023</p>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
