"use client"

import { useState } from "react"
import { LogIn, User, UserRoundPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ConfettiButton } from "@/components/ui/confetti"

type AuthMode = "login" | "register"

const AuthModal = () => {
  const [mode, setMode] = useState<AuthMode>("login")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="hidden sm:inline-flex">
          Entrar
          <User className="size-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{mode === "login" ? "Entrar na sua conta" : "Criar nova conta"}</DialogTitle>
          <DialogDescription>
            {mode === "login"
              ? "Acesse sua conta para acompanhar pedidos e favoritos."
              : "Cadastre-se para comprar mais rápido e receber ofertas exclusivas."}
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-lg bg-muted p-1">
          <div className="grid grid-cols-2 gap-1">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`inline-flex h-9 items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors ${mode === "login"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <LogIn className="size-4" />
              Entrar
            </button>
            <button
              type="button"
              onClick={() => setMode("register")}
              className={`inline-flex h-9 items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors ${mode === "register"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <UserRoundPlus className="size-4" />
              Cadastrar
            </button>
          </div>
        </div>

        {mode === "login" ? (
          <form
            className="space-y-3"
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <div className="space-y-1.5">
              <label htmlFor="login-email" className="text-sm font-medium text-foreground">
                E-mail
              </label>
              <input
                id="login-email"
                type="email"
                required
                placeholder="voce@email.com"
                className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none ring-ring/50 transition-shadow focus:ring-2"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="login-password" className="text-sm font-medium text-foreground">
                Senha
              </label>
              <input
                id="login-password"
                type="password"
                required
                placeholder="********"
                className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none ring-ring/50 transition-shadow focus:ring-2"
              />
            </div>
            <ConfettiButton type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Entrar
            </ConfettiButton>
          </form>
        ) : (
          <form
            className="space-y-3"
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <div className="space-y-1.5">
              <label htmlFor="register-name" className="text-sm font-medium text-foreground">
                Nome completo
              </label>
              <input
                id="register-name"
                type="text"
                required
                placeholder="Seu nome"
                className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none ring-ring/50 transition-shadow focus:ring-2"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="register-email" className="text-sm font-medium text-foreground">
                E-mail
              </label>
              <input
                id="register-email"
                type="email"
                required
                placeholder="voce@email.com"
                className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none ring-ring/50 transition-shadow focus:ring-2"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="register-password" className="text-sm font-medium text-foreground">
                Senha
              </label>
              <input
                id="register-password"
                type="password"
                required
                minLength={6}
                placeholder="Mínimo 6 caracteres"
                className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none ring-ring/50 transition-shadow focus:ring-2"
              />
            </div>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Criar conta
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default AuthModal
