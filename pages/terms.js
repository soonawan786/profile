// pages/terms.js
import React from "react";
import { Container } from "react-bootstrap";
import MetaTags from "./components/MetaTags";

const Terms = () => {
  return (
    <>
      <MetaTags
        title="Terms and Conditions"
        description="Read and understand the terms and conditions of using Almuflihoon platform."
        keywords="Terms and Conditions, Almuflihoon, Usage Policies"
      />

      <Container className="py-4">
        <h1>Terms and Conditions - Almuflihoon</h1>

        <p>
          Welcome to the Almuflihoon. These Terms and Conditions
          (&quot;Terms&quot;) govern your use of our Platform.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By using our Platform, you agree to these Terms. If you do not agree
          to these Terms, you may not use our Platform.
        </p>

        <h2>2. Account</h2>
        <p>
          You may need to create an account to use some of the features of our
          Platform. When you create an account, you agree to provide us with
          accurate and complete information about yourself. You are responsible
          for maintaining the confidentiality of your account credentials and
          for all activities that occur under your account. You agree to notify
          us immediately of any unauthorized use of your account.
        </p>

        <h2>3. User Conduct</h2>
        <p>
          You agree to use our Platform for lawful purposes only. You agree not
          to use our Platform to:
        </p>

        <ul className="list-disc">
          <li>
            Upload, post, transmit, or distribute any content that is illegal,
            harmful, threatening, abusive, harassing, tortious, defamatory,
            vulgar, obscene, libelous, invasive of another&apos;s privacy,
            hateful, or racially, ethnically, or otherwise objectionable.
          </li>
          <li>
            Upload, post, transmit, or distribute any content that you do not
            have the right to transmit under any law or under contractual or
            fiduciary relationships (such as inside information, proprietary and
            confidential information learned or disclosed as part of employment
            relationships or under nondisclosure agreements).
          </li>
          {/* Add more list items as needed */}
        </ul>

        {/* Continue with the rest of your content */}

        <h2>8. General</h2>
        <p>
          These Terms constitute the entire agreement between you and us
          concerning the subject matter hereof and supersede all prior or
          contemporaneous communications, representations, or agreements,
          whether oral or written. If any provision of these Terms is held to be
          invalid or unenforceable, such provision shall be struck from these
          Terms and the remaining provisions shall remain in full force and
          effect. These Terms shall be governed by and construed by the laws of
          the State of, without regard to its conflict of laws provisions. Any
          dispute arising out of or relating to these Terms shall be resolved
          exclusively in the courts of the State of Pakistan.
        </p>
      </Container>
    </>
  );
};

export default Terms;
