import Header from "@/app/_components/Bestellen/Header"
import NavBar from "@/app/_components/Bestellen/NavBar"

export const metadata = {
  title: {
    template: "%s | Online Bestellen",
    default: "Online Bestellen",
  },
  description: "Bestel online eten bij Restaria Liba!",
}

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-dvh w-full overflow-x-clip">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <NavBar />
    </div>
  )
}
