import AddCard from "@/app/_components/Bestellen/AddCard"

export default function Page() {
  var items = []

  for(let i = 1; i <= 100; i++) {
    items.push(i)
  }
  
  return (
    <div className="flex flex-col">
      {
        items.map((item) => {
          return <AddCard name="Frikandel" id="1" price="€2,50" />
        })
      }
    </div>
  )
}
