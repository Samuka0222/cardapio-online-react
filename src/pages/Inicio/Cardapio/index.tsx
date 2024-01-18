import TituloSecao from "../TituloSecao";
import Categorias from "./Categorias";
import Menu from "./Menu";

export default function Cardapio() {
  return (
      <section id="cardapio" className="flex flex-col justify-center items-center box-content mt-32 lg:mt-0 overflow-hidden bg-pattern2 bg-cover">
        <TituloSecao
          titulo="Cardápio"
          descricao="Conheça o nosso Cardápio:"
        />
        <Categorias />
        <Menu />
      </section>
  )
}