type ClientProps = {
  _id: string;
  name: string;
  companyName: string;
  email: string;
  cpf: string;
  cnpj: string;
  city: string;
  clientContract: string;
  formTypeSelected: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      newClient: undefined;
      myClients: undefined;
    }
  }
}