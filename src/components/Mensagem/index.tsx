import useMensagemContext from "@/hooks/useMensagemContext";
import { useEffect, useState } from "react";


export default function Mensagem() {
  const contexto = useMensagemContext();

  if (!contexto) {
    throw new Error("contexto não está definido.");
  }

  const { mensagem } = contexto;
  const [mostrarMensagem, setMostrarMensagem] = useState(false);
  const [animacaoSaida, setAnimacaoSaida] = useState(false);

  useEffect(() => {
    let mostrarTimeout: number;
    let animacaoTimeout: number;

    if (mensagem.texto !== '') {
      setMostrarMensagem(true);

      mostrarTimeout = setTimeout(() => {
        setAnimacaoSaida(true);
      }, 2000);

      animacaoTimeout = setTimeout(() => {
        setMostrarMensagem(false);
        setAnimacaoSaida(false);
      }, 2400);
    }

    return () => {
      clearTimeout(mostrarTimeout);
      clearTimeout(animacaoTimeout);
    }
  }, [mensagem]);

  return (
    <div
      className={`${
        mostrarMensagem ? 'block' : 'hidden'
      } ${
        mensagem.tipo === 'erro' ? 'bg-red' : 'bg-green'
      } fixed p-4 z-50 rounded-2xl text-white font-medium top-5 right-2 animate-slideDown ${
        animacaoSaida ? 'animate-slideUp' : ''
      }`}
    >
      <p>{mensagem.texto}</p>
    </div>
  );
}
