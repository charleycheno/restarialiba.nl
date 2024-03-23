import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center p-2 mt-10 lg:m-0 lg:justify-center lg:h-screen">
      <h1 className="text-5xl font-bold">404</h1>
      <h2 className="text-3xl text-center font-bold my-10">Deze pagina kan niet worden gevonden</h2>
      <p className="text-lg mb-4">Navigeer snel naar</p>
      <div className="flex flex-wrap justify-center text-white gap-3">
        <Link className="flex items-center justify-center px-5 py-3 font-semibold transition-transform bg-blue-700 rounded-lg hover:scale-105 gap-x-2" href="/"><span>Homepagina</span></Link>
        <Link className="flex items-center justify-center px-5 py-3 font-semibold transition-transform bg-green-700 rounded-lg hover:scale-105 gap-x-2" href="/bestellen"><span>Online Bestellen</span></Link>
      </div>
    </div>
  )
}