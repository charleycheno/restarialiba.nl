export default function AddCardLoadingSkeleton(props) {
  return (
    <div className="flex items-center w-full border-y border-zinc-100 p-2 gap-x-2 animate-pulse">
      <div className="h-12 w-12 aspect-square rounded-full bg-zinc-300"></div>
      <div className="bg-zinc-300 w-64 h-4 rounded"></div>
    </div>
  )
}
