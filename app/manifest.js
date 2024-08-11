export default function manifest() {
   return {
      name: 'Restaria Liba',
      short_name: 'Liba',
      description: 'Het plekje van Boven-Hardinxveld!',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#fff',
      icons: [
         {
            src: "icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
         },
         {
            src: "icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable"
         },
         {
            src: "icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
         },
         {
            src: "icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
         }
      ],
   }
}