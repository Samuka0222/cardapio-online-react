import { useInView } from "react-intersection-observer";
import 'animate.css'

interface Props {
  titulo: string;
  descricao: string;
  alinhamento?: string;
}

export default function TituloSecao({titulo, descricao, alinhamento = 'center'}: Props){
  const [ref, inView] = useInView({
    triggerOnce: true,
  })
  
  const animacaoTitulo = inView ? 'animate__animated animate__fadeInUp': ''
  
  return (
    <div ref={ref}  className={`${alinhamento === 'center' ? 'text-center' : 'text-left'} mb-10 ${animacaoTitulo}`}>
      <h3 className="text-primary font-bold mb-2 uppercase text-lg tracking-widest">{titulo}</h3>
      <h2 className="font-bold text-3xl">{descricao}</h2>
    </div>
  )
}