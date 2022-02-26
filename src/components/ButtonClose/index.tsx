import { Ionicons } from '@expo/vector-icons';

import { ButtonCloseContainer } from './styles';

type TButtonCloseProps = {
  onPress: () => void;
};

export function ButtonClose({ onPress }: TButtonCloseProps) {
  return (
    <ButtonCloseContainer onPress={onPress}>
      <Ionicons name="close" color="#fff" />
    </ButtonCloseContainer>
  );
}
