import { useContext } from 'react';
import { FlatList, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContext } from '../../contexts/NavigationContext';
import { Header } from '../../components/Header';
import { ButtonClose } from '../../components/ButtonClose';
import {
  CheckTicketButton,
  CheckTicketButtonText,
  Container,
  HeaderRightContent,
  ImageWrapper,
  MovieFeaturesText,
  MovieFeaturesTextWrapper,
  MovieNameTitle,
  ReadMoreTextButton,
  StarsTextLeft,
  StarsTextRight,
  StarsWrapper,
  SynopsisAndTicketWrapper,
  SynopsisText,
  SynopsisWrapper,
} from './styles';

export function MovieDetail() {
  const { movie, getMovie, getPage } = useContext(NavigationContext);

  return (
    <Container>
      <Header>
        <ButtonClose />

        <HeaderRightContent>
          <Ionicons
            name="share-social"
            color="#fff"
            size={20}
            style={{ marginRight: 16 }}
          />
          <Ionicons name="md-bookmark" color="#fff" size={20} />
        </HeaderRightContent>
      </Header>

      <ImageWrapper>
        <Image
          source={movie?.imageURL}
          style={{
            resizeMode: 'contain',
            width: 200,
            height: 250,
            borderRadius: 16,
          }}
        />
      </ImageWrapper>
      <MovieNameTitle>{movie?.name}</MovieNameTitle>

      <MovieFeaturesTextWrapper>
        <MovieFeaturesText inDate>{movie?.date}</MovieFeaturesText>
        <MovieFeaturesText>{movie?.gender}</MovieFeaturesText>
        <MovieFeaturesText>{movie?.duration}</MovieFeaturesText>
      </MovieFeaturesTextWrapper>

      <StarsWrapper>
        <FlatList
          horizontal
          data={movie?.stars}
          keyExtractor={(_, index) => String(index)}
          style={{ maxHeight: 16, maxWidth: 92, marginVertical: 6 }}
          renderItem={({ item: star }) => (
            <Ionicons
              name={typeof star === 'undefined' ? 'star' : (star as 'star')}
              color={typeof star === 'undefined' ? '#64748b' : '#FAC53D'}
              style={{ marginHorizontal: 2 }}
            />
          )}
        />

        <StarsTextLeft>
          {typeof movie?.starsConfirmed !== 'undefined'
            ? (movie?.starsConfirmed * 2).toFixed(1)
            : 'Has no votes'}
        </StarsTextLeft>
        <StarsTextRight> / 10</StarsTextRight>
      </StarsWrapper>

      <SynopsisAndTicketWrapper>
        <SynopsisWrapper>
          <SynopsisText>{movie?.synopsis}</SynopsisText>

          <Pressable style={{ marginTop: 16 }}>
            <ReadMoreTextButton>READ MORE</ReadMoreTextButton>
          </Pressable>
        </SynopsisWrapper>

        <CheckTicketButton onPress={() => getPage('ticket')}>
          <CheckTicketButtonText>
            Check Ticket Availaility
          </CheckTicketButtonText>
        </CheckTicketButton>
      </SynopsisAndTicketWrapper>
    </Container>
  );
}
