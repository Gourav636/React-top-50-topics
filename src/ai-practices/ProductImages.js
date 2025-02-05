import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductImages.css";

function ProductImages() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://ai-backend-service-bvc9bsd3b7dwaacn.eastus-01.azurewebsites.net/get-images"
      );
      setImageUrls(response.data);
    } catch (error) {
      console.error("Error fetching images", error);
    }
  };

  const uploadFile = async () => {
    if (!selectedFile) return alert("Please select a file!");

    try {
      const fileName = `${Date.now()}_${selectedFile.name}`;
      const response = await axios.get(
        `https://ai-backend-service-bvc9bsd3b7dwaacn.eastus-01.azurewebsites.net/generate-sas-url/${fileName}`
      );

      const formData = new FormData();
      formData.append("file", selectedFile);

      await axios.put(response.data.sasUrl, selectedFile, {
        headers: { "x-ms-blob-type": "BlockBlob" },
      });

      alert("Upload successful!");
      fetchImages(); // Refresh images
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return (
    <div className="container">
      <h2>Azure Blob Storage File Upload</h2>

      <div className="upload-container">
        <input
          type="file"
          className="file-input"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <button className="uploadButton" onClick={uploadFile}>
          Upload
        </button>
      </div>

      <div className="gallery">
        {imageUrls.length === 0 ? (
          <p>No images available.</p>
        ) : (
          imageUrls.map((url, index) => (
            <img
              className="image"
              key={index}
              src={url}
              alt={`Uploaded ${index}`}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductImages;
