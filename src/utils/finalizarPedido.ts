import ICarrinho from "@/interfaces/ICarrinho";
import IEndereco from "@/interfaces/IEndereco";
import configRestaurante from "@/data/configRestaurante.json"

export default function FinalizarPedido(carrinho: ICarrinho[], endereco: IEndereco) {

  if (carrinho.length === 0) {
    throw new Error('Carrinho está vazio, não é possível continuar')
  }

  let itens = ''

  carrinho.forEach((item) => {
    itens += `*${item.qtd}x* ${item.prato.name} ........ R$ ${item.prato.price.toFixed(2).replace('.', ',')} \n`
  })


  const texto = `
    Olá! Gostaria de fazer um *pedido*:
    \n*Itens do pedido:*
    \n${itens}
    \n*Endereço de entrega:*
    \n${endereco.logradouro}, ${endereco.numero}, ${endereco.bairro},\n${endereco.cidade} - ${endereco.UF} / ${endereco.cep},\n${endereco.complemento}.
  `

  const encode = encodeURI(texto);
  const URL = `https://wa.me/${configRestaurante.contato}?text=${encode}`

  window.open(URL, '_blank')
}