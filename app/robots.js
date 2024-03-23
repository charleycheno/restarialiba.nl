export default function robots() {
   return {
      rules: {
         userAgent: '*',
         allow: '/',
         disallow: '/admin/',
      },
      sitemap: 'https://ljhc.nl/sitemap.xml',
   }
}