import img from "@/assets/img/burguer.png"
import Button from "@/components/Button"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import Sociais from "../Sociais"
import fazerLigacao from "@/utils/fazerLigacao"
import { useInView } from "react-intersection-observer"
import "animate.css"

export default function Banner() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const animacaoTexto = inView ? 'animate__animated animate__fadeInLeft' : ''
  const animacaoImagem = inView ? 'animate__animated animate__fadeInRight' : ''
  const animacaoBtns = inView ? 'animate__animated animate__fadeInUp animate__delay-0.5s' : ''
  const animacaoSociais = inView ? 'animate__animated animate__fadeInUp animate__delay-0.7s' : ''

  return (
    <section ref={ref}  className="w-full flex flex-row mt-8 lg:mt-10" >
      <div className={`w-full flex flex-col justify-center lg:w-2/4`}>
        <h1 className={`text-4xl text-center lg:text-left lg:text-6xl w-full lg:w-full font-semibold ${animacaoTexto}`}>Escolha a sua comida <strong className="font-semibold text-primary">Favorita</strong>.</h1>
        <p className={`w-full md:w-7/12 lg:w-4/5 self-center lg:self-start text-text text-xl lg:text-xl text-center lg:text-left font-medium my-6 ${animacaoTexto}`}>
          Aproveite nosso cardápio! Escolha o que desejar e receber em sua casa de forma rápida e segura.
        </p>
        <div className={`flex flex-col items-center lg:flex-row gap-4 w-full ${animacaoBtns}`}>
          <Link
            to="#cardapio"
            className="rounded-3xl flex justify-center items-center text-xl md:text-2xl h-12 md:h-16 w-44 md:w-52 pb-1 shadow-padrao text-center text-white font-medium whitespace-nowrap bg-primary"
          >
            Ver cardápio
          </Link>
          <Button
            style="primary"
            text="(51) 99999-9999"
            icon={faPhone}
            action={() => fazerLigacao()}
          />
        </div>
        <div className={`flex items-center w-full ${animacaoSociais}`}>
          <Sociais />
        </div>
      </div>
      <div className={`relative hidden lg:block ${animacaoImagem}` }>
        <div className="lg:w-96 lg:h-96 xl:w-128 xl:h-128 absolute -z-1 lg:-right-8 lg:bottom-32 xl:-right-10 xl:bottom-0 rounded-full bg-primary"></div>
        <div className="absolute z-10 lg:-right-4 lg:bottom-16 xl:-right-4 xl:bottom-2 w-96 flex flex-col bg-white p-4 rounded-3xl shadow-padrao ">
          <p className="text-left font-medium">"Entrega rápida e funcionários simpáticos.
            A comida chegou quente e
            muito saborada"</p>
          <span className="text-primary font-semibold self-end mt-1">Thiago Lopes</span>
        </div>
        <img className="relative" src={img} alt="Imagem de um Hamburguer" />
      </div>
    </section>
  )
}