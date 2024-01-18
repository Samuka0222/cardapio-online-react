import useCarrinhoContext from "@/hooks/useCarrinhoContext"
import CarrinhoItem from "../RevisaoCarrinho/CarrinhoItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons"
import useEnderecoContext from "@/hooks/useEnderecoContext";

export default function ResumoPedido() {
  const contextoCarrinho = useCarrinhoContext();
  const contextoEndereco = useEnderecoContext();

  if (!contextoCarrinho || !contextoEndereco) {
    throw new Error('O contexto CarrinhoContext ou EnderecoContext não foi encontrado')
  }

  const { carrinho } = contextoCarrinho
  const { endereco } = contextoEndereco

  return (
    <div className="overflow-auto">
      <h2 className="text-xl text-black font-semibold">Resumo do pedido: </h2>
      <div>
        <ul className="flex flex-col gap-4 w-full box-content">
          <h3 className="mt-7 text-lg text-center text-black font-semibold">Itens do pedido:</h3>
          {carrinho.map(item => <CarrinhoItem
            prato={item.prato}
            qtd={item.qtd}
            key={`carrinho-item:${item.prato.id}`}
            alterarQtd={false}
          />
          )}
        </ul>
        <div className="mb-7">
          <div className="flex flex-col gap-4 items-center mt-7">
            <div className="text-2xl bg-secondary h-12 w-12 flex items-center justify-center rounded-xl">
              <FontAwesomeIcon icon={faMapLocationDot} />
            </div>
          <h3 className=" text-lg text-center text-black font-semibold">Local de Entrega:</h3>
            <div className="flex flex-col text-lg lg:flex-row">
              <p className="font-medium">{endereco.logradouro}, {endereco.numero}, {endereco.bairro}</p>
              <p className="lg:mr-2">{endereco.cidade} - {endereco.UF} / {endereco.cep}</p>
              {
                endereco.complemento !== '' && <p>Complemento: {endereco.complemento}</p>
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}