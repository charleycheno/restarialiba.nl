import Menu from "@/components/Menu";
import Cart from "@/components/Cart";

export const metadata = {
  title: {
    template: "%s | Online Bestellen",
    default: "Online Bestellen",
  },
  description: "Bestel online eten bij Restaria Liba!",
}

export default function Layout({ children }) {
  return (
    <div className="flex h-screen w-full">
      <Menu />
      <main className="h-screen flex-grow">
        {children}
      </main>
      <Cart />
    </div>
  )
}
