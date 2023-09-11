import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: 500;
`;

export const PressableContainer = styled.View`
  width: 250px;
`;

interface PressableTextProps {
  color: 'white' | 'black' | 'gray';
  fontWeights: '400' | '900';
  fontSize: '16px' | '12px';
  underline?: boolean;
}

export const PressableText = styled.Text<PressableTextProps>`
  color: ${({ color }) => color};
  font-weight: ${({ fontWeights }) => fontWeights};
  font-size: ${({ fontSize }) => fontSize};

  ${({ underline }) => !!underline && css`
    border-bottom-width: 1px;
    border-color: #515151;
  `}
`;
