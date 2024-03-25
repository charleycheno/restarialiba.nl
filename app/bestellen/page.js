export default function Page() {
  return (
    <div className="container flex flex-col gap-4 mx-auto p-4">
      <div>
          <div className="h-32 border-4 rounded-xl"></div>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-medium">Dranken</h2>
        <div className="grid gap-4">
          <div className="h-32 border-4 rounded-xl"></div>
          <div className="h-32 border-4 rounded-xl"></div>
          <div className="h-32 border-4 rounded-xl"></div>
        </div>
      </div>
      <div>
      <h2 className="mb-2 text-xl font-medium">Eten</h2>
        <div className="grid gap-4">
          <div className="h-32 border-4 rounded-xl"></div>
          <div className="h-32 border-4 rounded-xl"></div>
          <div className="h-32 border-4 rounded-xl"></div>
          <div className="h-32 border-4 rounded-xl"></div>
          <div className="h-32 border-4 rounded-xl"></div>
        </div>
      </div>
    </div>
  )
}
