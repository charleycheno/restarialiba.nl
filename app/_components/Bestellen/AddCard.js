import Link from "next/link"

export default function AddCard(props) {
  var formattedPrices
  
  for (let i = 0; i < props.prices.length; i++) {
    const price = props.prices[i];
    if(i == 0) {
      formattedPrices = `€${price.toLocaleString('nl-NL', {minimumFractionDigits: 2})}`
    } else if(i > 0) {
      formattedPrices = formattedPrices + ` · €${price.toLocaleString('nl-NL', {minimumFractionDigits: 2})}`
    }
  }
  return (
    <div className="flex items-center w-full border-y border-zinc-100 p-2 gap-x-2">
      <Link href={"/bestellen/product/" + props.id} className="h-12 w-12 aspect-square rounded-full border-2"></Link>
      <div>
        <h2>{props.name}</h2>
        <span className="text-xs text-zinc-600">💶 {formattedPrices}</span>
      </div>
      <button className="flex items-center gap-2 ml-auto rounded-full font-medium bg-zinc-200 px-4 py-2 active:scale-95 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c26.9 0 50 19.1 55 45.5l37 194.5H459.2c10.9 0 20.4-7.3 23.2-17.8L528.8 49.8c3.4-12.8 16.6-20.4 29.4-16.9s20.4 16.6 16.9 29.4L528.7 234.7c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM344 48V88h40c13.3 0 24 10.7 24 24s-10.7 24-24 24H344v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V136H256c-13.3 0-24-10.7-24-24s10.7-24 24-24h40V48c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>
        <span>Toevoegen</span>
      </button>
    </div>
  )
}
