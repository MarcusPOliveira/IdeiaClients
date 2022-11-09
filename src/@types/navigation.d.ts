type clientData = {
  name: string;
  email: string;
  cpf: string;
  city: string;
  clientContract: string;
  formTypeSelected: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      newClient: undefined;
      myClients: clientData;
    }
  }
}