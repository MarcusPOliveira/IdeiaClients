import React, { useCallback, useEffect, useState } from 'react';
import {
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
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

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

type FormDataProps = {
  name: string;
  companyName: string;
  email: string;
  cpf: string;
  cnpj: string;
  city: string;
}

const registerSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  companyName: yup.string().required('Informe o nome da empresa'),
  email: yup.string().required('Informe o email').email('Email inválido'),
  cpf: yup.string().required('Informe o CPF').test('test-invalid-cpf', 'CPF inválido', (cpf) => validateCpf(cpf)),
  cnpj: yup.string().required('Informe o CNPJ'),
  city: yup.string().required('Inform a cidade'),
});

export function NewClient() {
  const [formTypeSelected, setFormTypeSelected] = useState<'pf' | 'pj'>('pf');

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(registerSchema)
  });

  async function handleRegister(data: FormDataProps) {
    console.log(data)
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
              </Form>
              <Footer>
                <Button
                  title="Cadastrar"
                  onPress={handleSubmit(handleRegister)}
                />
              </Footer>
            </Content>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  );
}
