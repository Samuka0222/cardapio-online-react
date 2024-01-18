import useCarrinhoContext from "@/hooks/useCarrinhoContext";
import useEtapaContext from "@/hooks/useEtapaContext"
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import configRestaurate from "@/data/configRestaurante.json"
import Button from "@/components/Button";
import FinalizarPedido from "@/utils/finalizarPedido";
import useEnderecoContext from "@/hooks/useEnderecoContext";
import useMensagemContext from "@/hooks/useMensagemContext";

export default function CarrinhoFooter() {
  const contextoEtapa = useEtapaContext();
  const contextoCarrinho = useCarrinhoContext();
  const contextoEndereco = useEnderecoContext();
  const contextoMensagem = useMensagemContext();

  if (!contextoEtapa || !contextoCarrinho || !contextoEndereco || !contextoMensagem) {
    throw new Error('Não foi possível encontrar o contexto.')
  }

  const { etapaAtual, concluiEtapa, voltarEtapa } = contextoEtapa;
  const { valorCarrinho, carrinho } = contextoCarrinho;
  const { endereco } = contextoEndereco;
  const { alteraMensagem } = contextoMensagem

  return (
    <div className="flex w-full flex-col justify-center items-end border-t-2 pt-4">
      <span className="text-text text-lg font-medium">Subtotal: R$ {valorCarrinho.toFixed(2).replace('.', ',')} </span>
      <span className="text-textOut text-lg font-medium"><FontAwesomeIcon icon={faMotorcycle} /> Entrega + R$ 5,00 </span>
      <span className="flex text-2xl mt-2">
        <strong>Total: </strong>
        <p className="ml-1 text-primary font-bold">R$ {(valorCarrinho + configRestaurate.valorEntrega).toFixed(2).replace('.', ',')}</p>
      </span>

      {
        etapaAtual?.etapa === 1
          ? <div className="mt-4">
            <Button style="secondary" text="Continuar" action={carrinho.length > 0 ? () => concluiEtapa(0) : () => alteraMensagem('erro', 'Adicione um item ao carrinho para continuar')}></Button >
          </div >
          : null
      }
      {
        etapaAtual?.etapa === 2
          ? <div className="mt-4 flex gap-3">
            <Button style="primary" text="Voltar" action={() => voltarEtapa(0)}></Button >
            <Button style="secondary" text="Continuar" action={endereco.cep !== '' ? () => concluiEtapa(1) : () => alteraMensagem('erro', 'Adicione o CEP antes de continuar.')}></Button >
          </div>
          : null
      }
      {
        etapaAtual?.etapa === 3
          ? <div className="mt-4 gap-3">
            <Button style="primary" text="Voltar" action={() => voltarEtapa(1)}></Button >
            <Button style="secondary" text="Finalizar" action={() => FinalizarPedido(carrinho, endereco)}></Button >
          </div>
          : null
      }
    </div>
  )
}