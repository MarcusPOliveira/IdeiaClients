import React, { useCallback, useEffect, useState } from 'react';
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
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import * as yup from 'yup';

import { validateCpf } from '../../utils/validateCpf';
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
  Footer,
} from './styles';

export type FormDataProps = {
  name: string;
  companyName: string;
  email: string;
  cpf: string;
  cnpj: string;
  city: string;
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

export function NewClient() {
  const [formTypeSelected, setFormTypeSelected] = useState<'pf' | 'pj'>('pf');
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [city, setCity] = useState('');

  async function handleRegister() {
    try {
      if (formTypeSelected === 'pf') {
        const data = { name, email, cpf, city };
        await registerPF.validate(data);
        console.log(data);
      }
      if (formTypeSelected === 'pj') {
        const data = { companyName, email, cnpj, city };
        await registerPJ.validate(data);
        console.log(data);
      }
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return Alert.alert('Opa!', error.message)
      }
    }
  }

  useEffect(
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
                        autoCorrect={false}
                        value={name}
                        onChangeText={setName}
                      />
                      <InputLabel>Email</InputLabel>
                      <InputForm
                        placeholder="Digite o email"
                        iconName={At}
                        autoCapitalize='words'
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                      />
                      <InputLabel>CPF</InputLabel>
                      <InputForm
                        placeholder="Digite o CPF"
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
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                      />
                      <InputLabel>CNPJ</InputLabel>
                      <InputForm
                        placeholder="Digite o CNPJ"
                        iconName={Buildings}
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
                    </>
                }
              </Form>
              <Footer>
                <Button
                  title="Cadastrar"
                  onPress={handleRegister}
                />
              </Footer>
            </Content>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  );
}

{
  /*
    {
                  formTypeSelected === "pf" ?
                    <>
                      <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, value } }) => (
                          <>
                            <InputLabel>Nome completo</InputLabel>
                            <InputForm
                              iconName={User}
                              placeholder="Digite o nome completo"
                              autoCapitalize='words'
                              onChangeText={onChange}
                              value={value}
                              isInvalid={errors.name?.message ? true : false}
                              errorMessage={errors.name?.message}
                            />
                          </>
                        )}
                      />
                      <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (
                          <>
                            <InputLabel>Email</InputLabel>
                            <InputForm
                              iconName={At}
                              placeholder="exemplo@exemplo.com"
                              keyboardType='email-address'
                              onChangeText={onChange}
                              value={value}
                              isInvalid={errors.email?.message ? true : false}
                              errorMessage={errors.email?.message}
                            />
                          </>
                        )}
                      />
                      <Controller
                        control={control}
                        name="cpf"
                        render={({ field: { onChange, value } }) => (
                          <>
                            <InputLabel>CPF</InputLabel>
                            <InputForm
                              iconName={IdentificationCard}
                              placeholder="000.000.000-00"
                              keyboardType='number-pad'
                              onChangeText={onChange}
                              value={value}
                              isInvalid={errors.cpf?.message ? true : false}
                              errorMessage={errors.cpf?.message}
                            />
                          </>
                        )}
                      />
                      <Controller
                        control={control}
                        name="city"
                        render={({ field: { onChange, value } }) => (
                          <>
                            <InputLabel>Cidade</InputLabel>
                            <InputForm
                              iconName={MapPin}
                              placeholder="Digite a cidade"
                              autoCapitalize='words'
                              onSubmitEditing={handleSubmit(handleRegister)}
                              returnKeyType="send"
                              onChangeText={onChange}
                              value={value}
                              isInvalid={errors.city?.message ? true : false}
                              errorMessage={errors.city?.message}
                            />
                          </>
                        )}
                      />
                    </>
                    :
                    <>
                      <Controller
                        control={control}
                        name="companyName"
                        render={({ field: { onChange, value } }) => (
                          <>
                            <InputLabel>Razão Social</InputLabel>
                            <InputForm
                              iconName={Briefcase}
                              placeholder="Razão Social"
                              autoCapitalize='words'
                              onChangeText={onChange}
                              value={value}
                              isInvalid={errors.companyName?.message ? true : false}
                              errorMessage={errors.companyName?.message}
                            />
                          </>
                        )}
                      />
                      <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (
                          <>
                            <InputLabel>Email</InputLabel>
                            <InputForm
                              iconName={At}
                              placeholder="exemplo@exemplo.com"
                              keyboardType='email-address'
                              onChangeText={onChange}
                              value={value}
                              isInvalid={errors.email?.message ? true : false}
                              errorMessage={errors.email?.message}
                            />
                          </>
                        )}
                      />
                      <Controller
                        control={control}
                        name="cnpj"
                        render={({ field: { onChange, value } }) => (
                          <>
                            <InputLabel>CNPJ</InputLabel>
                            <InputForm
                              iconName={Buildings}
                              placeholder="00.000.000/0000-00"
                              keyboardType='number-pad'
                              onChangeText={onChange}
                              value={value}
                              isInvalid={errors.cnpj?.message ? true : false}
                              errorMessage={errors.cnpj?.message}
                            />
                          </>
                        )}
                      />
                      <Controller
                        control={control}
                        name="city"
                        render={({ field: { onChange, value } }) => (
                          <>
                            <InputLabel>Cidade</InputLabel>
                            <InputForm
                              iconName={MapPin}
                              placeholder="Digite a cidade"
                              autoCapitalize='words'
                              onSubmitEditing={handleSubmit(handleRegister)}
                              returnKeyType="send"
                              onChangeText={onChange}
                              value={value}
                              isInvalid={errors.city?.message ? true : false}
                              errorMessage={errors.city?.message}
                            />
                          </>
                        )}
                      />
                    </>
                }
  */
}
