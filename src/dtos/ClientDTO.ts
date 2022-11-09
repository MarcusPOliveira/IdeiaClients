export type ClientDTO = {
  _id: string;
  name: string;
  companyName: string;
  email: string;
  cpf: string;
  cnpj: string;
  city: string;
  clientContract: string;
  formTypeSelected: 'pf' | 'pj';
}