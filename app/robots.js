export default function robots() {
   return {
      rules: {
         userAgent: '*',
         allow: '/',
         disallow: '/admin/',
      },
      sitemap: 'https://restarialiba.nl/sitemap.xml',
   }
}