import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import SongListElement from 'components/SongListElement';
import usePlaylists from 'hooks/usePlaylists';
import PATHS from 'navigation/paths';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlaylistPage = () => {
  const [playlistId, setPlaylistId] = useState<string>('');

  const { playlist, fetchPlaylist } = usePlaylists();

  const onFetchPlaylistClick = () => {
    if (!playlistId) return;

    fetchPlaylist(playlistId);
  };

  console.log(playlist);

  return (
    <div>
      <Button component={Link} to={PATHS.home} variant="contained">
        Go back
      </Button>
      <Container
        maxWidth="xs"
        sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}
      >
        <TextField
          variant="filled"
          label="playlist id"
          fullWidth
          value={playlistId}
          onChange={(e) => setPlaylistId(e.target.value)}
        />
        <Button
          sx={{ marginLeft: 3 }}
          variant="contained"
          onClick={onFetchPlaylistClick}
        >
          Load
        </Button>
      </Container>
      {playlist !== undefined && (
        <Container sx={{ mt: 5 }}>
          <Stack>
            <Paper sx={{ mb: 5 }}>
              <Typography variant="h3">{playlist.title}</Typography>
            </Paper>
            {playlist.items.map((song) => (
              <SongListElement {...{ song }} key={song.id} />
            ))}
          </Stack>
        </Container>
      )}
    </div>
  );
};

export default PlaylistPage;
