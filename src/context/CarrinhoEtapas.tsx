import IEtapa from "@/interfaces/IEtapa";
import { createContext, useState } from "react";

interface CarrinhoEtapaContext {
  etapas: IEtapa[];
  setEtapas: React.Dispatch<React.SetStateAction<IEtapa[]>>;
  etapaAtual: IEtapa | undefined;
  setEtapaAtual: React.Dispatch<React.SetStateAction<IEtapa | undefined>>;
}

interface CarrinhoEtapaProvider {
  children: React.ReactNode;
}

export const CarrinhoEtapaContext = createContext<CarrinhoEtapaContext | undefined>(undefined)
CarrinhoEtapaContext.displayName = "Etapas do Carrinho";

export const CarrinhoEtapaProvider = ({ children }: CarrinhoEtapaProvider) => {
  const [etapas, setEtapas] = useState(
    [
      {
        etapa: 1,
        atual: true,
        concluido: false
      },
      {
        etapa: 2,
        atual: false,
        concluido: false
      },
      {
        etapa: 3,
        atual: false,
        concluido: false
      }
    ]
  );

  const [etapaAtual, setEtapaAtual] = useState(
    etapas.find(etapa => etapa.atual === true)
  )

  return (
    <CarrinhoEtapaContext.Provider value={{
      etapas,
      setEtapas,
      etapaAtual,
      setEtapaAtual
    }}>
      {children}
    </CarrinhoEtapaContext.Provider>
  )
}