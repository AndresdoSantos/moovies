import dayjs from 'dayjs';
import { useCallback, useContext, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { NavigationContext } from '../../contexts/NavigationContext';

import {
  BookingCardContainer,
  BookingCardTitle,
  DayButtonWrapper,
  DayButtonTextWrapper,
  TopLine,
  DayWrapper,
  HourWrapper,
  HourButtonWrapper,
  HourButtonTextWrapper,
  BookingButtonWrapper,
  BookingPrice,
  BookingButton,
  BookingButtonText,
  BookingButtonDot,
  BookingButtonPressable,
} from './styles';

const date = [
  '2021-03-1',
  '2021-03-2',
  '2021-03-3',
  '2021-03-4',
  '2021-03-5',
  '2021-03-6',
  '2021-03-7',
  '2021-03-8',
  '2021-03-9',
];

const hour = ['16:30', '18:50', '21:30', '23:45'];

type TBookingCardProps = {
  ticketPrice: number;
};

export function BookingCard({ ticketPrice }: TBookingCardProps) {
  const { page, getPage } = useContext(NavigationContext);

  const [daySelected, setDaySelected] = useState<string | undefined>(undefined);
  const [hourSelected, setHourSelected] = useState<string | undefined>(
    undefined
  );
  return (
    <BookingCardContainer>
      <TopLine />

      <BookingCardTitle>DATE</BookingCardTitle>

      <DayWrapper>
        <FlatList
          data={date}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <DayButtonWrapper
              isSelectedDay={daySelected === item}
              onPress={() => setDaySelected(item)}
            >
              <DayButtonTextWrapper isSelectedDay={daySelected === item}>
                {dayjs(item).format('DD MMM')}
              </DayButtonTextWrapper>
            </DayButtonWrapper>
          )}
        />
      </DayWrapper>

      <BookingCardTitle>TIME</BookingCardTitle>

      <HourWrapper>
        <FlatList
          data={hour}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <HourButtonWrapper
              isSelectedHour={hourSelected === item}
              onPress={() => setHourSelected(item)}
            >
              <HourButtonTextWrapper isSelectedHour={hourSelected === item}>
                {item}
              </HourButtonTextWrapper>
            </HourButtonWrapper>
          )}
        />
      </HourWrapper>

      <BookingButtonWrapper>
        <BookingPrice>${ticketPrice?.toFixed(2)}</BookingPrice>

        <BookingButton
          colors={['#EF915C', '#D36054']}
          start={[0, 1]}
          end={[1, 0]}
        >
          <BookingButtonDot inLeft />

          <BookingButtonPressable onPress={() => getPage('home')}>
            <BookingButtonText>Booking</BookingButtonText>
          </BookingButtonPressable>
          <BookingButtonDot inLeft={false} />
        </BookingButton>
      </BookingButtonWrapper>
    </BookingCardContainer>
  );
}
