import Logo from "@/public/logo.png"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
   <footer className="flex flex-col items-center bg-zinc-800 text-white">
      <div className="container flex flex-col gap-8 p-16 lg:flex-row justify-evenly lg:px-0">
         <div className="flex flex-col items-start gap-1">
            <h2 className="mb-4 text-xl font-semibold">Snel naar</h2>
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/restaria" className="hover:underline">Restaria</Link>
            <Link href="/cafe" className="hover:underline">Café</Link>
            <Link href="/over-ons" className="hover:underline">Over Ons</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/bestellen" className="hover:underline">Bestellen</Link>
         </div>
         <div className="flex flex-col items-start gap-1">
            <h2 className="mb-4 text-xl font-semibold">Volg ons ook op</h2>
            <Link href="https://facebook.com" target="_blank" className="hover:underline">Facebook</Link>
            <Link href="https://instagram.com/restaria_liba" target="_blank" className="hover:underline">Instagram</Link>
            <Link href="https://snapchat.com" target="_blank" className="hover:underline">Snapchat</Link>
            <Link href="https://maps.app.goo.gl/m35GrQRpqGi4EXeaA" target="_blank" className="hover:underline">Google Maps</Link>
         </div>
         <div className="flex flex-col items-start gap-1">
            <h2 className="mb-4 text-xl font-semibold">Neem contact op</h2>
            <Link href="https://maps.app.goo.gl/m35GrQRpqGi4EXeaA" target="_blank" className="hover:underline">Rivierdijk 259</Link>
            <Link href="https://maps.app.goo.gl/m35GrQRpqGi4EXeaA" target="_blank" className="hover:underline">3372 BP</Link>
            <Link href="https://maps.app.goo.gl/m35GrQRpqGi4EXeaA" target="_blank" className="hover:underline">Boven-Hardinxveld</Link>
            <Link href="/contact" className="hover:underline">www.restarialiba.nl/contact</Link>
            <Link href="mailto:info@restarialiba.nl" className="hover:underline">info@restarialiba.nl</Link>
            <Link href="tel:0184612553" className="hover:underline">0184 612 553</Link>
         </div>
         <div className="flex flex-col items-start gap-1">
            <h2 className="mb-4 text-xl font-semibold">Openingstijden</h2>
            <div className="grid grid-cols-2 gap-y-1 gap-x-3">
               <span>Maandag:</span>
               <span>Gesloten</span>
               <span>Dinsdag:</span>
               <span>11:30 - 20:00</span>
               <span>Woensdag:</span>
               <span>11:30 - 20:00</span>
               <span>Donderdag:</span>
               <span>11:30 - 20:00</span>
               <span>Vrijdag:</span>
               <span>11:30 - 21:00</span>
               <span>Zaterdag:</span>
               <span>11:30 - 21:00</span>
               <span>Zondag:</span>
               <span>Gesloten</span>
            </div>
         </div>
         <Link href="/" className="flex items-center justify-center">
            <Image src={Logo} className="w-40" />
         </Link>
      </div>
   </footer>
  )
}
