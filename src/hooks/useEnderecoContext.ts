import { EnderecoContext } from "@/context/contextoPedido/EnderecoContext";
import axios from "axios";
import { useContext } from "react"

export default function useEnderecoContext() {
  const contexto = useContext(EnderecoContext);

  if (!contexto) {
    throw new Error('Não foi possível localizar o EnderecoContext');
  }

  const { endereco, setEndereco } = contexto;

  function alteraCampo(campo: string, valor: string | undefined) {
    setEndereco({ ...endereco, [campo]: valor });
  }

  async function buscaCep(cep: string) {
    const resposta = (await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data
    const enderecoAtualizado = {
      cep: cep,
      logradouro: resposta.logradouro,
      bairro: resposta.bairro,
      numero: '',
      cidade: resposta.localidade,
      complemento: resposta.complemento,
      UF: resposta.uf
    }

    setEndereco(enderecoAtualizado)
  }

  return {
    endereco,
    buscaCep,
    alteraCampo
  }
}