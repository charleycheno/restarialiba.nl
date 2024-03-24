import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
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
