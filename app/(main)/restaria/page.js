export const metadata = {
  title: "Restaria",
  description: "Het plekje van Boven-Hardinxveld!",
}

export default function Page() {
  return (
    <div className="flex flex-col items-center text-center py-10 px-4">
      <h1 className="text-3xl font-bold">Restaria</h1>
      <p className="mt-6 w-120">Restaria Liba biedt niet alleen een uitgebreid assortiment aan heerlijke gerechten voor gasten die graag ter plaatse willen genieten, maar ook een handige afhaalservice voor degenen die liever thuis van onze smaken genieten. Bestel eenvoudig online of telefonisch, en haal je favoriete gerechten op wanneer het jou uitkomt. We kijken ernaar uit om je te verwelkomen in ons restaurant of je bestelling gereed te maken voor afhalen!</p>
      <p className="my-6 text-xl italic">Deze website is momenteel in onderhoud</p>
      <p>Website gemaakt door <a href="https://instagram.com/charleychen18" className="underline text-blue-800">Charley</a></p>
    </div>
  )
}
