import AddCard from "@/app/_components/Bestellen/AddCard"

export default async function Page({ params }) {
  const request = await fetch(`${process.env.API_ENDPOINT}/get-products-from-category`, {
    method: "POST",
    body: JSON.stringify({
      category: params.categorie
    }),
    "content-type": "application/json",
    cache: 'no-store'
  })
  const data = await request.json()
  const products = data.products
  
  return (
    <div className="flex flex-col">
      {
        products.map((product) => {
          var prices = []
          for (let i = 0; i < product.versions.length; i++) {
            const version = product.versions[i];
            prices.push(version.price)
          }
          return <AddCard name={product.name} key={product._id} prices={prices} />
        })
      }
    </div>
  )
}
