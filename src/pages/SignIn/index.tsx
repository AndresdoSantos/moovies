import { AntDesign } from '@expo/vector-icons';
import { useContext, useReducer } from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';

import { NavigationContext } from '../../contexts/NavigationContext';
import {
  Container,
  Title,
  Description,
  FormWrapper,
  InputWrapper,
  GoToHomeButton,
  GoogleSignInButton,
  AccountWrapper,
  Input,
} from './styles';

export function SignIn() {
  const { getPage } = useContext(NavigationContext);

  const [securityInText, setSecurityInText] = useReducer(
    (prev): boolean => !prev,
    true
  );

  const [recoveryPassword, setRecoveryPassword] = useReducer(
    (prev): boolean => !prev,
    false
  );

  const [isSignUp, setIsSignUp] = useReducer((prev): boolean => !prev, false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Title>
          {!recoveryPassword
            ? isSignUp
              ? 'Hello'
              : 'Welcome Back!'
            : 'We Help You'}
        </Title>
        <View style={{ marginVertical: 4 }} />
        <Description>
          {!recoveryPassword
            ? `Please sign ${isSignUp ? 'up' : 'in'} to your account`
            : 'Please type your email'}
        </Description>

        <FormWrapper>
          {isSignUp && (
            <InputWrapper>
              <Input
                placeholder="Full Name"
                placeholderTextColor="#64748b"
                autoCapitalize="words"
              />
            </InputWrapper>
          )}
          <InputWrapper>
            <Input
              placeholder={isSignUp ? 'Email Address' : 'Email'}
              placeholderTextColor="#64748b"
              autoCapitalize="none"
            />
          </InputWrapper>
          {isSignUp && (
            <InputWrapper>
              <Input
                placeholder="Phone Number"
                placeholderTextColor="#64748b"
              />
            </InputWrapper>
          )}
          {!recoveryPassword && (
            <InputWrapper>
              <Input
                placeholder="Password"
                placeholderTextColor="#64748b"
                secureTextEntry={securityInText}
                autoCapitalize="none"
              />
              <AntDesign
                name={securityInText ? 'eyeo' : 'eye'}
                size={24}
                color="#64748b"
                onPress={setSecurityInText}
              />
            </InputWrapper>
          )}
          {!isSignUp && (
            <Pressable onPress={setRecoveryPassword}>
              <Description alignRight>
                {!recoveryPassword
                  ? 'Forgot Password?'
                  : 'I Already Have a Password'}
              </Description>
            </Pressable>
          )}
        </FormWrapper>

        <GoToHomeButton onPress={() => getPage('home')}>
          <Description color="#fff">
            {!recoveryPassword
              ? `Sign ${isSignUp ? 'Up' : 'In'}`
              : 'Send Recovery Code'}
          </Description>
        </GoToHomeButton>

        {!recoveryPassword && (
          <GoogleSignInButton>
            <Image
              source={require('../../../assets/googleImg.png')}
              style={{
                width: 20,
                height: 20,
                marginRight: 8,
              }}
            />
            <Description color="#000">
              Sign {isSignUp ? 'Up' : 'In'} With Google
            </Description>
          </GoogleSignInButton>
        )}

        <AccountWrapper>
          <Description color="#fff">
            {isSignUp ? 'I prefer to ' : `Don't have an Account?`}
          </Description>
          <View style={{ marginHorizontal: 1 }} />

          <Pressable onPress={setIsSignUp}>
            <Description color="#5468ff">
              {isSignUp ? 'sign in' : 'SignUp'}
            </Description>
          </Pressable>
        </AccountWrapper>
      </Container>
    </ScrollView>
  );
}
