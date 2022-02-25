import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import ytpl from 'ytpl';

export interface SongListElementProps {
  song: ytpl.Item;
}

const SongListElement = ({ song }: SongListElementProps) => {
  return (
    <Paper sx={{ mb: 2, display: 'flex' }}>
      {!!song.bestThumbnail.url && (
        <img src={song.bestThumbnail.url} alt="thumbnail" width={200} />
      )}
      <Box sx={{ p: 2 }}>
        <Typography>{song.title}</Typography>
      </Box>
    </Paper>
  );
};

export default SongListElement;
