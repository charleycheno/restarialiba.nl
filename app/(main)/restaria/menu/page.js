export const metadata = {
  title: "Menu",
  description: "Het plekje van Boven-Hardinxveld!",
}

export default function Page() {
  return (
    <div className="flex flex-col items-center text-center py-10 px-4">
      <h1 className="text-3xl font-bold">Menu</h1>
      <p className="mt-6 w-120">Ontdek een smaakvol assortiment bij Restaria Liba! Van sappige hamburgers tot knapperige frietjes en verse salades, ons menu heeft voor elk wat wils. Geniet in ons gezellige restaurant of haal je favorieten gemakkelijk af voor thuis. Kom langs en proef het zelf!</p>
      <p className="my-6 text-xl italic">Deze website is momenteel in onderhoud</p>
      <p>Website gemaakt door <a href="https://instagram.com/charleychen18" className="underline text-blue-800">Charley</a></p>
    </div>
  )
}
