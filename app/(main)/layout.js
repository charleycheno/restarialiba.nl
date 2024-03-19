import Footer from "@/components/Footer";

export default function Layout({ children }) {
 return (
    <>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
