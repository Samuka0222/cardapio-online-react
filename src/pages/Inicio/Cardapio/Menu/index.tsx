import { useContext, useState } from "react";
import ItemMenu from "./ItemMenu";
import { CardapioContext } from "@/context/CardapioContext";
import Button from "@/components/Button";
import { useInView } from "react-intersection-observer";
import "animate.css"

export default function Menu() {
  const contexto = useContext(CardapioContext)
  if (!contexto) {
    throw new Error("contexto não está definido.")
  }

  const { pratos, categoriaSelecionada } = contexto;

  const [verMaisAtivo, setVerMaisAtivo] = useState<boolean>(false)

  const listaPratos = pratos.filter(item => item.category === categoriaSelecionada)
  const pratosParaRenderizar = verMaisAtivo ? listaPratos : listaPratos.slice(0, 8)

  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const animacaoFadeInUp7s = inView ? 'animate__animated animate__fadeInUp animate__delay-0.7s' : '';
  const animacaoFadeInUp = inView ? 'animate__animated animate__fadeInUp animate__delay-0.5s' : '';

  return (
    <div className="flex flex-col items-center">
      <h3 className={`text-lg mt-3 font-medium text-center ${animacaoFadeInUp}`}>Clique nos itens para adicionar ao carrinho.</h3>
      <ul ref={ref} className={`mt-6 flex flex-col md:flex-row flex-wrap gap-5 md:gap-12 lg:gap-5 justify-center items-center flex-grow w-full ${animacaoFadeInUp7s}`} >
        {pratosParaRenderizar.map((prato) => (
          <ItemMenu
            key={prato.id}
            imagemPrato={prato.img}
            nomePrato={prato.name}
            pratoPreco={prato.price}
            prato={prato}
          />
        ))}
      </ul>
      <div className={`mt-6 mb-8 ${animacaoFadeInUp}`}>
        <Button
          style="secondary"
          text={`${verMaisAtivo ? "Ocultar itens" : "Ver mais"}`}
          type="button"
          action={() => setVerMaisAtivo(!verMaisAtivo)}
        />
      </div>
    </div>
  )
}