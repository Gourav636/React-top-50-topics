import { useState } from "react";

export default function ChatApp() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendPrompt = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch(
        "https://ai-backend-service-bvc9bsd3b7dwaacn.eastus-01.azurewebsites.net/ask",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        }
      );

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      setResponse("Error fetching response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Claude AI Chat
        </h1>
        <textarea
          className="w-full p-3 border rounded-lg"
          rows="4"
          placeholder="Ask me anything..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 mt-3 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
          onClick={sendPrompt}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Ask Claude"}
        </button>
        {response && (
          <div className="mt-4 p-3 bg-gray-200 rounded-lg text-gray-800">
            <strong>Response:</strong>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}
