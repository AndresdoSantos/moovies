import { useContext, useMemo } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions, FlatList, Image, View } from 'react-native';

import { Header } from '../../components/Header';
import { Title } from '../../components/Title';

import { NavigationContext, TMovie } from '../../contexts/NavigationContext';
import {
  CardWrapper,
  CardWrapperTitle,
  Container,
  Dot,
  DotsWrapper,
  ImageWrapper,
  Input,
  InputWrapper,
  SearchWrapper,
} from './styles';

export function Home() {
  const { getMovie } = useContext(NavigationContext);

  const movies = useMemo(
    (): TMovie[] => [
      {
        imageURL: require('../../../assets/joker2.jpg'),
        stars: ['star', 'star', 'star', 'star', undefined],
        name: `Joker`,
        date: '2019',
        duration: '2h 2m',
        gender: 'Drama/Crime',
        starsConfirmed: 4,
        synopsis:
          'Isolated, bullied and disregarded by society, failed comedian Arthur Fleck starts his path as a criminal mastermind after murdering three men in the middle of the subway. His action starts a popular movement against Gotham Citys elite, of which Thomas Wayne is its biggest representative.',
      },
      {
        imageURL: require('../../../assets/1917.jpeg'),
        stars: ['star', 'star', 'star', undefined, undefined],
        name: `1917`,
        date: '2020',
        duration: '2h 14m',
        gender: 'War/Action',
        starsConfirmed: 3,
        synopsis:
          'In World War I, two British soldiers are given seemingly impossible orders. In a race against time, they must cross enemy territory and deliver a message that could save 1,600 of their comrades.',
      },
      /**{
        imageURL: require('../../../assets/imthink.jpg'),
        stars: ['star', 'star', 'star', 'star'],
        name: `I'm thinking of Ending Things`,
        date: '2021',
        duration: '1h 49m',
        gender: 'Terror/Horror',
      },
      {
        imageURL: require('../../../assets/endgame.jpg'),
        stars: ['star', 'star', 'star', 'star'],
        name: `End Game`,
        date: '2020',
        duration: '3h 1m',
        gender: 'Science Fiction/Action',
      }, */
    ],
    []
  );

  return (
    <Container>
      <Header>
        <DotsWrapper>
          <Dot />
          <Dot />
        </DotsWrapper>

        <ImageWrapper>
          <Image
            source={require('../../../assets/people.jpeg')}
            style={{ width: 40, height: 40, borderRadius: 40 }}
          />
        </ImageWrapper>
      </Header>

      <Title title="Explore" description={`Let's find your favorite movie`} />

      <SearchWrapper>
        <InputWrapper>
          <Ionicons
            name="search"
            size={20}
            color="#64748b"
            style={{ marginRight: 12 }}
          />
          <Input placeholder="Search..." />
        </InputWrapper>

        <Ionicons
          name="options"
          size={20}
          color="#64748b"
          style={{ marginLeft: 16 }}
        />
      </SearchWrapper>

      <View>
        <FlatList
          data={movies}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <CardWrapper onPress={() => getMovie(item)}>
              <Image
                source={item.imageURL}
                style={{
                  width: Dimensions.get('screen').width / 2.5,
                  height: 250,
                  borderRadius: 16,
                  marginBottom: 8,
                  resizeMode: 'stretch',
                }}
              />
              <CardWrapperTitle>{item.name}</CardWrapperTitle>
              <FlatList
                horizontal
                data={item.stars}
                keyExtractor={(_, index) => String(index)}
                style={{ maxHeight: 16, marginVertical: 6 }}
                renderItem={({ item: star }) => (
                  <Ionicons
                    name={
                      typeof star === 'undefined' ? 'star' : (star as 'star')
                    }
                    color={typeof star === 'undefined' ? '#64748b' : '#FAC53D'}
                    style={{ marginHorizontal: 2 }}
                  />
                )}
              />
            </CardWrapper>
          )}
        />
      </View>
    </Container>
  );
}
