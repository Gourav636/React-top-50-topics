import React, { useState } from "react";
import axios from "axios";

const SentimentAnalysis = () => {
  const [inputText, setInputText] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const endpoint = "https://test-app-app.cognitiveservices.azure.com/";
  const key =
    "7HsYJQchHWmb1CqzpxnIc5li0z0bMw5J2JjT9DM1M8BJg1J2P78wJQQJ99BAACYeBjFXJ3w3AAAEACOGITOE";

  const analyzeSentiment = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${endpoint}/text/analytics/v3.0/sentiment`,
        {
          documents: [
            {
              language: "en",
              id: "1",
              text: inputText,
            },
          ],
        },
        {
          headers: {
            "Ocp-Apim-Subscription-Key": key,
            "Content-Type": "application/json",
          },
        }
      );

      // Extract sentiment results
      const sentimentData = response.data.documents[0];
      setSentiment(sentimentData);
    } catch (err) {
      setError("Error analyzing sentiment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sentiment-analysis">
      <h2>Sentiment Analysis</h2>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows="5"
        placeholder="Enter text to analyze sentiment"
      />
      <button onClick={analyzeSentiment} disabled={loading}>
        Analyze Sentiment
      </button>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {sentiment && (
        <div>
          <h3>Sentiment: {sentiment.sentiment}</h3>
          <p>Positive: {sentiment.confidenceScores.positive}</p>
          <p>Neutral: {sentiment.confidenceScores.neutral}</p>
          <p>Negative: {sentiment.confidenceScores.negative}</p>
        </div>
      )}
    </div>
  );
};

export default SentimentAnalysis;
