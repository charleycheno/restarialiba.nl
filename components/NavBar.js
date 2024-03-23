"use client"

import Logo from "@/public/logo.png";
import { useEffect, useRef, useState } from "react";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [ menu, setMenu ] = useState(false);
  const menuShadow = useRef()
  const menuList = useRef()

  const pathname = usePathname()

  const showMenu = () => {
    setMenu(true)
    menuList.current.classList.remove("hidden")
    menuList.current.classList.add("flex")
    menuShadow.current.classList.remove("hidden")
    document.body.style.height = "100vh"
    document.body.style.overflowY = "clip"
    window.scrollTo(0, 0)
  }

  const hideMenu = () => {
    setMenu(false)
    menuList.current.classList.add("hidden")
    menuList.current.classList.remove("flex")
    menuShadow.current.classList.add("hidden")
    document.body.style.height = "auto"
    document.body.style.overflowY = "auto"
  }

  const toggleMenu = () => {
    if(menu == false) {
      showMenu()
      window.scrollTo(0, 0);
    } else if(menu == true) {
      hideMenu()
    }
  }

  const handleMenu = () => {
    setMenu(!menu)
    if(window.innerWidth < 800) {
      toggleMenu()
    }
  }

  useEffect(() => {
    hideMenu()
  }, [pathname])

  useEffect(() => {
    if(window.innerWidth < 800) {
      for (let i = 0; i < menuList.current.children.length; i++) {
        const element = menuList.current.children[i];
        if(pathname == element.getAttribute("href")) {
          element.classList.add("bg-zinc-700")
          element.classList.add("cursor-default")
        } else {
          element.classList.remove("bg-zinc-700");
          element.classList.remove("cursor-default")
        }
      }
    }
  }, [menu])
  
  

  return (
    <nav className="z-10 w-full bg-zinc-800 text-white lg:bg-transparent lg:absolute">
      <div className="container flex items-center mx-auto px-6 py-4 md:px-10 md:flex-col md:gap-2 lg:flex-row lg:gap-0">
        <Link className="flex items-center gap-6" href="/">
          <Image src={Logo} alt="" className="w-16" />
          <span className="text-3xl font-bold">Restaria Liba</span>
        </Link>
        <svg className="h-10 ml-auto hover:cursor-pointer md:hidden" onClick={handleMenu} viewBox="0 0 24 24" fill="none">
          <path d="M4 18L20 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
          <path d="M4 12L20 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
          <path d="M4 6L20 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <div className="hidden z-20 absolute md:flex flex-col w-56 h-screen top-0 right-0 text-center bg-zinc-900 md:bg-transparent text-white ml-auto md:static md:flex-row md:w-max md:h-auto md:mx-auto lg:mx-0 lg:ml-auto" ref={menuList}>
          <Link className="py-4 border-b-2 px-auto border-b-zinc-700 md:cursor-pointer md:bg-transparent md:border-none md:px-3 md:py-2 md:mx-2" href="/">Home</Link>
          <Link className="py-4 border-b-2 px-auto border-b-zinc-700 md:cursor-pointer md:bg-transparent md:border-none md:px-3 md:py-2 md:mx-2" href="/restaria">Restaria</Link>
          <Link className="py-4 border-b-2 px-auto border-b-zinc-700 md:cursor-pointer md:bg-transparent md:border-none md:px-3 md:py-2 md:mx-2" href="/cafe">Café</Link>
          <Link className="py-4 border-b-2 px-auto border-b-zinc-700 md:cursor-pointer md:bg-transparent md:border-none md:px-3 md:py-2 md:mx-2" href="/over-ons">Over Ons</Link>
          <Link className="py-4 px-auto md:cursor-pointer md:bg-transparent md:px-3 md:py-2 md:mx-2" href="/contact">Contact</Link>
          <Link className="py-4 md:cursor-pointer bg-green-700 md:rounded md:px-3 md:py-2 md:mx-2 md:hidden lg:inline" href="/bestellen">Bestellen</Link>
        </div>
        <div className="hidden md:hidden z-10 absolute top-0 left-0 w-full h-screen bg-black opacity-75" onClick={handleMenu} ref={menuShadow}></div>
      </div>
    </nav>
  );
}
 
export default NavBar;