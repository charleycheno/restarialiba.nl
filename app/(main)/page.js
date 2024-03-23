export const metadata = {
  description: "Het plekje van Boven-Hardinxveld!",
}

export default async function Page() {
  return (
    <div className="flex flex-col items-center text-center py-10 px-4">
      <h1 className="text-3xl font-bold">Restaria Liba</h1>
      <h2 className="text-xl font-bold">Boven-Hardinxveld</h2>
      <p className="mt-6 max-max-w-120">Welkom bij Restaria Liba! Ontdek de smaakvolle wereld van heerlijke gerechten die wij te bieden hebben. Van sappige hamburgers tot knapperige frietjes, bij ons vind je alles voor een smakelijke maaltijd. Bekijk ons menu en plaats vandaag nog je bestelling!</p>
      <p className="my-6 text-xl italic">Deze website is momenteel in onderhoud</p>
      <p>Website gemaakt door <a href="https://instagram.com/charleychen18" className="underline text-blue-800">Charley</a></p>
    </div>
  );
}
