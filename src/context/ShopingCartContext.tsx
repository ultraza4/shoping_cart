import { createContext, ReactNode, useContext, useState } from "react";
import { ShopingCart } from "../components/ShopingCart";

type ShopingCartProviderProps = {
  children: ReactNode;
};
type ShopingCartContext = {
  getitemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
  isOpen: boolean
};
type CartItem = {
  id: number;
  quantity: number;
};

const ShopingCartContext = createContext({} as ShopingCartContext);

export function useShopingCartContext() {
  return useContext(ShopingCartContext);
}

export function ShopingCartProvider({ children }: ShopingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false)

  const cartQuantity = cartItems.reduce(
    (sum, item) => item.quantity + sum, 0
  )

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const getitemQuantity = (id: number) => {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  }

  const decreaseCartQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const increaseCartQuantity = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <ShopingCartContext.Provider value={{ 
      getitemQuantity, 
      increaseCartQuantity, 
      decreaseCartQuantity, 
      removeFromCart, 
      closeCart, 
      openCart, 
      cartItems,
      cartQuantity,
      isOpen }}>
      {children}
      <ShopingCart />
    </ShopingCartContext.Provider>
  );
}
