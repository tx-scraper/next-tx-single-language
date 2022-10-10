import { existsSync, writeFileSync } from "fs";
import * as Log from "next/dist/build/output/log";

const isDev = process.env.NODE_ENV === "development";

export const sitemap = (urls: string[], name: string) => {
  const path = `public/${name}.xml`;

  if (existsSync(path)) {
    isDev && Log.info(`Sitemap already exists: ${path}`);

    return;
  }

  const data = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (item) => `
    <url>
      <loc>${item}</loc>
    </url>
  `
    )
    .join("")}
  </urlset>
  `;

  writeFileSync(path, data);

  Log.info(`Generated sitemap: ${path}`);
};
