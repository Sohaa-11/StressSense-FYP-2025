import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const prediction = location.state?.prediction || "Unknown";

  const getMessage = () => {
    const p = prediction.toLowerCase();

    if (p === "stress") {
      return (
        <>
          😟 <strong>Stress Detected</strong><br />
          It looks like you're experiencing some signs of stress. That's okay — it happens to all of us.  
          Try taking a few slow breaths, stretch your body, or step away from the screen for a moment.  
          <br /><br />
          🌿 <em>Small breaks can make a big difference.</em>
        </>
      );
    }

    if (p === "non-stress" || p === "nonstress") {
      return (
        <>
          😄 <strong>No Signs of Stress!</strong><br />
          You're calm, composed, and in control. Keep maintaining this positive state of mind!  
          <br /><br />
          🌟 <em>Stay consistent with whatever you're doing — it's working!</em>
        </>
      );
    }

    return (
      <>
        ⚡ <strong>Awaiting Prediction</strong><br />
        No stress result available. Please upload a video again.
      </>
    );
  };

  const getTitleEmoji = () => {
    if (prediction.toLowerCase() === "stress") return "🧠⚠️";
    if (prediction.toLowerCase() === "non-stress" || prediction.toLowerCase() === "nonstress") return "🧠✨";
    return "🧠";
  };

  return (
    <>
      <Navbar />

      <section className="result-section">
        <div className="result-container">
          <h2>{getTitleEmoji()} StressSense Result</h2>

          <div className={`prediction-card ${prediction.toLowerCase()}`}>
            <h3>{prediction}</h3>
            <p>{getMessage()}</p>
          </div>

          <button className="back-btn" onClick={() => navigate("/upload")}>
            ⬅️ Upload Another Video
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Result;
