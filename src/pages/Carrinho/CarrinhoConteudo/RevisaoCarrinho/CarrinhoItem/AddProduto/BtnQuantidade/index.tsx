import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BtnQuantidadeProps {
  funcao: string;
  lado: string;
  action: React.MouseEventHandler<HTMLButtonElement>;
}

export default function BtnQuantidade({funcao, lado, action}: BtnQuantidadeProps) {
  return (
    <button 
    type='button'
    className={`h-10 border-2 border-black px-2 self-center ${lado === 'esquerda' ? 'border-r-0 rounded-l-xl' : 'border-l-0 rounded-r-xl' }`}
    onClick={action}
    >
      <FontAwesomeIcon icon={funcao === 'adicionar' ? faPlus : faMinus} />
    </button>
  )
}