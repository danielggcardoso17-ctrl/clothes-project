"use client"

import Image from "next/image"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import { Button } from "@/components/ui/button"

interface CardProps {
  id: string
  image: string
  title: string
  description: string
  price: number
  tag: string
}

const Cards = ({ id, image, title, description, price, tag }: CardProps) => {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id,
      title,
      image,
      price,
    })
  }

  return (
    <article className="group rounded-3xl border border-border bg-card p-3 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden rounded-2xl bg-secondary">
        <span className="absolute left-3 top-3 z-10 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
          {tag}
        </span>
        <Image
          src={image}
          alt={title}
          width={480}
          height={620}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h2 className="mt-4 text-xl font-semibold text-card-foreground">{title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      <p className="mt-4 text-lg font-bold text-foreground">
        {price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </p>

      <Button
        type="button"
        onClick={handleAddToCart}
        className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <ShoppingBag className="size-4" />
        Adicionar à sacola
      </Button>
      <Button
        type="button"
        variant="outline"
        onClick={handleAddToCart}
        className="mt-2 w-full border-border text-foreground hover:bg-secondary"
      >
        Comprar agora
      </Button>
    </article>
  )
}

export default Cards
