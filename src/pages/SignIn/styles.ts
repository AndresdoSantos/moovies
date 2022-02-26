import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  height: ${Dimensions.get('screen').height}px;
`;

export const Title = styled.Text`
  color: #fff;
  letter-spacing: 1px;
  font-size: 24px;
  font-weight: bold;
`;

type TDescription = {
  alignRight: boolean;
  color: '#fff' | '#000' | '#5468ff';
};

export const Description = styled.Text<Partial<TDescription>>`
  color: ${(props) => (props.color ? props.color : '#64748b')};
  font-size: 12px;

  margin-left: ${(props) => (props.alignRight ? 'auto' : 0)};
  margin-top: ${(props) => (props.alignRight ? '16px' : 0)};
`;

export const FormWrapper = styled.View`
  margin: 50px 0;
  width: 100%;
`;

export const InputWrapper = styled.View`
  border-radius: 16px;
  background-color: #262a34;
  height: 60px;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
  margin: 5px 0;
`;

export const Input = styled.TextInput`
  font-size: 12px;
  flex: 1;
  color: #fff;
`;

export const GoToHomeButton = styled.Pressable`
  height: 60px;
  width: 100%;

  background-color: #5468ff;

  align-items: center;
  justify-content: center;

  border-radius: 16px;
  margin: 5px 0;
`;

export const GoogleSignInButton = styled.Pressable`
  height: 60px;
  width: 100%;

  background-color: #fff;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 16px;
  margin: 5px 0;
`;

export const AccountWrapper = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;
