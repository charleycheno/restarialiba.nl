import OrderAppNav from "@/components/OrderAppNav"
import Link from "next/link"

export const metadata = {
  title: {
    template: "%s | Online Bestellen",
    default: "Online Bestellen",
  },
  description: "Bestel online eten bij Restaria Liba!",
}

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-dvh w-full">
      <main className="flex-1">
        {children}
      </main>
      <OrderAppNav />
    </div>
  )
}
