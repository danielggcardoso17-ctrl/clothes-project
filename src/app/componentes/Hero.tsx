import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden rounded-3xl border border-border bg-primary px-6 py-20 text-primary-foreground shadow-2xl sm:px-10 lg:px-14"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/90">
        <Sparkles className="size-3.5" />
        Nova coleção inverno 2026
      </span>

      <h2 className="mt-6 max-w-2xl text-4xl leading-tight font-bold sm:text-5xl">
        Estilo masculino com elegância urbana
      </h2>
      <p className="mt-4 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
        Descubra peças essenciais para um visual sofisticado, confortável e atual em
        qualquer ocasião.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button
          asChild
          size="lg"
          className="bg-primary-foreground text-black px-5 py-5 rounded-full hover:text-white"
        >
          <Link href="#produtos">
            Ver produtos
            <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-11 rounded-full border-primary-foreground/25 bg-primary-foreground/10 px-6 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
        >
          <Link href="#contato">Falar com consultor</Link>
        </Button>
      </div>

      <div id="colecoes" className="mt-10 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-primary-foreground/70">Alfaiataria</p>
          <p className="mt-2 text-lg font-semibold">Cortes precisos</p>
        </div>
        <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-primary-foreground/70">
            Casual premium
          </p>
          <p className="mt-2 text-lg font-semibold">Conforto com presença</p>
        </div>
        <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-primary-foreground/70">Acessórios</p>
          <p className="mt-2 text-lg font-semibold">Detalhes que elevam</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
