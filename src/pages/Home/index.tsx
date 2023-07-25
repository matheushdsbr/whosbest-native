import React from 'react';
import Button from '../../components/Button';
import {ButtonContainer, Title, Container} from './styles';

export default function Home() {
  return (
    <Container>
      <Title>Who's Best!?</Title>
      <ButtonContainer>
        <Button color="black">Vote</Button>
      </ButtonContainer>
    </Container>
  );
}
