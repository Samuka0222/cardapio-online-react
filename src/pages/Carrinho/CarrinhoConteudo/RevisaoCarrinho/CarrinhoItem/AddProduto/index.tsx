import BtnQuantidade from "./BtnQuantidade";
import useCarrinhoContext from "@/hooks/useCarrinhoContext";
import IPrato from "@/interfaces/IPrato";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AlteraQtdProps {
  prato: IPrato
  qtd: number;
}

export default function AlteraQtd({ prato, qtd }: AlteraQtdProps) {

  const contexto = useCarrinhoContext();

  if (!contexto) {
    throw new Error('O contexto CarrinhoContext não foi encontrado')
  }

  const { addProduto, diminuiProduto, removeProduto } = contexto

  return (
    <div className="flex justify-content items-center box-content">
      <BtnQuantidade
        funcao="subtrair"
        lado="esquerda"
        action={() => diminuiProduto(prato)}
      />
      <span className="border-2 border-black w-10 py-1 text-center font-bold text-lg">
        {qtd}
      </span>
      <BtnQuantidade
        funcao="adicionar"
        lado="dir"
        action={() => addProduto(prato)}
      />
      <button className="hidden md:block h-10 w-10 bg-red rounded-xl text-white ml-2" onClick={() => removeProduto(prato)}> 
        <FontAwesomeIcon icon={faX} />
      </button>
    </div>
  )
}