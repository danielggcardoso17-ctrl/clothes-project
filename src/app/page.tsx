import Footer from "./componentes/Footer"
import Header from "./componentes/Header"
import Hero from "./componentes/Hero"
import Products from "./componentes/Products"


export function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <Hero />
        <Products />
      </main>
      <Footer />
    </div>
  )
}

export default Home
