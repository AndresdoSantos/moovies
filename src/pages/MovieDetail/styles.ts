import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #181a20;
`;

export const HeaderRightContent = styled.View`
  flex-direction: row;
`;

export const ImageWrapper = styled.View`
  margin: 32px 0;
`;

export const MovieNameTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 30px;
  font-weight: bold;

  text-align: center;
  letter-spacing: 1px;
  line-height: 40px;

  color: #fff;
`;

export const MovieFeaturesTextWrapper = styled.View`
  width: 80%;
  margin: 28px 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

type TMovieFeaturesTextProps = Partial<{
  inDate: boolean;
}>;

export const MovieFeaturesText = styled.Text<TMovieFeaturesTextProps>`
  color: ${(props) => (props.inDate ? '#fff' : '#64748b')};
  font-size: 16px;
`;

export const StarsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StarsTextLeft = styled.Text`
  color: #fac53d;
  font-size: 24px;
  font-weight: bold;
`;

export const StarsTextRight = styled.Text`
  color: #64748b;
  font-size: 12px;
  font-weight: bold;

  margin-top: 5px;
`;

export const SynopsisAndTicketWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;

  padding: 0 8px;
`;

export const SynopsisWrapper = styled.View`
  align-items: center;
`;

export const SynopsisText = styled.Text.attrs({
  numberOfLines: 3,
})`
  color: #fff;
  line-height: 26px;

  text-align: center;
  margin-top: 32px;

  padding: 0 16px;
`;

export const ReadMoreTextButton = styled.Text`
  color: #6665bb;
`;

export const CheckTicketButton = styled.Pressable`
  height: 60px;
  width: ${Dimensions.get('screen').width - 40}px;

  background-color: #5468ff;

  align-items: center;
  justify-content: center;

  border-radius: 16px;
  margin-bottom: 20px;
`;

export const CheckTicketButtonText = styled.Text`
  color: #fff;
  font-size: 12px;
`;
