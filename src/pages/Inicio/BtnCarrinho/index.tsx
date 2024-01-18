import CarrinhoIndicador from "@/components/CarrinhoIndicador";
import useCarrinhoContext from "@/hooks/useCarrinhoContext";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function BtnCarrinho() {
  const contextoCarrinho = useCarrinhoContext();

  if (!contextoCarrinho) {
    throw new Error('Contexto não encontrado');
  }

  const { carrinho } = contextoCarrinho;

  return (
    <Link
      to='/carrinho'
      className={`${carrinho.length > 0 ? 'block' : 'hidden'} bg-primary fixed z-50 bottom-10 right-5 rounded-full h-14 w-14 flex items-center justify-center text-2xl text-text`}
    >
      <CarrinhoIndicador />
      <FontAwesomeIcon icon={faShoppingBag} />
    </Link>
  )
}