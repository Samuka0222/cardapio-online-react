import { EnderecoContext } from "@/context/EnderecoContext";
import IEndereco from "@/interfaces/IEndereco";
import axios from "axios";
import { useContext } from "react"
import useMensagemContext from "./useMensagemContext";

export default function useEnderecoContext() {
  const contextoEndereco = useContext(EnderecoContext);
  const contextoMensagem = useMensagemContext();

  if (!contextoEndereco || !contextoMensagem) {
    throw new Error('Não foi possível localizar o contexto');
  }

  const { endereco, setEndereco, enderecoValido, setEnderecoValido } = contextoEndereco;
  const { gerarErro } = contextoMensagem;

  function alteraCampo(campo: string, valor: string | undefined) {
    setEndereco({ ...endereco, [campo]: valor });
  }

  function validaEndereco() {
    for (const key in endereco) {
      if (key !== 'complemento' && endereco[key as keyof IEndereco] === '') {
        gerarErro('Preencha todos os campos antes de prosseguir');
        return false;
      }

      const validaNumero = /^\d+$/;
      if (!validaNumero.test(endereco.numero)) {
        gerarErro('O número deve ser preenchido apenas com números.')
        return false
      }
    }
    setEnderecoValido(true);
  }

  async function buscaCep(cep: string) {
    const validaCep = /^[0-9]{8}$/
    if (!validaCep.test(cep)) {
      gerarErro('O CEP deve ser preenchido apenas com números.')
      return false
    }

    try {
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
    } catch(erro) {
      if (axios.isAxiosError(erro)) {
        gerarErro('Erro na requisição, tente novamente.')
      } else {
        gerarErro('CEP não encontrado, tente novamente.')
      }
    }

  }

  return {
    endereco,
    enderecoValido,
    validaEndereco,
    buscaCep,
    alteraCampo
  }
}