import redes from "./sociais.json"

export default function Sociais() {
  return (
    <nav className="flex flex-row gap-6 mt-8 justify-center lg:justify-start w-full">
      {redes.map(rede => (
        <a
          href={rede.link}
          target="_blank"
          key={rede.id}
          className="rounded-2xl flex justify-center items-center h-14 w-14 shadow-padrao bg-white hover:bg-primary"
        >
          <img className="h-5" src={rede.icone} alt={`botao para acessar o ${rede.id}`} />
        </a>
      ))}
    </nav>
  )
}