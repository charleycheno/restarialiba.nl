"use client"

import { usePathname } from "next/navigation"

export default function Header() {
   const pathname = usePathname()

   if(pathname == "/bestellen") {
      return (
         <header className="sticky top-0 flex items-center gap-2 p-2 border-b bg-white">
            <div className="h-10 w-10 border-4 rounded-full"></div>
            <div className="h-10 w-10 border-2 rounded-full"></div>
            <h1 className="flex justify-center items-center flex-grow h-10 w-10 text-center text-xl font-medium">Home</h1>
            <div className="h-10 w-10 border-2 rounded-full"></div>
            <div className="h-10 w-10 border-2 rounded-full"></div>
         </header>
      )
   } else if(pathname.split("/")[2] == "winkelmand") {
      return (
         <header className="sticky flex items-center gap-2 p-2 border-b bg-white">
         <h1 className="flex justify-center items-center flex-grow h-10 w-10 text-center text-xl font-medium">Winkelmand</h1>
         </header>
      )
   } else if(pathname.split("/")[2] == "favorieten") {
      return (
         <header className="sticky flex items-center gap-2 p-2 border-b bg-white">
         <h1 className="flex justify-center items-center flex-grow h-10 w-10 text-center text-xl font-medium">Favorieten</h1>
         </header>
      )
   } else {
      return (
         <header className="sticky flex items-center gap-2 p-2 border-b bg-white">
            <h1 className="flex-1 flex-grow text-center text-xl font-medium"></h1>
         </header>
      )
   }
}
