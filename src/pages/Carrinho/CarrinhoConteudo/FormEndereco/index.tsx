import { useEffect, useState } from "react";
import FormCep from "./FormCep";
import useEnderecoContext from "@/hooks/useEnderecoContext";
import CampoTexto from "./CampoTexto";
import SelectUF from "./SelectUF";

export default function FormEndereco() {

  const contexto = useEnderecoContext();

  if (!contexto) {
    throw new Error('Não foi possível encontrar o EnderecoContext.');
  }

  const { endereco, buscaCep } = contexto;

  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [complemento, setComplemento] = useState('');
  const [estado, setEstado] = useState('...');

  useEffect(() => {
    setCep(endereco.cep);
    setLogradouro(endereco.logradouro);
    setBairro(endereco.bairro);
    setCidade(endereco.cidade);
    setNumero(endereco.numero);
    setCidade(endereco.cidade);
    setComplemento(endereco.complemento);
    setEstado(endereco.UF);
  }, [endereco])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    buscaCep(cep);
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const estadoSelecionado = e.target.value
    setEstado(estadoSelecionado)
  }

  return (
    <div className="overflow-auto h-full">
      <h2 className="text-xl text-black font-semibold lg:mb-10">Endereço de entrega: </h2>
      <div className="flex flex-col items-center lg:items-start lg:h-fit lg:w-full gap-3 lg:gap-10 mb-5 pr-5">
        <FormCep
          label="CEP:"
          key={"input-cep"}
          placeholder="Insira seu CEP..."
          btn
          obrigatorio
          value={cep}
          action={(e) => setCep(e.target.value)}
          submitAction={(e) => handleSubmit(e)}
        />

        <div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-5">
          <CampoTexto
            label="Endereço:"
            placeholder="Insira seu endereço..."
            key={"input-endereco"}
            campo="logradouro"
            value={logradouro}
            obrigatorio
            action={(e) => setLogradouro(e.target.value)}

          />

          <CampoTexto
            label="Bairro:"
            placeholder="Insira seu bairro..."
            key={"input-bairro"}
            campo="bairro"
            value={bairro}
            action={(e) => setBairro(e.target.value)}
            obrigatorio
          />

          <CampoTexto
            label="Número:"
            placeholder="Nº"
            key={"input-numero"}
            campo="numero"
            value={numero}
            action={(e) => setNumero(e.target.value)}
            obrigatorio
          />
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-5">
          <CampoTexto
            label="Cidade:"
            placeholder="Insira sua cidade..."
            key={"input-cidade"}
            campo="cidade"
            value={cidade}
            action={(e) => setCidade(e.target.value)}
            obrigatorio
          />

          <CampoTexto
            label="Complemento:"
            placeholder="Ex: Apt 202, Casa, etc."
            key={"input-complemento"}
            campo="complemento"
            value={complemento}
            action={(e) => setComplemento(e.target.value)}
          />

          <SelectUF
            label="UF:"
            campo="UF"
            obrigatorio
            key={'select-uf'}
            value={estado}
            action={handleSelectChange}
          />

        </div>

      </div>
    </div>
  )
}