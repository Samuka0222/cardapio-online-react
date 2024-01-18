import cardapio from "@/data/cardapio.json"
import IPrato from "@/interfaces/IPrato";
import ITag from "@/interfaces/ITag";
import { createContext, useState } from "react";

export interface CardapioContextProps {
  categorias: ITag[];
  pratos: IPrato[];
  categoriaSelecionada: string;
  setCategorias: React.Dispatch<React.SetStateAction<ITag[]>>;
  setPratos: React.Dispatch<React.SetStateAction<IPrato[]>>;
  setCategoriaSelecionada: React.Dispatch<React.SetStateAction<string>>
}

interface CardapioProviderProps {
  children: React.ReactNode;
}

export const CardapioContext = createContext<CardapioContextProps | undefined>(undefined);

export const CardapioProvider = ({ children }: CardapioProviderProps) => {

  const [categorias, setCategorias] = useState<ITag[]>([...new Map(
    cardapio
      .map((item) => ({
        categoria: item.category,
        ativo: item.category === 'churrasco' ? true : false
      }))
      .filter((category) => !!category.categoria)
      .map((category) => [category.categoria, category] as [string, ITag])
  ).values()]);

  const [pratos, setPratos] = useState<IPrato[]>(cardapio)
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('churrasco')

  return (
    <CardapioContext.Provider
      value={{
        categorias, 
        setCategorias, 
        pratos, 
        setPratos,
        categoriaSelecionada,
        setCategoriaSelecionada
      }}
    >
      {children}
    </CardapioContext.Provider>
  )
}

