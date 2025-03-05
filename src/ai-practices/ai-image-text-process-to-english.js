import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select an image first!");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "https://ai-backend-service-bvc9bsd3b7dwaacn.eastus-01.azurewebsites.net/extract-text",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Upload an Image</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {result && (
        <div>
          <h3>Extracted Text:</h3>
          <p>{result.extractedText}</p>
          <h3>Translated Text (English):</h3>
          <p>{result.translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Upload;
