import AddCard from "@/app/_components/Bestellen/AddCard"
import AddCardLoadingSkeleton from "@/app/_components/Bestellen/AddCardLoadingSkeleton"
import { Suspense } from "react"

async function getData(params) {
  const response = await fetch(`${process.env.API_ENDPOINT}/get-products-from-category`, {
    method: "POST",
    body: JSON.stringify({
      category: params.categorie
    }),
    "content-type": "application/json",
    cache: "no-store"
  })
 
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return response.json()
}

async function AddCardList(props) {
  const data = await getData(props.params)
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

export default async function Page({ params }) {
  return (
    <Suspense fallback={<AddCardLoadingSkeleton />}>
      <AddCardList params={params} />
    </Suspense>
  )
}
