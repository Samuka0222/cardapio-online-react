import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TagButtonProps {
  texto: string;
  icone: IconDefinition;
  ativo: boolean;
  action: () => void;
}
export default function TagButton({ texto, icone, ativo, action }: TagButtonProps) {

  return (
    <button
      className={`rounded-xl w-auto px-4 h-10 flex flex-row justify-center items-center text-lg shadow-padrao text-center whitespace-nowrap hover:bg-primary ${ativo ? 'bg-primary' : 'bg-white'}`}
      onClick={action}
    >
      <FontAwesomeIcon icon={icone} />
      <p className="ml-1 capitalize font-medium" >
        {texto}
      </p>
    </button>
  )
}