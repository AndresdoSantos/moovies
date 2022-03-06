import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const SearchWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin: 16px 0;
`;

export const DotsWrapper = styled.Pressable`
  flex-direction: row;
  align-items: center;
  height: 30px;
`;

export const Dot = styled.View`
  width: 6px;
  height: 6px;
  background-color: #fff;

  border-radius: 8px;
  margin: 0 4px;
`;

export const ImageWrapper = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 40px;

  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const InputWrapper = styled.View`
  border-radius: 16px;
  background-color: #262a34;
  height: 60px;

  flex: 1;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
  margin: 5px 0;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#64748b',
})`
  font-size: 12px;
  flex: 1;
  color: #fff;
`;

export const CardsWrapper = styled.View`
  height: ${Dimensions.get('screen').height - 10}px;
  margin-top: 12px;
`;

export const CardWrapper = styled.Pressable`
  align-items: center;
  justify-content: center;

  width: ${Dimensions.get('screen').width / 2.5}px;
  margin: 8px;

  position: relative;
`;

export const CardWrapperTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #fff;
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: bold;

  margin: 6px 0;
`;
