import Header from "@/app/_components/Bestellen/Header"
import NavBar from "@/app/_components/Bestellen/NavBar"
import { createClient } from "../_utils/supabase/server"
import { redirect } from "next/navigation"

export const metadata = {
  title: {
    template: "%s | Online Bestellen",
    default: "Online Bestellen",
  },
  description: "Bestel online eten bij Restaria Liba!",
}

export default async function Layout({ children }) {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if(error || data?.user == null) {
    redirect("/inloggen")
  }

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
