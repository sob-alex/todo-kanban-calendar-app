import { Box, Stack } from '@mui/material';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import HomeCard from './components/HomeCard';
import { todosCardList } from './todosData';

interface Props {}

const iconProps = {
  color: 'secondary',
  fontSize: 'inherit',
  sx: {
    px: 1,
    fontSize: '10rem',
  },
} as const;

const Home = (props: Props) => {
  return (
    <Box
      sx={{
        mt: 4,
      }}
    >
      <Stack direction='column' spacing={2}>
        {todosCardList.map((todoInfo) => (
          <HomeCard
            key={todoInfo.id}
            title={todoInfo.title}
            text={todoInfo.text}
            icon={<todoInfo.iconComponent {...iconProps} />}
          />
        ))}
      </Stack>
    </Box>
  );
};
export default Home;
