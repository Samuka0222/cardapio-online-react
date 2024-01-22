import IEndereco from "@/interfaces/IEndereco";
import { createContext, useState } from "react";

interface EnderecoContextProps {
  endereco: IEndereco;
  setEndereco: React.Dispatch<React.SetStateAction<IEndereco>>;
  enderecoValido: boolean;
  setEnderecoValido: React.Dispatch<React.SetStateAction<boolean>>;
}

interface EnderecoProviderProps {
  children: React.ReactNode;
}

export const EnderecoContext = createContext<EnderecoContextProps | undefined>(undefined);
EnderecoContext.displayName = "Endereco";

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

  const [enderecoValido, setEnderecoValido] = useState(false)

  return (
    <EnderecoContext.Provider value={{ endereco, setEndereco, enderecoValido, setEnderecoValido }}>
      {children}
    </EnderecoContext.Provider>
  )
}