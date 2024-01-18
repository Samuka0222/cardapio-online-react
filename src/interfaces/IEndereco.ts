export default interface IEndereco {
  cep: string;
  logradouro: string;
  bairro: string;
  numero: string | '';
  cidade: string;
  complemento: string | '';
  UF: string;
}