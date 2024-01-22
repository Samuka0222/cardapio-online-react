import { MensagemContexto } from "@/context/MensagemContext";
import { useContext } from "react";

export default function useMensagemContext() {
  const contextoMensagem = useContext(MensagemContexto);

  if (!contextoMensagem) {
    throw new Error('Contexto não foi encontrado.');
  }

  const { mensagem, setMensagem } = contextoMensagem;

  function alteraMensagem(tipo: string, texto: string) {
    setMensagem({
      tipo: tipo,
      texto: texto
    })
  }

  function gerarErro(texto: string) {
    console.log('função foi chamada desnecessariamente.')
    setMensagem({
      tipo: 'erro',
      texto: texto
    })
  }

  return {
    mensagem,
    alteraMensagem,
    gerarErro
  }
}