import Button from "@/components/Button";
import TituloSecao from "../TituloSecao";
import reserva from "/img/icone-reserva.svg"
import fazerReserva from "@/utils/fazerReserva";
import { useInView } from "react-intersection-observer";

export default function Reserva() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const animacao = inView ? 'animate__animated animate__fadeInUp' : ''

  return (
    <section id="reserva" ref={ref} className={`self-center md:w-2/3 flex flex-col lg:flex-row md:justify-center lg:mt-24 bg-secondary py-16 px-12 rounded-6xl ${animacao}`}>
      <div className="lg:w-3/5 ">
        <TituloSecao
          titulo="Reserva"
          descricao="Quer reservar um horário?"
          alinhamento="esq"
        />
        <div className="text-lg font-medium text-text mb-10">
          <p>Mande uma mensagem clicando no botão abaixo.</p>
          <p>Reserve sua data e horário de forma simples e rápida.</p>
        </div>
        <div className="w-full flex justify-center lg:justify-start">
          <Button
            text="Fazer reserva"
            style="secondary"
            action={() => fazerReserva()}
          />
        </div>
      </div>
      <div className="hidden ml-10 lg:flex w-2/5 items-center justify-center bg-white rounded-6xl px-3">
        <img src={reserva} alt="ilustração de homem fazendo reserva" />
      </div>
    </section >
  )
}