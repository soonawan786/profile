import moment from "moment";
const base_url = process.env.BASE_URL;
const api_url = process.env.API_URL;
const EXTERNAL_DATA_URL = `${api_url}/directory/category-listing`;

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
 
     ${posts.data
       .map((d, i) => {
         return `
       <url>
            <loc>${`${base_url}/profiles/${encodeURIComponent(
              d.name.toLowerCase().replace(/ /g, "-")
            )}=${encodeURIComponent(d.id)}`.replace(/&/g, "&amp;")}</loc>

            <lastmod>${moment().format("YYYY-MM-DD")}</lastmod>

           <changefreq>monthly</changefreq>
     
           <priority>0.8</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
  x;
}

function ProfileCatSiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default ProfileCatSiteMap;
