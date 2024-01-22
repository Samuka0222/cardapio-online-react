import { useInView } from "react-intersection-observer";
import TituloSecao from "../TituloSecao";
import Bloco from "./Bloco";
import 'animate.css'

export default function Servicos() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const animacaoServicos = inView ? 'animate__animated animate__fadeInUp' : ''

  return (
    <section id="servicos" className="mt-16 lg:mt-36 lg:mb-24 relative bg-pattern1 bg-cover">
      <TituloSecao
        titulo="Serviços"
        descricao="Como são nossos serviços?"
      />
      <div ref={ref} className={`flex flex-col gap-16 lg:gap-0 lg:flex-row ${animacaoServicos}`}>
        <Bloco
          caminho="/img/icone-pedido.svg"
          descricaoImagem="Mulher olhando para celular"
          titulo="Fácil de pedir"
          descricaoServico="Você só precisa de alguns passos para pedir sua comida."
          key={1}
          diminuirImagem
        />
        <Bloco
          caminho="/img/icone-delivery.svg"
          descricaoImagem="mulher de moto levando comida"
          titulo="Entrega rápida"
          descricaoServico="Nossa entrega é sempre pontual, rápida e segura."
          key={2}
        />
        <Bloco
          caminho="/img/icone-qualidade.svg"
          descricaoImagem="Prato de comida"
          titulo="Melhor qualidade"
          descricaoServico="Não só a rapidez na entrega, a qualidade também é o nosso forte."
          key={3}
        />
      </div>
    </section>
  )
}

