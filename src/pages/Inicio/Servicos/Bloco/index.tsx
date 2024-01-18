interface Props {
  caminho: string;
  descricaoImagem: string;
  titulo: string;
  descricaoServico: string;
  diminuirImagem?: boolean;
}

export default function Bloco({ caminho, descricaoImagem, titulo, descricaoServico, diminuirImagem = false }: Props) {
  return (
    <div className="flex justify-center items-center flex-col mb-16 h-40 box-border">
      <div
        className={`${diminuirImagem ? 'w-28' : 'w-40'} mb-6 mt-24`}
        >
        <img src={caminho} alt={descricaoImagem} />
      </div>
      <h3 className="text-3xl font-semibold mb-3">{titulo}</h3>
      <p className="text-lg font-medium text-text text-center w-5/6">{descricaoServico}</p>
    </div>
  )
}