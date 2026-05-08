import Link from "next/link"
import AuthModal from "./AuthModal"
import CartSheet from "./CartSheet"

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Coleções", href: "#colecoes" },
  { label: "Contato", href: "#contato" },
]

const Header = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#inicio" className="text-2xl font-bold tracking-[0.2em] text-foreground">
          HOMME
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <AuthModal />
          <CartSheet />
        </div>
      </div>
    </header>
  )
}

export default Header
