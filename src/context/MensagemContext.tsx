import { createContext, useState } from "react";

interface IMensagem {
  tipo: string;
  texto: string;
}

interface MensagemContextoProps {
  mensagem: IMensagem,
  setMensagem: React.Dispatch<React.SetStateAction<IMensagem>>
}

interface MensagemProviderProps {
  children: React.ReactNode
}

export const MensagemContexto = createContext<MensagemContextoProps | undefined>(undefined);
MensagemContexto.displayName = "Mensagem"

export const MensagemProvider = ({ children }: MensagemProviderProps) => {
  const [mensagem, setMensagem] = useState({
    tipo: '',
    texto: ''
  })
  

  return (
    <MensagemContexto.Provider value={{mensagem, setMensagem}}>
      {children}
    </MensagemContexto.Provider>
  )
}