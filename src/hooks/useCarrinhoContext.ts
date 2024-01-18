import { CarrinhoContext } from "@/context/contextoPedido/CarrinhoContext";
import IPrato from "@/interfaces/IPrato";
import { useContext, useEffect, useState } from "react";

export default function useCarrinhoContext() {
  const contextoCarrinho = useContext(CarrinhoContext);

  if (!contextoCarrinho) {
    throw new Error('Contexto não foi encontrado.');
  }

  const { carrinho, setCarrinho } = contextoCarrinho;
  const [valorCarrinho, setValorCarrinho] = useState(0)

  function encontraProduto(produto: IPrato) {
    return carrinho.find(({ prato }) => prato.id === produto.id);
  }

  function encontraIndex(produto: IPrato) {
    return carrinho.findIndex(({ prato }) => prato.id === produto.id);
  }

  function removeProduto(produto: IPrato) {
    const novoCarrinho = carrinho.filter(({ prato }) => prato.id !== produto.id);
    setCarrinho(novoCarrinho);

  }

  function addProduto(novoProduto: IPrato) {
    const produtoRepetido = encontraProduto(novoProduto);

    if (produtoRepetido) {
      const carrinhoAtualizado = carrinho.map(
        item => item.prato.id === novoProduto.id
          ? { ...item, qtd: item.qtd + 1 }
          : item
      )

      setCarrinho(carrinhoAtualizado)
    } else {
      setCarrinho([...carrinho, { prato: novoProduto, qtd: 1 }])
    }
  }

  function diminuiProduto(novoProduto: IPrato) {
    const produtoRepetido = encontraProduto(novoProduto);

    if (produtoRepetido) {
      const index = encontraIndex(novoProduto);

      if (carrinho[index].qtd > 0) {
        const carrinhoAtualizado = carrinho.map(
          item => item.prato.id === novoProduto.id
            ? { ...item, qtd: item.qtd - 1 }
            : item
        );

        setCarrinho(() => carrinhoAtualizado);

        if (carrinhoAtualizado[index].qtd === 0) {
          removeProduto(novoProduto);
        }
      }
    } else {
      setCarrinho([...carrinho, { prato: novoProduto, qtd: 1 }]);
    }
  }

  useEffect(() => {
    setValorCarrinho(
      carrinho.reduce((total, { prato, qtd }) => {
        return total + prato.price * qtd;
      }, 0)
    );
  }, [carrinho])

  return {
    carrinho,
    valorCarrinho,
    addProduto,
    diminuiProduto,
    removeProduto
  }
}