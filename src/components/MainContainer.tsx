import React, { ReactNode } from 'react';
import { Container } from '@mui/material';

interface Props {
  children: ReactNode;
}

export const MainContainer = ({ children }: Props) => {
  return <Container maxWidth='md'>{children}</Container>;
};
