export default function ProductPageLoadingSkeleton() {
  return (
    <div className="flex flex-col gap-4 p-4 animate-pulse">
      <button className="bg-zinc-200 rounded-full h-10 font-medium"></button>
      <div className="flex gap-4 flex-wrap">
        <div className="bg-zinc-200 w-16 h-16 rounded-full"></div>
        <div className="flex flex-col justify-center gap-2">
          <h1 className="h-4 w-32 bg-zinc-200 rounded-full"></h1>
          <span className="h-4 w-16 bg-zinc-200 rounded-full"></span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <div className="h-6 w-16 px-3 py-1 text-sm bg-zinc-200 border rounded-full"></div>
      </div>
    </div>
  )
}
