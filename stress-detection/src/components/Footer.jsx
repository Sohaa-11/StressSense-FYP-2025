import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Stress Detection AI</h2>
        <p>
          Contact us:{" "}
          <a href="mailto:rabiyahumayon@gmail.com">rabiyahumayon@gmail.com</a> |{" "}
          <a href="mailto:sohabilal@gmail.com">sohabilal@gmail.com</a>
        </p>
        <p className="copyright">
          © {new Date().getFullYear()} Stress Detection AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
