import RevisaoCarrinho from "./RevisaoCarrinho"
import FormEndereco from "./FormEndereco"
import ResumoPedido from "./ResumoPedido"
import useEtapaContext from "@/hooks/useEtapaContext"

export default function CarrinhoConteudo() {
  const contexto = useEtapaContext()

  if (!contexto) {
    throw new Error('O contexto CarrinhoEtapaContext não foi encontrado')
  }

  const { etapas } = contexto

  return (
    <div className="h-full w-full flex flex-col mt-6 overflow-hidden">
      {etapas[0].atual === true ? <RevisaoCarrinho /> : null}
      {etapas[1].atual === true ? <FormEndereco /> : null}
      {etapas[2].atual === true ? <ResumoPedido /> : null}
    </div>
  )
}