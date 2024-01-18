import useCarrinhoContext from "@/hooks/useCarrinhoContext";
import useMensagemContext from "@/hooks/useMensagemContext";
import IPrato from "@/interfaces/IPrato";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

interface ItemMenuProps {
  nomePrato: string;
  imagemPrato: string;
  pratoPreco: number;
  prato: IPrato
}

export default function ItemMenu({ nomePrato, imagemPrato, pratoPreco, prato }: ItemMenuProps) {
  const contextoMensagem = useMensagemContext();
  const contextoCarrinho = useCarrinhoContext();

  if (!contextoCarrinho || !contextoMensagem) {
    throw new Error("contexto não está definido.");
  }

  const { addProduto } = contextoCarrinho;
  const { alteraMensagem } = contextoMensagem;

  const [botaoAtivo, setBotaoAtivo] = useState(false);

  function handleClick() {
    addProduto(prato);
    alteraMensagem('sucesso', 'Item adicionado ao carrinho.')
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const animacao = inView ? 'animate__animated animate__fadeInUp' : ''

  return (
    <>
      <li
        ref={ref}
        onClick={() => handleClick()}
        onMouseEnter={() => setBotaoAtivo(true)}
        onMouseLeave={() => setBotaoAtivo(false)}
        className={`bg-white hover:bg-primary hover:cursor-pointer w-11/12 md:h-72 md:w-52 px-3 py-4 lg:px-8 lg:py-6 shadow-padrao flex md:flex-col justify-content items-center box-content rounded-3xl ${animacao}`}>
        <img
          className="w-20 md:w-52 rounded-xl"
          src={imagemPrato}
          alt={nomePrato}
        />
        <div className="box-content ml-3 md:ml-0 w-full flex flex-col gap-2 md:items-center md:text-center md:mt-4">
          <p className='truncate w-full text-xl font-bold text-black'>
            {nomePrato}
          </p>
          <div className={`text-2xl font-bold ${botaoAtivo ? 'text-white' : 'text-primary'}`}>
            R$ {pratoPreco.toFixed(2).replace('.', ',')}
          </div>
        </div>
      </li>
    </>
  )
}