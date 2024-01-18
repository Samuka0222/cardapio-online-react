import configRestaurante from "@/data/configRestaurante.json"

export default function fazerLigacao() {
  const URL = `tel:${configRestaurante.contato}`

  window.open(URL, '_blank')
}
