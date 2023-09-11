import styled from 'styled-components';
import { Pressable } from 'react-native';

interface PressableProps {
  theme: 'primary' | 'secondary';
}

const PressableStyled = styled(Pressable)<PressableProps>`
  width: 100%;
  padding: 12px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 50px;
  background-color: ${({ theme }) => (theme === 'primary' ? '#000000' : 'transparent')};
`;

export default PressableStyled;
