import { useState } from "react";
import TituloSecao from "../TituloSecao";
import Depoimento from "./Depoimento";
import DepoimentoBtn from "./DepoimentoBtn";
import depoimentos from "@/data/depoimentos.json"
import imagemPizza from "@/assets/img/pizzas.png"
import { useInView } from "react-intersection-observer";
export default function Depoimentos() {
  const [depoimentoSelecionado, setDepoimentoSelecionado] = useState(1)

  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const animacaoDepoimento = inView ? 'animate__animated animate__fadeInRight' : ''
  const animacaoImagem = inView ? 'animate__animated animate__fadeInLeft' : ''

  return (
    <section id="depoimentos" ref={ref} className="mt-16 md:mt-24 bg-pattern2 bg-cover">
      <div className="lg:flex lg:flex-row mb-16">
        <div className={`hidden lg:flex lg:w-2/5 lg:relative ${animacaoImagem}`}>
          <img className="bg-secondary p-6 rounded-6xl" src={imagemPizza} alt="imagem de pizza" />
        </div>
        <div className="w-full lg:w-3/5">
          <div>
            <div className={`flex flex-col items-center lg:ml-20 lg:items-start  ${animacaoDepoimento}`}>
              <TituloSecao
                titulo="Depoimentos"
                descricao="O que dizem sobrem nós?"
                alinhamento="esq"
              />
              {depoimentos.map(depoimento => depoimento.id === depoimentoSelecionado &&
                <Depoimento
                  depoimento={depoimento}
                  key={`depoimento-${depoimento.id}`}
                />
              )}
            </div>
          </div>
          <div className="flex gap-4 mt-8 justify-center lg:justify-start lg:ml-20">
            {depoimentos.map(depoimento => (
              <DepoimentoBtn
                key={`btn-${depoimento.id}`}
                pagina={depoimento.id}
                action={() => setDepoimentoSelecionado(depoimento.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}