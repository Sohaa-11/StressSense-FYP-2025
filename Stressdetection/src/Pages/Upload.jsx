import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Upload = () => {
  const [videoFile, setVideoFile] = useState(null);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Check duration ≤ 20s
  const validateDuration = (file, type) => {
    return new Promise((resolve) => {
      const media = document.createElement(type);
      media.preload = "metadata";
      media.src = URL.createObjectURL(file);
      media.onloadedmetadata = () => {
        URL.revokeObjectURL(media.src);
        resolve(media.duration <= 20);
      };
    });
  };

  const handleVideoChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const valid = await validateDuration(file, "video");
      if (!valid) {
        alert("Video must be ≤ 20 seconds.");
        e.target.value = null;
        return;
      }
      setVideoFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!videoFile) {
      alert("Please upload a video.");
      return;
    }

    const formData = new FormData();
    formData.append("video", videoFile);

    try {
      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      // Redirect to Result page with prediction
      navigate("/result", { state: { prediction: data.prediction } });
    } catch (err) {
      console.error(err);
      alert("Error uploading the video.");
    }
  };

  return (
    <>
      <Navbar />
      <section className="upload-section">
        <div className="upload-container">
          <h2>Upload Video</h2>
          <p>Video should be ≤ 20 seconds for analysis.</p>

          <form className="upload-form" onSubmit={handleSubmit}>
            {/* Video Upload */}
            <div className="file-input">
              <label>📹 Upload Video (≤ 20s, MP4/AVI)</label>
              <input type="file" accept="video/*" onChange={handleVideoChange} />
              {videoFile && (
                <video
                  ref={videoRef}
                  width="100%"
                  height="auto"
                  controls
                  src={URL.createObjectURL(videoFile)}
                />
              )}
            </div>

            <button type="submit" className="upload-btn">
              🚀 Start Analysis
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Upload;
