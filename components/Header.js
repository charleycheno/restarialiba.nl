"use client"

import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Home from "@/public/banners/home.jpg";
import Restaria from "@/public/banners/restaria.jpg";
import Menu from "@/public/banners/menu.webp";
import Cafe from "@/public/banners/cafe.jpg";
import OverOns from "@/public/banners/over-ons.jpg";
import Contact from "@/public/banners/contact.jpg";

export default function Header() {
   if(usePathname() == "/") {
      return (
         <>
            <NavBar />
            <div className="relative w-full min-h-96 max-h-100 lg:min-h-160 lg:max-h-160">
               <Image src={Home} alt="" className="absolute object-cover w-full h-full" />
               <div className="absolute w-full h-full bg-gradient-to-b from-black/80 via-black/70 via-75% to-black/40 lg:from-black/90 lg:via-black/70 lg:via-50% lg:to-black/40" />
               <div className="absolute w-full h-full px-2 flex flex-col items-center justify-center text-center text-white">
                  <h1 className="text-3xl font-bold lg:text-4xl">Welkom bij Restaria Liba</h1>
                  <p className="mb-8 text-lg">Het plekje van Boven-Hardinxveld</p>
                  <div className="flex flex-col items-center gap-3 md:flex-row">
                     <Link className="flex items-center justify-center px-5 py-3 text-lg font-semibold transition-transform bg-blue-700 rounded-lg hover:scale-105 gap-x-2" href="/restaria/menu"><span>Menukaart</span><svg className="w-5 h-5 md:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className="md:hidden" fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link>
                     <Link className="flex items-center justify-center px-5 py-3 text-lg font-semibold transition-transform bg-green-700 rounded-lg hover:scale-105 gap-x-2" href="/bestellen"><span>Bestellen</span><svg className="w-5 h-5 md:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className="md:hidden" fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link>
                  </div>
               </div>
            </div>
         </>
      )
   } else {
      var pageTitle
      var pageBanner
      switch (usePathname()) {
         case "/restaria":
            pageTitle = "Restaria"
            pageBanner = Restaria
            break;
         case "/restaria/menu":
            pageTitle = "Menu"
            pageBanner = Menu
            break;
         case "/cafe":
            pageTitle = "Café"
            pageBanner = Cafe
            break;
         case "/over-ons":
            pageTitle = "Over Ons"
            pageBanner = OverOns
            break;
         case "/contact":
            pageTitle = "Contact"
            pageBanner = Contact
            break;
      
         default:
            pageTitle = ""
            break;
      }
      return (
         <>
            <NavBar />
            <div className="relative w-full h-64 lg:h-100">
               <Image src={pageBanner} alt="Banner" className="absolute object-cover w-full h-full" priority />
               <div className="absolute w-full h-full bg-gradient-to-b from-black/80 via-black/70 via-75% to-black/40 lg:from-black/90 lg:via-black/70 lg:via-50% lg:to-black/40" />
               <div className="absolute w-full h-full px-2 flex flex-col items-center justify-center text-center text-5xl font-bold text-white uppercase">
                  <h1>{pageTitle}</h1>
               </div>
            </div>
         </>
      )
   }
}
