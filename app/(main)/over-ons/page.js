export const metadata = {
  title: "Over Ons",
  description: "Het plekje van Boven-Hardinxveld!",
}

export default function Page() {
  return (
    <div className="flex flex-col items-center text-center py-10 px-4">
      <h1 className="text-3xl font-bold">Over Ons</h1>
      <p className="mt-6 max-w-120">Bij Restaria Liba draait alles om passie voor lekker eten en uitstekende service. Sinds onze oprichting streven we ernaar om onze gasten te verwennen met kwaliteitsgerechten bereid met verse ingrediënten. Onze toegewijde teamleden staan altijd klaar om je te verwelkomen en je een onvergetelijke eetervaring te bezorgen. Leer meer over onze geschiedenis, waarden en toewijding aan culinaire perfectie.</p>
      <p className="my-6 text-xl italic">Deze website is momenteel in onderhoud</p>
      <p>Website gemaakt door <a href="https://instagram.com/charleychen18" className="underline text-blue-800">Charley</a></p>
    </div>
  )
}
