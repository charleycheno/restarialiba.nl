import ProductPageLoadingSkeleton from "@/app/_components/Bestellen/ProductPageLoadingSkeleton"
import { Suspense } from "react"

async function getData(params) {
  const response = await fetch(`${process.env.API_ENDPOINT}/get-product`, {
    method: "POST",
    body: JSON.stringify({
      id: params.id
    }),
    cache: "no-store"
  })
 
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return response.json()
}

async function ProductPage(props) {
  const data = await getData(props.params)
  const product = data.product

  return (
    <div className="flex flex-col gap-4 p-4">
      <button className="bg-green-600 rounded-full h-10 text-white font-medium">Toevoegen</button>
      <div className="flex gap-4 flex-wrap">
        <div className="bg-zinc-200 w-16 h-16 rounded-full"></div>
        <div className="flex flex-col justify-center">
          <h1 className="text-lg font-medium">{product.name}</h1>
          <span className="text-sm font-medium text-zinc-600">{product.id}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <div className="px-3 py-1 text-sm text-zinc-600 border rounded-full active:bg-zinc-200">{product.category}</div>
        <div className="px-3 py-1 text-sm text-zinc-600 border rounded-full active:bg-zinc-200">[allergie info 1]</div>
        <div className="px-3 py-1 text-sm text-zinc-600 border rounded-full active:bg-zinc-200">[allergie info 2]</div>
      </div>
      <span className="font-medium text-lg">Prijs: €3,00</span>
      <p>{product.description}</p>
    </div>
  )
}

export default async function Page({ params }) {
  return (
    <Suspense fallback={<ProductPageLoadingSkeleton />}>
      <ProductPage params={params} />
    </Suspense>
  )
}
