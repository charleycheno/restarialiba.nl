import Header from "@/app/_components/Main/Header";
import Footer from "@/app/_components/Main/Footer";

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
