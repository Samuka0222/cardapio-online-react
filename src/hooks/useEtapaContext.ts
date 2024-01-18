import { CarrinhoEtapaContext } from "@/context/CarrinhoEtapas";
import IEtapa from "@/interfaces/IEtapa";
import { useContext } from "react";

export default function useEtapaContext() {
  const contexto = useContext(CarrinhoEtapaContext);

  if (!contexto) {
    throw new Error('Contexto não foi encontrado.');
  }

  const {
    etapas,
    setEtapas,
    etapaAtual,
    setEtapaAtual
  } = contexto

  function concluiEtapa(index: number) {
    const etapasAtualizadas = etapas.map((item, i) => ({
      ...item,
      concluido: i === index ? true : item.concluido,
      atual: i === index ? false : item.atual
    }));

    setEtapas(() => etapasAtualizadas);
    alteraEtapaAtual(index + 1, etapasAtualizadas);
  }

  function alteraEtapaAtual(index: number, arrayAtualizado: IEtapa[]) {
    const etapasAtualizadas = arrayAtualizado.map((item, i) => ({
      ...item,
      atual: i === index
    }));

    setEtapas(() => etapasAtualizadas);
    setEtapaAtual(etapasAtualizadas[index])
  }

  function voltarEtapa(index: number) {
    const etapasAtualizadas = etapas.map((item, i) => ({
      ...item,
      concluido: i === index ? true : item.concluido,
      atual: i === index ? false : item.atual
    }));

    setEtapas(() => etapasAtualizadas);
    alteraEtapaAtual(index, etapasAtualizadas);
  }

  return {
    etapas,
    etapaAtual,
    concluiEtapa,
    alteraEtapaAtual,
    voltarEtapa
  }
}