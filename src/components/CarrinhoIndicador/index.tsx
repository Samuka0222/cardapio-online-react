import useCarrinhoContext from "@/hooks/useCarrinhoContext"
import { useEffect, useState } from "react"

export default function CarrinhoIndicador() {
  const contextoCarrinho = useCarrinhoContext();

  if (!contextoCarrinho) {
    throw new Error('Contexto não encontrado')
  }

  const { carrinho } = contextoCarrinho
  const [qtdCarrinho, setQtdCarrinho] = useState(0)

  useEffect(() => {
    setQtdCarrinho(
      carrinho.reduce((total, item) => {
        return total + item.qtd
      }, 0)
    )
  }, [carrinho])

  return (
    <span className={`${qtdCarrinho > 0 ? 'block' : 'hidden'} h-7 w-7 flex items-center justify-center rounded-full absolute -right-3 -top-2 text-base font-bold bg-secondary text-text`}>
      {qtdCarrinho}
    </span>
  )
}