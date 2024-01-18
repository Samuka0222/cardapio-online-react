import IPrato from "@/interfaces/IPrato";
import AlteraQtd from "./AddProduto";

interface CarrinhoItemProps {
  prato: IPrato;
  qtd: number;
  alterarQtd?: boolean;
}

export default function CarrinhoItem({ prato, qtd, alterarQtd = true }: CarrinhoItemProps) {

  return (
    <li className="w-full px-2 py-4 border-b-2 flex justify-between items-center">
      <div className="w-1/5 md:w-32">
        <img className="rounded-xl" src={prato.img} alt={`imagem do ${prato.name}`} />
      </div>
      <div className="w-2/4 md:w-full mx-2 flex flex-col md:gap-2">
        <h3 className="truncate ... font-bold text-lg md:text-xl">{prato.name}</h3>
        <span className="text-xl md:text-2xl font-semibold text-primary">R$ {prato.price.toFixed(2).replace('.', ',')}</span>
      </div>
      <div className={`${alterarQtd === false ? 'md:w-16 text-center' : 'w-auto' }`}>
        {
         alterarQtd 
         ? <AlteraQtd prato={prato} qtd={qtd} /> 
         : <span className="font-bold text-2xl">x {qtd}</span>
        }
      </div>
    </li>
  )
}