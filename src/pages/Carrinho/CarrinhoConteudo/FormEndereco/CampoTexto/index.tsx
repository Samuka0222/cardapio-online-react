import useEnderecoContext from "@/hooks/useEnderecoContext";

interface CampoTextoProps {
  label: string;
  placeholder: string;
  value: string | undefined;
  campo: string;
  tipo?: 'text' | 'number'
  tamanho?: "sm" | "md" | "lg";
  obrigatorio?: boolean;
  action: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CampoTexto({
  label,
  placeholder,
  value,
  campo,
  tipo = 'text',
  obrigatorio = false,
  action
  // tamanho
}: CampoTextoProps) {
  const contexto = useEnderecoContext();

  if (!contexto) {
    throw new Error('Não foi possível encontrar o EnderecoContext.');
  }

  const { alteraCampo } = contexto;

  return (
    <div className={`w-full lg:w-3/5 flex flex-col mt-3`}>
      <span className="font-medium text-text">{label}</span>
      <div className="relative w-full shadow-padrao h-12 md:h-14 rounded-2xl flex items-center justify-between px-4 mt-3">
        <input
          className="text-base font-medium w-full outline-none appearance-none"
          type={tipo}
          placeholder={placeholder}
          onBlur={() => alteraCampo(campo, value)}
          value={value}
          onChange={action}
          required={obrigatorio}
        />
      </div>
    </div>
  )
}