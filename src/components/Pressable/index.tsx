import React, { ReactNode } from 'react';

import PressableStyled from './styles';

interface PressableProps {
  theme: 'primary' | 'secondary';
  children: ReactNode;
}

export default function Pressable({ theme, children }: PressableProps) {
  return (
    <PressableStyled theme={theme}>
      {children}
    </PressableStyled>
  );
}
