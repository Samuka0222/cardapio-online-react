import CarrinhoConteudo from "./CarrinhoConteudo";
import CarrinhoFooter from "./CarrinhoFooter";
import CarrinhoHeader from "./CarrinhoHeader";

export default function Carrinho() {
  return (
    <div className="p-6 md:p-10 lg:py-14 lg:px-32 flex flex-col h-screen w-screen">
      <CarrinhoHeader />
      <CarrinhoConteudo />
      <CarrinhoFooter />
    </div>
  )
}