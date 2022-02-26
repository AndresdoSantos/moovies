import {
  DescriptionText,
  DescriptionWrapper,
  TitleContainer,
  TitleText,
} from './styles';
import type { TDescription } from './styles';
import { useContext } from 'react';
import { NavigationContext } from '../../contexts/NavigationContext';
import { Fontisto } from '@expo/vector-icons';
import { View } from 'react-native';

type TTitleProps = TDescription & {
  title: string;
  description: string;
};

export function Title({ description, title, alignRight, color }: TTitleProps) {
  const { page } = useContext(NavigationContext);

  return (
    <TitleContainer>
      <TitleText>{title}</TitleText>

      <DescriptionWrapper>
        {page === 'ticket' && (
          <Fontisto
            name="map-marker-alt"
            size={12}
            color="#64748b"
            style={{ marginRight: 4 }}
          />
        )}
        <DescriptionText alignRight={alignRight} color={color}>
          {description}
        </DescriptionText>
      </DescriptionWrapper>
    </TitleContainer>
  );
}
