"use client"

import AddCard from "@/app/_components/Bestellen/AddCard"

export default function Page({ params }) {
  var items = []

  for(let i = 1; i <= 100; i++) {
    items.push(i)
  }
  
  return (
    <div className="flex flex-col">
      {
        items.map((item) => {
          return <AddCard name={"Product uit categorie: " + params.categorie} id="1" price="€100,00" />
        })
      }
    </div>
  )
}
