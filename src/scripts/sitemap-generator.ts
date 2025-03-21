import { format } from 'date-fns/format';
import { XMLBuilder, XmlBuilderOptions } from 'fast-xml-parser';
import * as fs from 'fs';
import prerenderedRoutes from '../../dist/lucq-cyrille-plaquiste-peintre.fr/prerendered-routes.json';
import path from 'path';

// Pour s'appuyer sur le fichier prerendered-routes.json il faut qu'Angular soit en mode SSR
const appName = 'lucq-cyrille-plaquiste-peintre.fr';
const xmlBuilderOptions: XmlBuilderOptions = {
  attributeNamePrefix: '@',
  ignoreAttributes: false,
  format: true,
};
const baseURL = 'https://lucq-cyrille-plaquiste-peintre.fr';

const urls: string[] = Object.keys(prerenderedRoutes.routes).map((route) => {
  if (route === '/') {
    return baseURL;
  }
  return `${baseURL}${route}`;
});

console.log(
  `Generate ${urls.length} routes in sitemap.xml from prerendered-routes.json`
);

const sitemap = {
  '?xml': {
    '@version': '1.0',
    '@encoding': 'UTF-8',
    urlset: {
      '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
      url: urls.map((url) => {
        return {
          loc: url,
          lastmod: format(new Date(), 'yyyy-MM-dd'),
          // changefreq: "daily", // Google ignores it
          // priority: 1 // Google ignores it
        };
      }),
    },
  },
};

const builder = new XMLBuilder(xmlBuilderOptions);
const xmlContent = builder.build(sitemap);

fs.writeFileSync(
  path.join(__dirname, `../../dist/${appName}/browser/sitemap.xml`),
  xmlContent
);
