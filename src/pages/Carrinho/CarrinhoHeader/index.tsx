import Etapa from "./Etapa"
import LinkBtn from "@/components/LinkBtn"
import useEtapaContext from "@/hooks/useEtapaContext"

export default function CarrinhoHeader() {
  const contexto = useEtapaContext()

  if (!contexto) {
    throw new Error('Erro com o CarrinhoEtapaContext')
  }

  const { etapas } = contexto

  return (
    <header className="flex justify-between">
      <div className="flex flex-row gap-3">
        {etapas.map(item => <Etapa
          key={`etapa-${item.etapa}`}
          etapa={item}
          />
        )}
      </div>
      <div>
        <LinkBtn
          rota="/"
          style="primary"
          text="Fechar"
        />
      </div>
    </header>
  )
}