import ufList from "@/data/uf-list.json"
import useEnderecoContext from "@/hooks/useEnderecoContext";

interface SelectUFProps {
  label: string;
  value: string | undefined;
  campo: string;
  obrigatorio?: boolean;
  action: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectUF({ label, value = "...", campo, obrigatorio = false, action }: SelectUFProps) {
  const contexto = useEnderecoContext();

  if (!contexto) {
    throw new Error('Não foi possível encontrar o EnderecoContext.');
  }

  const { alteraCampo } = contexto;
  
  return (
    <div className={`w-full lg:w-3/5 flex flex-col mt-3`}>
      <span className="font-medium text-text">{label}</span>
      <div className="relative w-full shadow-padrao h-12 md:h-14 rounded-2xl flex items-center justify-between px-4 mt-3">
        <select className="w-full"
          onChange={(e) => action(e)}
          value={value}
          required={obrigatorio}
          onBlur={() => alteraCampo(campo, value)}
        >
          {ufList.map(uf => <option key={`uf-${uf}`}>{uf}</option>)}
        </select>
      </div>
    </div>
  )
}