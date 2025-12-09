import React, { useState } from "react";

function UploadVideo() {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a video first");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (err) {
      console.error("Error uploading file:", err);
      alert("Upload failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Stress Detection</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload & Predict</button>
      {prediction && <h3>Prediction: {prediction}</h3>}
    </div>
  );
}

export default UploadVideo;
