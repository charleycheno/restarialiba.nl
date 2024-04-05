import AddCard from "@/app/_components/Bestellen/AddCard"
import AddCardLoadingSkeleton from "@/app/_components/Bestellen/AddCardLoadingSkeleton"
import { Suspense } from "react"

async function getData() {
  const response = await fetch(`${process.env.API_ENDPOINT}/get-products`, {
    method: "POST",
    cache: "no-store"
  })
 
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return response.json()
}

async function AddCardList() {
  const data = await getData()
  const products = data.products

  return (
    <div className="flex flex-col">
      {
        products.map((product) => {
          return <AddCard key={product.id} product={product} />
        })
      }
    </div>
  )
}

export default async function Page() {
  return (
    <Suspense fallback={<AddCardLoadingSkeleton />}>
      <AddCardList />
    </Suspense>
  )
}
