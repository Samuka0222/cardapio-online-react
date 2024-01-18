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

  return {
    mensagem,
    alteraMensagem
  }
}