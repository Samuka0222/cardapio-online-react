import logo from "@/assets/img/logo.png"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import LinkBtn from "@/components/LinkBtn"
import { useInView } from "react-intersection-observer"
import configRestaurante from "@/data/configRestaurante.json"
import "animate.css"

export default function Header() {

  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const animacoes = inView ? 'animate__animated animate__fadeIn' : ''

  return (
    <header className={`w-full md:h-44 flex lg:px-72 justify-between pr-4 md:pr-0 lg:mt-8 lg:mb-24 lg:justify-center items-center ${animacoes}`} ref={ref}>
      <div className="w-full md:w-40 flex justify-between">
        <div className="w-40">
          <img src={logo} alt="Logo do Menu Online" />
        </div>
      </div>
      <nav className="h-20 md:flex justify-around items-center w-full md:pr-8">
        <div className="hidden w-full lg:px-10 lg:flex md:gap-4 lg:justify-around items-center text-black md:text-base lg:text-2xl font-bold">
          Bem-vindo ao {configRestaurante.nome}
        </div>
        <div className="hidden md:flex lg:hidden w-full lg:px-10 md:items-center md:justify-center text-black md:text-lg lg:text-2xl font-bold">
          {configRestaurante.nome}
        </div>
        <LinkBtn
          rota="/carrinho"
          style="primary"
          text="Meu carrinho"
          icon={faBagShopping}
          qtdIndicador
        />
      </nav>
    </header>
  )
}