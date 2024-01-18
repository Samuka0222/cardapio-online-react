import IEndereco from "@/interfaces/IEndereco";
import { createContext, useState } from "react";

interface EnderecoContextProps {
  endereco: IEndereco;
  setEndereco: React.Dispatch<React.SetStateAction<IEndereco>>
}

interface EnderecoProviderProps {
  children: React.ReactNode;
}

export const EnderecoContext = createContext<EnderecoContextProps | undefined>(undefined);

export const EnderecoProvider = ({ children }: EnderecoProviderProps) => {
  const [endereco, setEndereco] = useState<IEndereco>(
    {
      cep: '',
      logradouro: '',
      bairro: '',
      cidade: '',
      numero: '',
      UF: '',
      complemento: ''
    }
  )

  return (
    <EnderecoContext.Provider value={{ endereco, setEndereco }}>
      {children}
    </EnderecoContext.Provider>
  )
}