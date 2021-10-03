import React from 'react';

import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import ROUTES from '../../../constants/routes';
interface Props {
  title: string;
  text: string;
  icon: React.ReactNode;
}

const StyledLink = styled(Link)({
  textDecoration: 'none',
});

const HomeCard = ({ icon, title, text }: Props) => {
  return (
    <StyledLink to={ROUTES.BOARD}>
      <Card>
        <CardActionArea
          sx={{
            display: 'flex',
          }}
        >
          <Box>{icon}</Box>

          <CardContent
            sx={{
              flexGrow: 1,
            }}
          >
            <Typography
              gutterBottom
              variant='h5'
              component='div'
            >
              {title}
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
            >
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </StyledLink>
  );
};
export default HomeCard;
