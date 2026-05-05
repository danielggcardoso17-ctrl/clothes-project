import Footer from "./componentes/Footer"
import Header from "./componentes/Header"
import Hero from "./componentes/Hero"
import Products from "./componentes/Products"


export function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="mt-10"></div>
      <Products />
      <Footer />
    </div>
  )
}

export default Home