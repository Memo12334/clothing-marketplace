import { ReactNode, createContext, useContext, useState } from 'react'
import ShoppingCart from '../components/ShoppingCart'
import { StoreProps } from '../shared/interfaces/item.interface'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  store: StoreProps
  quantity: number
}

export type ShoppingCartContext = {
  openCart?: () => void
  closeCart?: () => void
  getItemQuantity?: (store: StoreProps) => number
  increaseCartQuantity?: (store: StoreProps) => void
  decreaseCartQuantity?: (store: StoreProps) => void
  removeFromCart?: (store: StoreProps) => void
  cartQuantity?: number
  cartItems?: CartItem[]
}

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const cartQuantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function getItemQuantity(store: StoreProps) {
    return cartItems.find(item => item.store.name === store.name)?.quantity ?? 0
  }

  function increaseCartQuantity(store: StoreProps) {
    setCartItems(currItems => {
      const item = currItems.find(item => item.store.name === store.name)

      if (item) {
        item.quantity += 1
        return [...currItems]
      }

      return [...currItems, { store, quantity: 1 }]
    })
  }

  function decreaseCartQuantity(store: StoreProps) {
    setCartItems(currItems => {
      const item = currItems.find(item => item.store.name === store.name)

      if (item) {
        item.quantity -= 1

        if (item.quantity === 0) {
          return currItems.filter(item => item.store.name !== store.name)
        }
      }

      return [...currItems]
    })
  }

  function removeFromCart(store: StoreProps) {
    setCartItems(currItems => currItems.filter(item => item.store.name !== store.name))
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}