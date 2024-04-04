import TileCard from "@/app/_components/Bestellen/TileCard"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex flex-col gap-4 mx-auto p-4">
      <div>
        <h2 className="mb-2 text-xl font-medium">Populair 🔥</h2>
        <div className="grid grid-cols-2 gap-2">
          <TileCard href="/bestellen/product/heineken">Heineken</TileCard>
          <TileCard href="/bestellen/product/frikandel">Frikandel</TileCard>
          <TileCard href="/bestellen/product/hamburger">Hamburger</TileCard>
          <TileCard href="/bestellen/product/koffie">Koffie</TileCard>
        </div>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-medium">Categorieën</h2>
        <div className="grid grid-cols-2 gap-2">
          <TileCard href="/bestellen/patat">Patat</TileCard>
          <TileCard href="/bestellen/snacks">Snacks</TileCard>
          <TileCard href="/bestellen/koude-broodjes">Koude broodjes</TileCard>
          <TileCard href="/bestellen/tostis">Tosti's</TileCard>
          <TileCard href="/bestellen/luxe-pistolet">Luxe pistolet</TileCard>
          <TileCard href="/bestellen/sandwiches">Sandwiches</TileCard>
          <TileCard href="/bestellen/12-uurtje">12-uurtje</TileCard>
          <TileCard href="/bestellen/lunch-specialiteit">Lunch specialiteit</TileCard>
          <TileCard href="/bestellen/soepen">Soepen</TileCard>
          <TileCard href="/bestellen/uitsmijters">Uitsmijters</TileCard>
          <TileCard href="/bestellen/burgers">Burgers</TileCard>
          <TileCard href="/bestellen/kleine-gerechten">Kleine gerechten</TileCard>
          <TileCard href="/bestellen/salades">Salades</TileCard>
          <TileCard href="/bestellen/voor-bij-de-borrel">Voor bij de borrel</TileCard>
          <TileCard href="/bestellen/hoofd-gerechten">Hoofdgerechten</TileCard>
          <TileCard href="/bestellen/milkshake">Milkshake</TileCard>
          <TileCard href="/bestellen/ijskoffie">IJskoffie</TileCard>
          <TileCard href="/bestellen/frisdranken">Frisdranken</TileCard>
          <TileCard href="/bestellen/bier">Bier</TileCard>
          <TileCard href="/bestellen/wijn">Wijn</TileCard>
          <TileCard href="/bestellen/mix-en-sterke-dranken">Mix en sterke dranken</TileCard>
          <TileCard href="/bestellen/warme-dranken">Warme dranken</TileCard>
        </div>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-medium">Diversen</h2>
        <div className="grid grid-cols-2 gap-2">
          <TileCard href="/bestellen/overig" className="flex items-center justify-center text-xl font-medium h-24 bg-zinc-200 rounded-xl">Overig</TileCard>
          <TileCard href="/bestellen/cadeaukaarten" className="flex items-center justify-center text-xl font-medium h-24 bg-zinc-200 rounded-xl">Cadeaukaarten</TileCard>
          <Link href="/bestellen/producten" className="flex items-center justify-center text-xl font-medium h-32 bg-zinc-200 rounded-xl col-span-2">Alle producten</Link>
        </div>
      </div>
    </div>
  )
}
