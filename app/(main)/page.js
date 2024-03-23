export const metadata = {
  description: "Het plekje van Boven-Hardinxveld!",
}

export default async function Page() {
  return (
    <div className="text-center py-10 px-4">
      <h1 className="text-3xl font-bold">Restaria Liba</h1>
      <h2 className="text-xl font-bold">Boven-Hardinxveld</h2>
      <br />
      <p className="text-xl italic">Deze website is momenteel in onderhoud</p>
      <br />
      <p>Website gemaakt door <a href="https://instagram.com/charleychen18" className="underline text-blue-800">Charley</a></p>
    </div>
  );
}
