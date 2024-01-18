interface DepoimentoBtn {
  pagina: number,
  action: () => void,
}

export default function DepoimentoBtn({ pagina, action }: DepoimentoBtn) {

  return (
    <button
      className="bg-white h-10 w-14 rounded-2xl text-xl font-bold shadow-padrao hover:bg-primary"
      onClick={action}
    >
      {pagina}
    </button>
  )
}