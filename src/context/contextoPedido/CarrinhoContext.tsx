import ICarrinho from "@/interfaces/ICarrinho";
import { createContext, useState } from "react";

interface CarrinhoContextProps {
  carrinho: ICarrinho[];
  setCarrinho: React.Dispatch<React.SetStateAction<ICarrinho[]>>
  // addProduto: (prato: IPrato) => void;
}

interface CarrinhoProviderProps {
  children: React.ReactNode;
}

export const CarrinhoContext = createContext<CarrinhoContextProps | undefined>(undefined)

export const CarrinhoProvider = ({ children }: CarrinhoProviderProps) => {
  const [carrinho, setCarrinho] = useState<ICarrinho[]>([])

  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  )
}