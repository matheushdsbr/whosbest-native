import React from 'react';
import Pressable from '../../components/Pressable';

import {
  Title, Container, PressableContainer, PressableText,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Title>
        Who's Best!?
      </Title>

      <PressableContainer>
        <Pressable theme="primary">
          <PressableText color="white" fontSize="16px" fontWeights="900">Sign up</PressableText>
        </Pressable>
      </PressableContainer>

      <PressableContainer>
        <Pressable theme="secondary">
          <PressableText underline color="gray" fontSize="16px" fontWeights="900">Login</PressableText>
        </Pressable>
      </PressableContainer>
    </Container>
  );
}
