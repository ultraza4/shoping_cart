import { createContext, ReactNode, useContext, useState } from "react";

type ShopingCartProviderProps = {
  children: ReactNode;
};
type ShopingCartContext = {
  getitemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
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

  return (
    <ShopingCartContext.Provider value={{}}>
      {children}
    </ShopingCartContext.Provider>
  );
}
