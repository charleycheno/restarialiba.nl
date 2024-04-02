import Link from "next/link"

export default function Page() {
  return (
    <div className="container flex flex-col gap-4 mx-auto p-4">
      <div>
        <h2 className="mb-2 text-xl font-medium">Populair 🔥</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/bestellen/bier" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Heineken</Link>
          <Link href="/bestellen/snacks" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Frikandel</Link>
          <Link href="/bestellen/burgers" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Hamburger</Link>
          <Link href="/bestellen/warme-dranken" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Koffie</Link>
        </div>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-medium">Categorieën</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/bestellen/patat" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Patat</Link>
          <Link href="/bestellen/snacks" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Snacks</Link>
          <Link href="/bestellen/koude-broodjes" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Koude broodjes</Link>
          <Link href="/bestellen/tostis" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Tosti's</Link>
          <Link href="/bestellen/luxe-pistolet" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Luxe pistolet</Link>
          <Link href="/bestellen/sandwiches" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Sandwiches</Link>
          <Link href="/bestellen/12-uurtje" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">12-uurtje</Link>
          <Link href="/bestellen/lunch-specialiteit" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Lunch specialiteit</Link>
          <Link href="/bestellen/soepen" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Soepen</Link>
          <Link href="/bestellen/uitsmijters" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Uitsmijters</Link>
          <Link href="/bestellen/burgers" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Burgers</Link>
          <Link href="/bestellen/kleine-gerechten" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Kleine gerechten</Link>
          <Link href="/bestellen/salades" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Salades</Link>
          <Link href="/bestellen/voor-bij-de-borrel" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Voor bij de borrel</Link>
          <Link href="/bestellen/hoofd-gerechten" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Hoofdgerechten</Link>
          <Link href="/bestellen/milkshake" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Milkshake</Link>
          <Link href="/bestellen/ijskoffie" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">IJskoffie</Link>
          <Link href="/bestellen/frisdranken" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Frisdranken</Link>
          <Link href="/bestellen/bier" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Bier</Link>
          <Link href="/bestellen/wijn" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Wijn</Link>
          <Link href="/bestellen/mix-en-sterke-dranken" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Mix en sterke dranken</Link>
          <Link href="/bestellen/warme-dranken" className="flex items-center justify-center text-center text-xl font-medium h-28 border-4 rounded-xl">Warme dranken</Link>
        </div>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-medium">Diversen</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="/bestellen/overig" className="flex items-center justify-center text-xl font-medium h-24 border-4 rounded-xl">Overig</Link>
          <Link href="/bestellen/cadeaukaarten" className="flex items-center justify-center text-xl font-medium h-24 border-4 rounded-xl">Cadeaukaarten</Link>
          <Link href="/bestellen/producten" className="flex items-center justify-center text-xl font-medium h-32 border-4 rounded-xl col-span-2">Alle producten</Link>
        </div>
      </div>
    </div>
  )
}
