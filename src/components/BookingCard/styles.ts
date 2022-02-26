import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

export const BookingCardContainer = styled.View`
  height: ${Dimensions.get('screen').height / 2.2}px;
  width: ${Dimensions.get('screen').width}px;

  border-top-right-radius: 48px;
  border-top-left-radius: 48px;

  position: absolute;
  bottom: 0;

  background-color: #19191b;
  elevation: 20;

  align-items: center;
`;

export const TopLine = styled.View`
  background: #2e2e31;
  width: 80px;
  height: 6px;

  border-radius: 4px;
  margin: 10px 0;
`;

export const BookingCardTitle = styled.Text`
  color: #505156;
  font-weight: bold;
  margin-right: auto;
  margin-left: 16px;
  margin-top: 40px;
  margin-bottom: 12px;
`;

export const DayWrapper = styled.View`
  height: 50px;
`;

type TDayButtonWrapper = {
  isSelectedDay?: boolean;
};

export const DayButtonWrapper = styled.Pressable<TDayButtonWrapper>`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 85px;

  background-color: ${(props) => (props.isSelectedDay ? '#827fff' : '#19191b')};
  border-radius: 16px;
`;

export const DayButtonTextWrapper = styled.Text<TDayButtonWrapper>`
  color: ${(props) => (props.isSelectedDay ? '#fff' : '#84878e')};
  font-size: 16px;
`;

export const HourWrapper = styled.View`
  height: 50px;
  width: 100%;
`;

type THourButtonWrapper = {
  isSelectedHour?: boolean;
};

export const HourButtonWrapper = styled.Pressable<THourButtonWrapper>`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 85px;

  background-color: ${(props) =>
    props.isSelectedHour ? '#827fff' : '#19191b'};
  border-radius: 16px;
`;

export const HourButtonTextWrapper = styled.Text<THourButtonWrapper>`
  color: ${(props) => (props.isSelectedHour ? '#fff' : '#84878e')};
  font-size: 16px;
`;

export const BookingButtonWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 52px;
  padding: 0 16px;
`;

export const BookingPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;

  margin-right: 12px;
`;

export const BookingButton = styled(LinearGradient)`
  height: 60px;
  flex: 1;
  max-width: 250px;
  border-radius: 24px;

  align-items: center;
  justify-content: center;

  position: relative;
`;

export const BookingButtonText = styled.Text`
  color: #fff;
  font-size: 12px;
  letter-spacing: 1px;
`;

type TBookingButtonDot = {
  inLeft: boolean;
};

export const BookingButtonDot = styled.View<TBookingButtonDot>`
  height: 20px;
  width: 20px;
  border-radius: 30px;
  background: #19191b;
  position: absolute;

  ${(props) =>
    props.inLeft &&
    css`
      left: -15px;
    `}

  ${(props) =>
    !props.inLeft &&
    css`
      right: -15px;
    `}
`;
