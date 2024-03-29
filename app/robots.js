export default function robots() {
   return {
      rules: {
         userAgent: '*',
         allow: '/',
         disallow: '/winkelwagen/',
         disallow: '/account/',
         disallow: '/admin/',
      },
      sitemap: 'https://ljhc.nl/sitemap.xml',
   }
}