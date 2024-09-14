import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import Genre from '../entities/Genre';
import getCroppedImageUrl from '../services/image-url';
import useGamesStore from '../store';

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  const selectedGenreId = useGamesStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGamesStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <Box pt={3}>
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>
      <List>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id}>
            <HStack py="5px">
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                className="hover"
                variant="link"
                fontSize={genre.id === selectedGenreId ? 'lg' : 'md'}
                _hover={{ color: 'gray.400' }}
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;
