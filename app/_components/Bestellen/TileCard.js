import Link from "next/link"

export default function TileCard(props) {
  return (
      <Link href={props.href} className="flex items-center justify-center text-center text-xl font-medium h-28 bg-zinc-200 rounded-xl">{props.children}</Link>
   )
}
