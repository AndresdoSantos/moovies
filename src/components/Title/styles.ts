import styled from 'styled-components/native';

export const TitleContainer = styled.View`
  margin-right: auto;
`;

export const TitleText = styled.Text`
  color: #fff;
  letter-spacing: 1px;
  font-size: 24px;
  font-weight: bold;
`;

export const DescriptionWrapper = styled.View`
  flex-direction: row;
`;

export type TDescription = Partial<{
  alignRight: boolean;
  color: '#fff' | '#000' | '#5468ff';
}>;

export const DescriptionText = styled.Text<TDescription>`
  color: ${(props) => (props.color ? props.color : '#64748b')};
  font-size: 12px;

  margin-top: ${(props) => (props.alignRight ? '16px' : 0)};
  margin-right: auto;
`;
