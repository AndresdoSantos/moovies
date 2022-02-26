import styled from 'styled-components/native';

export const TicketContainer = styled.View`
  flex: 1;
  align-items: center;
  background: #181a20;
`;

type TSeat = {
  seatOccupied: boolean;
  partiallyOccupiedSeat: boolean;
};

export const Seat = styled.Pressable<TSeat>`
  height: 24px;
  width: 24px;
  background: ${(props) =>
    props.seatOccupied
      ? '#fff'
      : props.partiallyOccupiedSeat
      ? '#827FFF'
      : '#28292A'};
  margin: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 4px;

  elevation: 5;
`;

export const Screen = styled.View`
  width: 95%;
  height: 8px;
  border-radius: 4px;
  background-color: #fff;
  margin-bottom: 50px;
`;
