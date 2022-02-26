import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #000;
  padding: 0 72px 40px;
  align-items: center;
  justify-content: flex-end;

  flex: 1;

  position: relative;
`;

export const ContentContainer = styled.View`
  width: ${Dimensions.get('screen').width}px;
  height: 220px;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #181a20;
  padding: 0 50px;

  bottom: 0;
  position: absolute;
`;

export const ContentWrapper = styled.View`
  align-items: center;
  justify-content: center;

  margin: 24px 0;
  padding: 0 32px;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  position: relative;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 36px;
  color: #fff;
  letter-spacing: 1.5px;
`;

export const Dot = styled.View`
  background-color: #5468ff;
  height: 8px;
  width: 8px;
  border-radius: 8px;

  position: absolute;
  bottom: 8px;
  right: -10px;
`;

export const Description = styled.Text`
  font-weight: 100;
  font-size: 12px;
  color: #fff;
  text-align: center;
  line-height: 20px;
`;

export const GoToSignInButton = styled.Pressable`
  height: 50px;
  width: 100%;
  background-color: #5468ff;

  align-items: center;
  justify-content: center;

  border-radius: 16px;
`;
