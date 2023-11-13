import Head from "next/head";
const base_url = process.env.BASE_URL;
import moment from "moment";
function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>

    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <url>

        <loc>${base_url}/</loc>

        <lastmod>${moment().format("YYYY-MM-DD")}</lastmod>

        <changefreq>daily</changefreq>

        <priority>1.0</priority>

    </url>
</urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
