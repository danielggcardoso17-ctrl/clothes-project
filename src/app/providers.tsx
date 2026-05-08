"use client"

import type { ReactNode } from "react"
import { CartProvider } from "@/components/cart/cart-context"

const Providers = ({ children }: { children: ReactNode }) => {
  return <CartProvider>{children}</CartProvider>
}

export default Providers
