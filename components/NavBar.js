"use client"

import Logo from "@/public/logo.png";
import { useEffect, useState } from "react";
import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
  const [ hamburgerMenu, setHambugerMenu ] = useState(false);

  const handleHamburgerMenu = () => {
    setHambugerMenu(!hamburgerMenu)
  }

  useEffect(() => {
    if(hamburgerMenu === true) {
      document.getElementById("hamburger-menu-links").classList.remove("hidden");
      document.getElementById("hamburger-menu-shadow").classList.remove("hidden");
      document.body.style.height = "100vh";
      document.body.style.overflowY = "clip";
      window.scrollTo(0, 0);
    } else if(hamburgerMenu === false) {
      document.getElementById("hamburger-menu-links").classList.add("hidden");
      document.getElementById("hamburger-menu-shadow").classList.add("hidden");
      document.body.style.height = "auto";
      document.body.style.overflowY = "auto";
    }
  }, [hamburgerMenu])

  return (
    <div className="relative">
      <div className="z-40 w-full bg-zinc-800 lg:bg-transparent lg:bg-opacity-75 lg:absolute">
        <nav className="flex items-center justify-between max-w-full-lg p-4 mx-auto md:flex-col lg:flex-row">
          <div className="flex items-center justify-between w-full mx-2 md:w-auto md:gap-x-10">
            <Link href="/" className="flex gap-4 items-center">
              <Image src={Logo} alt="" className="w-14 md:w-16 mr-1 md:mr-3" />
              <h1 className="py-2 text-3xl font-bold text-white hidden md:inline">Restaria Liba</h1>
            </Link>
            <Link className="hidden py-2 mx-2 text-white bg-green-700 rounded px-14 hover:bg-green-800 md:inline lg:hidden" href="/bestellen">Bestellen</Link>
            <svg className="h-10 hover:cursor-pointer md:hidden" onClick={handleHamburgerMenu} viewBox="0 0 24 24" fill="none">
              <path d="M4 18L20 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
              <path d="M4 12L20 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
              <path d="M4 6L20 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div className="z-50 md:hidden">
            <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-75" id="hamburger-menu-shadow" onClick={handleHamburgerMenu}></div>
            <div className="absolute top-0 right-0 w-56 h-screen bg-zinc-900" id="hamburger-menu-links">
              <div className="flex flex-col text-center text-white">
                <Link className="py-4 border-b-2 px-auto border-b-zinc-700" href="/" onClick={handleHamburgerMenu}>Home</Link>
                <Link className="py-4 border-b-2 px-auto border-b-zinc-700" href="/restaria" onClick={handleHamburgerMenu}>Restaria</Link>
                <Link className="py-4 border-b-2 px-auto border-b-zinc-700" href="/cafe" onClick={handleHamburgerMenu}>Café</Link>
                <Link className="py-4 border-b-2 px-auto border-b-zinc-700" href="/over-ons" onClick={handleHamburgerMenu}>Over Ons</Link>
                <Link className="py-4 px-auto" href="/contact" onClick={handleHamburgerMenu}>Contact</Link>
                <Link className="py-4 bg-green-700 px-auto" href="/bestellen" onClick={handleHamburgerMenu}>Bestellen</Link>
              </div>
            </div>
          </div>
          <div className="hidden w-auto h-auto bg-transparent md:inline">
            <div className="flex items-center text-white ">
              <Link className="px-3 py-2 mx-2 border-none border-b-zinc-700" href="/">Home</Link>
              <Link className="px-3 py-2 mx-2 border-none border-b-zinc-700" href="/restaria">Restaria</Link>
              <Link className="px-3 py-2 mx-2 border-none border-b-zinc-700" href="/cafe">Café</Link>
              <Link className="px-3 py-2 mx-2 border-none border-b-zinc-700" href="/over-ons">Over Ons</Link>
              <Link className="px-3 py-2 mx-2 border-none border-b-zinc-700" href="/contact">Contact</Link>
              <Link className="px-3 py-2 mx-2 bg-green-700 rounded hover:bg-green-800 md:hidden lg:inline" href="/bestellen">Bestellen</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
 
export default NavBar;