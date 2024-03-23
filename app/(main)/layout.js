import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    template: "%s | Restaria Liba",
    default: "Restaria Liba",
  },
  description: "Het plekje van Boven-Hardinxveld!",
}

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
