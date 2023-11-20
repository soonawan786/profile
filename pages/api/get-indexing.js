import { google } from "googleapis";
import { readFileSync } from "fs";
import { resolve } from "path";

export default async function handler(req, res) {
  try {
    // Resolve the path using the environment variable
    const keyPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    const key = JSON.parse(readFileSync(resolve(keyPath), "utf-8"));

    const jwtClient = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      ["https://www.googleapis.com/auth/indexing"],
      null
    );

    const tokens = await jwtClient.authorize();

    // Extract the array of URLs from the request body
    const { urls } = req.body;

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return res.status(400).json({ error: "Invalid or empty array of URLs" });
    }

    const baseUrl =
      "https://indexing.googleapis.com/v3/urlNotifications/metadata";

    const indexingPromises = urls.map(async (url) => {
      try {
        const encodedUrl = encodeURIComponent(url);
        const response = await fetch(`${baseUrl}?url=${encodedUrl}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokens.access_token}`,
          },
        });

        const responseBody = await response.json();
        return { url, response: responseBody };
      } catch (error) {
        console.error(`Error checking ${url}:`, error);
        return { url, response: { error: "Check failed" } };
      }
    });

    // Wait for all promises to resolve
    const results = await Promise.all(indexingPromises);

    // Handle the response based on your requirements
    res.status(200).json(results);
  } catch (error) {
    console.error("Internal Server Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
