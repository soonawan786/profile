// pages/api/indexing.js
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

    const options = {
      url: "https://indexing.googleapis.com/v3/urlNotifications:publish",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokens.access_token}`,
      },
      body: JSON.stringify({
        url: "https://almuflihoon.com/profiles/sports-players-and-athletes=3/babar-azam=141",
        type: "URL_UPDATED",
      }),
    };

    // Use fetch instead of the request library
    const response = await fetch(options.url, {
      method: options.method,
      headers: options.headers,
      body: options.body,
    });

    const responseBody = await response.json();

    console.log("responseBody::", responseBody, responseBody.error.details);
    // Handle the response
    res.status(response.status).json(responseBody);
  } catch (error) {
    console.error("error arha hy :", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
