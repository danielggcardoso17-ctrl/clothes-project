import { BorderBeam } from "@/components/ui/border-beam"
import Cards from "./Cards"

const products = [
  {
    id: "blazer-essencial",
    image: "/shopping.webp",
    title: "Blazer Essencial",
    description: "Estrutura leve e acabamento premium para compor looks elegantes.",
    price: 349.9,
    tag: "Best-seller",
  },
  {
    id: "camisa-oxford",
    image: "/shopping.webp",
    title: "Camisa Oxford",
    description: "Modelo versátil com toque macio para uso social ou casual.",
    price: 179.9,
    tag: "Novo",
  },
  {
    id: "calca-slim",
    image: "/shopping.webp",
    title: "Calça Slim",
    description: "Caimento moderno com elasticidade na medida para o dia a dia.",
    price: 229.9,
    tag: "Favorito",
  },
  {
    id: "jaqueta-urbana",
    image: "/shopping.webp",
    title: "Jaqueta Urbana",
    description: "Proteção e estilo em uma peça atemporal para dias mais frios.",
    price: 399.9,
    tag: "Lançamento",
  },
  {
    id: "polo-premium",
    image: "/shopping.webp",
    title: "Polo Premium",
    description: "Tecido respirável com acabamento refinado para looks limpos.",
    price: 159.9,
    tag: "Coleção",
  },
  {
    id: "sueter-tricot",
    image: "/shopping.webp",
    title: "Suéter Tricot",
    description: "Conforto térmico com visual sofisticado e textura elegante.",
    price: 269.9,
    tag: "Exclusivo",
  },
  {
    id: "tenis-minimal",
    image: "/shopping.webp",
    title: "Tênis Minimal",
    description: "Design discreto e versátil para combinar com qualquer produção.",
    price: 289.9,
    tag: "Edição",
  },
  {
    id: "relogio-classico",
    image: "/shopping.webp",
    title: "Relógio Clássico",
    description: "Um acessório marcante para elevar o visual com personalidade.",
    price: 499.9,
    tag: "Premium",
  },
]

const Products = () => {
  return (
    <section id="produtos" className="space-y-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Destaques da semana
          </p>
          <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Produtos selecionados para você
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Uma curadoria pensada para homens que valorizam estilo, qualidade e conforto.
          </p>
        </div>
        <span className="relative overflow-hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
          Frete grátis acima de R$ 299
          <BorderBeam duration={5} size={50} />
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <Cards
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            tag={product.tag}
          />
        ))}
      </div>
    </section>
  )
}
export default Products
