import Link from "next/link"

export default function Page() {
  return (
    <div className="container flex flex-col gap-4 mx-auto p-4">
      <div>
        <h2 className="mb-2 text-xl font-medium">Populair 🔥</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-28 border-4 rounded-xl"></div>
          <div className="h-28 border-4 rounded-xl"></div>
          <div className="h-28 border-4 rounded-xl"></div>
          <div className="h-28 border-4 rounded-xl"></div>
        </div>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-medium">Eten 🍴</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-28 border-4 rounded-xl"></div>
          <div className="h-28 border-4 rounded-xl"></div>
          <div className="h-28 border-4 rounded-xl"></div>
          <div className="h-28 border-4 rounded-xl"></div>
          <div className="h-28 border-4 rounded-xl"></div>
          <div className="h-28 border-4 rounded-xl"></div>
        </div>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-medium">Dranken 🥤</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-28 border-4 rounded-xl"></div>
          <div className="h-28 border-4 rounded-xl"></div>
          <div className="h-28 border-4 rounded-xl"></div>
          <div className="h-28 border-4 rounded-xl"></div>
        </div>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-medium">Diversen</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-24 border-4 rounded-xl"></div>
          <div className="h-24 border-4 rounded-xl"></div>
          <Link href="/bestellen/alle-producten" className="h-32 border-4 rounded-xl col-span-2">Alle producten</Link>
        </div>
      </div>
    </div>
  )
}
