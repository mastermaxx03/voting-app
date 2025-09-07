const apiKey = ""; // Place your real API key here or load from environment variables
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

export const callGeminiAPI = async (
  prompt,
  jsonSchema = null,
  retries = 3,
  delay = 1000
) => {
  const payload = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  };

  if (jsonSchema) {
    payload.generationConfig = {
      responseMimeType: "application/json",
      responseSchema: jsonSchema,
    };
  }

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(GEMINI_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }

      const result = await response.json();

      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0
      ) {
        const text = result.candidates[0].content.parts[0].text;
        return text;
      } else {
        throw new Error("Unexpected response structure from API.");
      }
    } catch (error) {
      console.error(`Attempt ${i + 1} failed:`, error);
      if (i < retries - 1) {
        await new Promise((res) => setTimeout(res, delay * Math.pow(2, i)));
      } else {
        return null; // Return null after all retries fail
      }
    }
  }
};
