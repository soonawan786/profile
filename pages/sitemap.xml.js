import Head from "next/head";
import moment from "moment";
const base_url = process.env.BASE_URL;
function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>

  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <sitemap>

        <loc>${base_url}/sitemap-manual.xml</loc>

        <lastmod>${moment().format("YYYY-MM-DD")}</lastmod>

    </sitemap>
    
    <sitemap>

        <loc>${base_url}/sitemap-profiles-categories-celebrities.xml</loc>

        <lastmod>${moment().format("YYYY-MM-DD")}</lastmod>

    </sitemap>

    <sitemap>

        <loc>${base_url}/sitemap-profiles-celebrities.xml</loc>

        <lastmod>${moment().format("YYYY-MM-DD")}</lastmod>

    </sitemap>

    <sitemap>

        <loc>${base_url}/sitemap-profiles-countries.xml</loc>

        <lastmod>${moment().format("YYYY-MM-DD")}</lastmod>

    </sitemap>
  </sitemapindex>
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
