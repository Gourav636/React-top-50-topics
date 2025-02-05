import React, { useState } from "react";
import axios from "axios";
import "./SentimentAnalysis.css"; // Import the CSS file

const SentimentAnalysis = () => {
  const [inputText, setInputText] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const endpoint = "https://test-app-app.cognitiveservices.azure.com/";
  const key =
    "7HsYJQchHWmb1CqzpxnIc5li0z0bMw5J2JjT9DM1M8BJg1J2P78wJQQJ99BAACYeBjFXJ3w3AAAEACOGITOE";

  const analyzeSentiment = async () => {
    if (!inputText.trim()) {
      setError("Please enter some text.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${endpoint}/text/analytics/v3.0/sentiment`,
        {
          documents: [{ language: "en", id: "1", text: inputText }],
        },
        {
          headers: {
            "Ocp-Apim-Subscription-Key": key,
            "Content-Type": "application/json",
          },
        }
      );

      const sentimentData = response.data.documents[0];
      setSentiment(sentimentData);
    } catch (err) {
      setError("Error analyzing sentiment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sentiment-container">
      <h2>Sentiment Analysis</h2>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows="5"
        placeholder="Enter text to analyze sentiment..."
      />
      <button onClick={analyzeSentiment} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze Sentiment"}
      </button>

      {loading && <div className="loader"></div>}

      {error && <p className="error-message">{error}</p>}

      {sentiment && (
        <div className="sentiment-result">
          <h3>
            Sentiment:{" "}
            <span className={`sentiment-${sentiment.sentiment}`}>
              {sentiment.sentiment.toUpperCase()}
            </span>
          </h3>
          <p>
            <strong>Positive:</strong>{" "}
            <span className="positive-score">
              {sentiment.confidenceScores.positive.toFixed(2)}
            </span>
          </p>
          <p>
            <strong>Neutral:</strong>{" "}
            <span className="neutral-score">
              {sentiment.confidenceScores.neutral.toFixed(2)}
            </span>
          </p>
          <p>
            <strong>Negative:</strong>{" "}
            <span className="negative-score">
              {sentiment.confidenceScores.negative.toFixed(2)}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default SentimentAnalysis;
