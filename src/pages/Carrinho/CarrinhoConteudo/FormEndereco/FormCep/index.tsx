import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FormCepProps {
  label: string;
  tipo?: "text" | "number";
  placeholder: string;
  value: string;
  btn?: boolean;
  obrigatorio: boolean;
  action: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitAction?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormCep({
  label,
  tipo = "text",
  btn,
  placeholder,
  value,
  action,
  obrigatorio = true,
  submitAction 
}: FormCepProps) {
  return (
    <div className="w-full flex flex-col mt-3">
      <span className="font-medium text-text">{label}</span>
      <form className=" relative w-full shadow-padrao h-12 md:h-14 lg:w-2/6 rounded-2xl flex items-center justify-between px-4 mt-3"
        onSubmit={submitAction}
      >
        <input
          className="text-base font-medium w-4/5 outline-none appearance-none"
          style={{ WebkitAppearance: 'none' }}
          type={tipo}
          placeholder={placeholder}
          onChange={action}
          value={value}
          required={obrigatorio}
        />
        {
          btn && <button type="submit" className="bg-primary py-2 px-3 rounded-xl text-white">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        }
      </form>
    </div>
  )
}