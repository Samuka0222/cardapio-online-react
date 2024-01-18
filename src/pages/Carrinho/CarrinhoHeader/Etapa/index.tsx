import IEtapa from "@/interfaces/IEtapa";

interface EtapaProps {
  etapa: IEtapa,
}

export default function Etapa({etapa}: EtapaProps) {

  return (
    <div className={`w-12 h-12 rounded-full shadow-padrao flex items-center justify-center text-black ${etapa.atual || etapa.concluido === true ? 'bg-primary font-bold' : 'bg-white'}`}>
      {etapa.etapa}
    </div>
  )
}