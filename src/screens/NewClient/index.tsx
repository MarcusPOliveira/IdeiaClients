import React, { useCallback, useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback
} from 'react-native';
import {
  User,
  Briefcase,
  At,
  IdentificationCard,
  Buildings,
  MapPin
} from 'phosphor-react-native';
import * as yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { validateCpf } from '../../utils/validateCpf';
import { clientCreate } from '../../storage/client/clientCreate';
import { Load } from '../../components/Load';
import { Header } from '../../components/Header';
import { InputForm } from '../../components/InputForm';
import { Button } from '../../components/Button';
import {
  Container,
  Content,
  FormTypeWrapper,
  FormTypeButton,
  ButtonLabel,
  TitleWrapper,
  Title,
  Form,
  InputLabel,
  ContractArea,
  ContractButton,
  ContractUploaded,
  ContractLabel,
  Footer,
} from './styles';

type ClientProps = {
  _id: string;
  name: string;
  companyName: string;
  email: string;
  cpf: string;
  cnpj: string;
  city: string;
  type: 'pf' | 'pj';
}

type ClientData = {
  data: ClientProps;
}

const registerPF = yup.object({
  city: yup.string().required('Inform a cidade'),
  cpf: yup.string().required('Informe o CPF').test('test-invalid-cpf', 'CPF inválido', (cpf) => validateCpf(cpf)),
  email: yup.string().required('Informe o email').email('Email inválido'),
  name: yup.string().required('Informe o nome'),
});

const registerPJ = yup.object({
  city: yup.string().required('Inform a cidade'),
  cnpj: yup.string().required('Informe o CNPJ'),
  email: yup.string().required('Informe o email').email('Email inválido'),
  companyName: yup.string().required('Informe o nome da empresa'),
});

export function NewClient({ data }: ClientData) {
  const [formTypeSelected, setFormTypeSelected] = useState<'pf' | 'pj'>('pf');
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [city, setCity] = useState('');
  const [clientContract, setClientContract] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  async function handleContractSelect() {
    try {
      setIsLoading(true);
      const contractSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });
      console.log(contractSelected);
      if (contractSelected.cancelled) {
        return;
      }
      if (contractSelected.uri) { //erro de tipagem da expo-image-picker
        setClientContract(contractSelected.uri);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Opa!', "Erro ao carregar imagem.")
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRegister() {
    try {
      setIsLoading(true);
      if (formTypeSelected === 'pf') {
        const clientData = {
          _id: new Date().toString(),
          name,
          email,
          cpf,
          city,
          clientContract,
          formTypeSelected
        };
        await registerPF.validate(clientData);
        const newClient = await clientCreate(clientData);
        console.log(newClient);
        navigation.navigate('myClients');
      }
      if (formTypeSelected === 'pj') {
        const clientData = {
          _id: new Date().toString(),
          companyName,
          email,
          cnpj,
          city,
          clientContract,
          formTypeSelected
        };
        await registerPJ.validate(clientData);
        const newClient = await clientCreate(clientData);
        console.log(newClient);
        navigation.navigate('myClients');
      }
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return Alert.alert('Opa!', error.message)
      }
    } finally {
      setIsLoading(false);
      setName("");
      setCompanyName("");
      setEmail("");
      setCpf("");
      setCnpj("");
      setCity("");
      setClientContract("");
    }
  }

  useFocusEffect(
    useCallback(() => {
    }, [formTypeSelected]));

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={50}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <Header title="Novo cliente" />
            <Content>
              <FormTypeWrapper>
                <FormTypeButton
                  isSelected={formTypeSelected === "pf"}
                  onPress={() => setFormTypeSelected('pf')}
                >
                  <ButtonLabel
                    isSelected={formTypeSelected === "pf"}
                  >
                    Pessoa Física
                  </ButtonLabel>
                </FormTypeButton>
                <FormTypeButton
                  isSelected={formTypeSelected === "pj"}
                  onPress={() => setFormTypeSelected('pj')}
                >
                  <ButtonLabel
                    isSelected={formTypeSelected === "pj"}
                  >
                    Pessoa Jurídica
                  </ButtonLabel>
                </FormTypeButton>
              </FormTypeWrapper>
              <TitleWrapper>
                <Title>Preencha os dados do cliente</Title>
              </TitleWrapper>
              <Form>
                {
                  formTypeSelected === "pf" ?
                    <>
                      <InputLabel>Nome completo</InputLabel>
                      <InputForm
                        placeholder="Digite o nome completo"
                        iconName={User}
                        autoCapitalize='words'
                        value={name}
                        onChangeText={setName}
                      />
                      <InputLabel>Email</InputLabel>
                      <InputForm
                        placeholder="Digite o email"
                        iconName={At}
                        autoCapitalize='words'
                        keyboardType='email-address'
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                      />
                      <InputLabel>CPF</InputLabel>
                      <InputForm
                        placeholder="Digite o CPF"
                        keyboardType='number-pad'
                        iconName={IdentificationCard}
                        value={cpf}
                        onChangeText={setCpf}
                      />
                      <InputLabel>Cidade</InputLabel>
                      <InputForm
                        placeholder="Digite a cidade"
                        iconName={MapPin}
                        autoCapitalize='words'
                        value={city}
                        onChangeText={setCity}
                      />
                      <InputLabel>Contrato</InputLabel>
                      <ContractArea>
                        <ContractButton onPress={handleContractSelect}>
                          {
                            isLoading ? <Load />
                              :
                              clientContract ?
                                <ContractUploaded
                                  source={{ uri: clientContract }}
                                  resizeMode="cover"
                                />
                                :
                                <ContractLabel>Nenhuma imagem selecionada</ContractLabel>
                          }
                        </ContractButton>
                      </ContractArea>
                    </>
                    :
                    <>
                      <InputLabel>Razão social</InputLabel>
                      <InputForm
                        placeholder="Digite a razão social"
                        iconName={Briefcase}
                        autoCapitalize='words'
                        autoCorrect={false}
                        value={companyName}
                        onChangeText={setCompanyName}
                      />
                      <InputLabel>Email</InputLabel>
                      <InputForm
                        placeholder="Digite o email"
                        iconName={At}
                        autoCapitalize='words'
                        keyboardType='email-address'
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                      />
                      <InputLabel>CNPJ</InputLabel>
                      <InputForm
                        placeholder="Digite o CNPJ"
                        iconName={Buildings}
                        keyboardType="number-pad"
                        value={cnpj}
                        onChangeText={setCnpj}
                      />
                      <InputLabel>Cidade</InputLabel>
                      <InputForm
                        placeholder="Digite a cidade"
                        iconName={MapPin}
                        autoCapitalize='words'
                        value={city}
                        onChangeText={setCity}
                      />
                      <InputLabel>Contrato</InputLabel>
                      <ContractArea>
                        <ContractButton onPress={handleContractSelect}>
                          {
                            isLoading ? <Load />
                              :
                              clientContract ?
                                <ContractUploaded
                                  source={{ uri: clientContract }}
                                />
                                :
                                <ContractLabel>Nenhum{'\n'}contrato selecionado</ContractLabel>
                          }
                        </ContractButton>
                      </ContractArea>
                    </>
                }
              </Form>
              <Footer>
                <Button
                  title="Cadastrar"
                  onPress={handleRegister}
                  isLoading={isLoading}
                />
              </Footer>
            </Content>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  );
}
