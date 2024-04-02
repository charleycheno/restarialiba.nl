export default function AddCardLoadingSkeleton(props) {
  return (
    <div className="flex items-center w-full border-y border-zinc-100 p-2 gap-x-2">
      <div className="h-12 w-12 aspect-square rounded-full bg-zinc-300 animate-pulse"></div>
      <div className="bg-zinc-300 w-1/2 h-4 rounded animate-pulse"></div>
    </div>
  )
}
