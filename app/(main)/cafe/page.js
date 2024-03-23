export const metadata = {
  title: "Café",
  description: "Het plekje van Boven-Hardinxveld!",
}

export default function Page() {
  return (
    <div className="flex flex-col items-center text-center py-10 px-4">
      <h1 className="text-3xl font-bold">Café</h1>
      <p className="mt-6 max-w-120">Welkom in het café van Restaria Liba! Ontsnap aan de drukte en geniet van een ontspannen sfeer terwijl je van je favoriete drankjes en hapjes geniet. Of je nu zin hebt in een verfrissend drankje, een heerlijke koffie of een lichte snack, ons café biedt de perfecte plek om tot rust te komen en te genieten van goede gesprekken met vrienden en familie. Kom langs en ontdek de gezelligheid van ons café bij Restaria Liba!</p>
      <p className="my-6 text-xl italic">Deze website is momenteel in onderhoud</p>
      <p>Website gemaakt door <a href="https://instagram.com/charleychen18" className="underline text-blue-800">Charley</a></p>
    </div>
  )
}
