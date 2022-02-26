import { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { BookingCard } from '../../components/BookingCard';
import { ButtonClose } from '../../components/ButtonClose';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';

import { Screen, Seat, TicketContainer } from './styles';

type TSeatData = {
  seatId: number;
  seatOccupied: boolean;
  selectedSeat?: boolean;
};

const data: TSeatData[] = [
  { seatId: 1, seatOccupied: true },
  { seatId: 2, seatOccupied: false },
  { seatId: 3, seatOccupied: false },
  { seatId: 4, seatOccupied: true },
  { seatId: 5, seatOccupied: true },
  { seatId: 6, seatOccupied: false },
  { seatId: 7, seatOccupied: true },
  { seatId: 8, seatOccupied: false },
  { seatId: 9, seatOccupied: false },
  { seatId: 10, seatOccupied: true },
  { seatId: 11, seatOccupied: false },
  { seatId: 12, seatOccupied: false },
  { seatId: 13, seatOccupied: false },
  { seatId: 14, seatOccupied: true },
  { seatId: 15, seatOccupied: false },
  { seatId: 16, seatOccupied: false },
  { seatId: 17, seatOccupied: false },
  { seatId: 18, seatOccupied: false },
  { seatId: 19, seatOccupied: true },
  { seatId: 20, seatOccupied: false },
  { seatId: 21, seatOccupied: false },
  { seatId: 22, seatOccupied: false },
  { seatId: 23, seatOccupied: false },
  { seatId: 24, seatOccupied: false },
  { seatId: 25, seatOccupied: true },
  { seatId: 26, seatOccupied: false },
  { seatId: 27, seatOccupied: false },
  { seatId: 28, seatOccupied: false },
  { seatId: 29, seatOccupied: false },
  { seatId: 30, seatOccupied: true },
  { seatId: 31, seatOccupied: false },
  { seatId: 32, seatOccupied: false },
];

export function Ticket() {
  const unityTicketPrice = 12.5;

  const [seats, setSeats] = useState<TSeatData[]>([]);
  const [seatSelectedId, setSeatSelectedId] = useState<number[]>([]);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [cancelOperation, setCancelOperation] = useState(false);

  useEffect(() => {
    setSeats(data);
  }, []);

  const handleRemoveSeat = useCallback(
    (seatId: number) => {
      const index = seatSelectedId.indexOf(seatId);

      seatSelectedId.splice(index, 1);

      setSeatSelectedId([...seatSelectedId]);
    },
    [seatSelectedId]
  );

  const handleSelectSeat = useCallback(
    (seatId: number) => {
      const seatSelected = seatSelectedId.find((item) => item === seatId);

      seatSelected
        ? handleRemoveSeat(seatSelected)
        : setSeatSelectedId([...seatSelectedId, seatId]);
    },
    [seatSelectedId, handleRemoveSeat]
  );

  useEffect(() => {
    setTicketPrice(unityTicketPrice * seatSelectedId.length);
  }, [seatSelectedId]);

  return (
    <TicketContainer>
      {cancelOperation ? (
        <View>
          <Text>Cancel</Text>
        </View>
      ) : (
        <>
          <Header>
            <Title
              title="Choose Your Seats"
              description="Scoatiabank Theatre Toronto"
            />

            <ButtonClose onPress={() => setCancelOperation(true)} />
          </Header>

          <Screen />

          <FlatList
            numColumns={8}
            data={seats}
            keyExtractor={(item) => String(item.seatId)}
            renderItem={({ item }) => (
              <Seat
                disabled={item.seatOccupied}
                seatOccupied={item.seatOccupied}
                partiallyOccupiedSeat={
                  typeof seatSelectedId.find(
                    (seatSelectedItemId) => seatSelectedItemId === item.seatId
                  ) !== 'undefined'
                }
                onPress={() => handleSelectSeat(item.seatId)}
              />
            )}
          />

          {seatSelectedId.length > 0 && (
            <BookingCard ticketPrice={ticketPrice} />
          )}
        </>
      )}
    </TicketContainer>
  );
}
