import React, { useState } from 'react';
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
import { useForm, Controller } from 'react-hook-form';

import { Header } from '../../components/Header';
import { InputForm } from '../../components/InputForm';
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
import { Button } from '../../components/Button';

export function NewClient() {
  const [formTypeSelected, setFormTypeSelected] = useState<'pf' | 'pj'>('pf');

  const { control, handleSubmit } = useForm();

  async function handleRegister(data: any) {
    console.log(data)
  }

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={80}
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
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                  <Form>
                    {
                      formTypeSelected === "pf" ?
                        <>
                          <InputLabel>Nome completo</InputLabel>
                          <InputForm
                            iconName={User}
                            placeholder="Digite o nome completo"
                            autoCapitalize='words'
                            onChangeText={onChange}
                            value={value}
                          />
                          <InputLabel>Email</InputLabel>
                          <InputForm
                            iconName={At}
                            placeholder="exemplo@exemplo.com"
                            keyboardType='email-address'
                            onChangeText={onChange}
                            value={value}
                          />
                          <InputLabel>CPF</InputLabel>
                          <InputForm
                            iconName={IdentificationCard}
                            placeholder="000.000.000-00"
                            keyboardType='number-pad'
                            onChangeText={onChange}
                            value={value}
                          />
                          <InputLabel>Cidade</InputLabel>
                          <InputForm
                            iconName={MapPin}
                            placeholder="Digite a cidade"
                            autoCapitalize='words'
                            onChangeText={onChange}
                            value={value}
                          />
                        </>
                        :
                        <>
                          <InputLabel>Razão Social</InputLabel>
                          <InputForm
                            iconName={Briefcase}
                            placeholder="Razão Social"
                            autoCapitalize='words'
                            onChangeText={onChange}
                            value={value}
                          />
                          <InputLabel>Email</InputLabel>
                          <InputForm
                            iconName={At}
                            placeholder="exemplo@exemplo.com"
                            keyboardType='email-address'
                            onChangeText={onChange}
                            value={value}
                          />
                          <InputLabel>CNPJ</InputLabel>
                          <InputForm
                            iconName={Buildings}
                            placeholder="00.000.000/0000-00"
                            keyboardType='number-pad'
                            onChangeText={onChange}
                            value={value}
                          />
                          <InputLabel>Cidade</InputLabel>
                          <InputForm
                            iconName={MapPin}
                            placeholder="Digite a cidade"
                            autoCapitalize='words'
                            onChangeText={onChange}
                            value={value}
                          />
                        </>
                    }
                  </Form>
                )}
              />
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
