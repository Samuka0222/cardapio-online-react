import configRestaurante from "@/data/configRestaurante.json"

export default function fazerReserva() {
  const texto = 'Olá, Gostaria de fazer uma *reserva*.'
  
  const encode = encodeURI(texto);
  const URL = `https://wa.me/${configRestaurante.contato}?text=${encode}`

  window.open(URL, '_blank')
}
