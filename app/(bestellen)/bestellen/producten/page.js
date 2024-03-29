"use client"

import AddCard from "@/components/Bestellen/AddCard"

export default function Page() {
  var items = []

  for(let i = 1; i <= 100; i++) {
    items.push(i)
  }
  
  return (
    <div className="flex flex-col">
      {
        items.map((item) => {
          return <AddCard name="Frikandel" price="€2,50" />
        })
      }
    </div>
  )
}
