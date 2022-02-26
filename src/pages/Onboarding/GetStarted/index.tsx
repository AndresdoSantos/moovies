import { useContext } from 'react';
import { Dimensions, Image, View } from 'react-native';
import { NavigationContext } from '../../../contexts/NavigationContext';
import {
  Container,
  Title,
  Dot,
  TitleWrapper,
  Description,
  GoToSignInButton,
  ContentWrapper,
  ContentContainer,
} from './styles';

export function GetStarted() {
  const { getPage } = useContext(NavigationContext);

  return (
    <Container>
      <Image
        source={require('../../../../assets/joker.jpg')}
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
        }}
      />

      <ContentContainer>
        <ContentWrapper>
          <TitleWrapper>
            <Title>abda</Title>
            <Dot />
          </TitleWrapper>

          <Description>
            Watch your favorite movies or series on only one platform. You can
            watch it anytime and anywhere.
          </Description>
        </ContentWrapper>

        <GoToSignInButton onPress={() => getPage('signin')}>
          <Description>Get Started</Description>
        </GoToSignInButton>
      </ContentContainer>
    </Container>
  );
}
