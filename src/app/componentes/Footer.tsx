import Link from "next/link"
import { Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer id="contato" className="border-t border-border bg-primary text-primary-foreground/80">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-xl font-bold tracking-[0.16em] text-primary-foreground">HOMME</h2>
          <p className="mt-3 text-sm text-primary-foreground/70">
            Moda masculina com identidade contemporânea para homens que valorizam presença.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.14em] text-primary-foreground uppercase">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li>
              <Link href="#inicio" className="transition-colors hover:text-accent">
                Início
              </Link>
            </li>
            <li>
              <Link href="#produtos" className="transition-colors hover:text-accent">
                Produtos
              </Link>
            </li>
            <li>
              <Link href="#colecoes" className="transition-colors hover:text-accent">
                Coleções
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.14em] text-primary-foreground uppercase">
            Contato
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li className="inline-flex items-center gap-2">
              <Mail className="size-4" />
              contato@homme.com
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-4" />
              São Paulo, Brasil
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Send className="size-4" />
                @homme.oficial
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.14em] text-primary-foreground uppercase">
            Newsletter
          </h3>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Receba novidades e ofertas exclusivas da nova coleção.
          </p>
          <div className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="h-9 w-full rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-3 text-sm text-primary-foreground placeholder:text-primary-foreground/55 focus:outline-none"
            />
            <Button type="button" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Assinar
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 py-4 text-center text-sm text-primary-foreground/60">
        © 2026 HOMME. Todos os direitos reservados.
      </div>
    </footer>
  )
}

export default Footer
