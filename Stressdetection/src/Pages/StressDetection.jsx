import { useState } from "react";

function StressDetection() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleUpload = async () => {
    if (!file) {
      alert("Please upload a video");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Stress Detection</h1>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload}>Upload & Predict</button>

      <h2>Result:</h2>
      <pre>{result}</pre>
    </div>
  );
}

export default StressDetection;
