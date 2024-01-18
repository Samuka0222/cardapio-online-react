import useCarrinhoContext from "@/hooks/useCarrinhoContext"
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CarrinhoItem from "./CarrinhoItem"

export default function RevisaoCarrinho() {
  const contexto = useCarrinhoContext()

  if (!contexto) {
    throw new Error('O contexto CarrinhoContext não foi encontrado')
  }

  const { carrinho } = contexto

  return (
    <div className="h-full w-full flex flex-col mt-8">
      <h2 className="text-xl text-black font-semibold">Seu carrinho: </h2>
      {carrinho.length === 0
        ? <main className="flex flex-col h-full w-full justify-center items-center mt-8">
          <div className="bg-secondary h-12 w-12 rounded-full text-2xl flex justify-center items-center text-primary">
            <FontAwesomeIcon icon={faShoppingBag} />
          </div>
          <p className="text-lg mt-4">Seu carrinho está vazio</p>
        </main>

        : <main>
          <ul className="flex flex-col gap-4 w-full box-content">
            {carrinho.map(item => <CarrinhoItem
              prato={item.prato}
              qtd={item.qtd}
              key={`carrinho-item:${item.prato.id}`}
            />
            )}
          </ul>
        </main>
      }
    </div>
  )
}