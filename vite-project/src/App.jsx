import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        padding: "20px",
        lineHeight: "1.6",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Privacy Policy for Camera Usage</h1>

      <h6>1. Introduction</h6>
      <p>
        At Sidmach Technologies Nigeria Limited, your privacy is of utmost
        importance to us. This privacy policy outlines how we collect, use, and
        protect your information when using our application, which requires
        access to your device’s camera.
      </p>

      <h6>2. Purpose of Camera Access</h6>
      <p>
        Our application accesses your camera solely for the following purpose:
      </p>
      <ul>
        <li>
          QR Code Scanning: To enable efficient and accurate QR code reading
          within the application.
        </li>
      </ul>

      <h6>3. Data Handling and Protection</h6>
      <h6>3.1 Data Retention</h6>
      <ul>
        <li>
          We retain your information only as long as necessary to achieve the
          purposes outlined in this policy.
        </li>
        <li>No images or videos are stored permanently.</li>
        <li>
          Camera data is processed momentarily and exclusively for the intended
          purpose.
        </li>
        <li>
          No camera-related information is transmitted to external servers.
        </li>
      </ul>

      <h6>3.2 Privacy Safeguards</h6>
      <ul>
        <li>Camera access is temporary and purpose-specific.</li>
        <li>The app does not operate camera functions in the background.</li>
        <li>
          Users maintain full control over camera permissions at all times.
        </li>
      </ul>

      <h6>4. User Permissions and Control</h6>
      <ul>
        <li>Camera access requires explicit user consent.</li>
        <li>Users can manage camera access through their device settings.</li>
        <li>
          Revoking camera permissions may limit specific functionalities of the
          app.
        </li>
      </ul>

      <h6>5. Data Security</h6>
      <p>
        We employ industry-standard security measures to protect your
        information from unauthorized access, alteration, disclosure, or
        destruction. These measures include encryption, secure data storage, and
        regular security assessments.
      </p>

      <h6>6. Sharing Your Information</h6>
      <p>
        We do not share camera-related data with third parties except under the
        following circumstances:
      </p>
      <ul>
        <li>
          <strong>With Your Consent:</strong> Data may be shared with third
          parties only with your explicit permission.
        </li>
        <li>
          <strong>Legal Requirements:</strong> Information may be disclosed to
          comply with legal obligations or to protect our rights.
        </li>
      </ul>

      <h6>7. Compliance and Standards</h6>
      <ul>
        <li>Our camera usage policy adheres to:</li>
        <li>Mobile platform guidelines (e.g., Android, iOS).</li>
        <li>Applicable data protection regulations (e.g., GDPR, NDPR).</li>
        <li>Best practices for user privacy.</li>
      </ul>

      <h6>8. Policy Updates</h6>
      <p>
        We reserve the right to update this Privacy Policy as needed. Updates
        will be communicated through notifications or by publishing the revised
        policy within the app. We encourage users to review this policy
        periodically.
      </p>

      <h6>9. Contact Information</h6>
      <p>
        For questions, concerns, or additional information regarding this
        Privacy Policy, please contact us:
      </p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:corporate@sidmach.com">corporate@sidmach.com</a>
        </li>
        <li>Phone: +2349087197603-4</li>
      </ul>

      <p style={{ fontStyle: "italic" }}>Last Updated: December 2024</p>
    </div>
  );
};

export default PrivacyPolicy;

