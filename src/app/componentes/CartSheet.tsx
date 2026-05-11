"use client"

import Image from "next/image"
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const CartSheet = () => {
  const { items, itemCount, subtotal, updateQuantity, removeItem, clearCart } = useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative bg-primary text-primary-foreground hover:bg-primary/90">
          <ShoppingBag className="size-4" />
          Sacola
          {itemCount > 0 && (
            <span className="absolute -right-2 -top-2 inline-flex min-w-5 items-center justify-center rounded-full bg-accent px-1 text-xs font-semibold text-accent-foreground">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle>Sacola de compras</SheetTitle>
          <SheetDescription>
            {itemCount > 0
              ? `${itemCount} item(ns) adicionado(s) na sua sacola.`
              : "Sua sacola está vazia."}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="mb-3 size-9 text-muted-foreground" />
              <p className="font-medium text-foreground">Nenhum produto adicionado</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Escolha seus itens favoritos e volte aqui para finalizar a compra.
              </p>
            </div>
          ) : (
            <ul className="space-y-4 py-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 rounded-xl border border-border bg-card p-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={96}
                    className="h-24 w-20 rounded-lg bg-secondary object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-card-foreground">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center gap-1 rounded-lg border border-border p-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon-sm"
                          aria-label={`Diminuir quantidade de ${item.title}`}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="size-4" />
                        </Button>
                        <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon-sm"
                          aria-label={`Aumentar quantidade de ${item.title}`}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="size-4" />
                        </Button>
                      </div>

                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        className="text-muted-foreground hover:text-foreground"
                        aria-label={`Remover ${item.title} da sacola`}
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <SheetFooter className="border-t border-border">
          <div className="w-full space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-lg font-semibold text-foreground">
                {subtotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button
                type="button"
                variant="outline"
                className="w-full bg-gray-600 text-white"
                onClick={clearCart}
                disabled={items.length === 0}
              >
                Limpar sacola
              </Button>
              <Button type="button" className="w-full bg-green-500 text-black font-extrabold " disabled={items.length === 0}>
                Finalizar compra
              </Button>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default CartSheet
