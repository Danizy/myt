import { Box, Button, LinearProgress, Paper, Typography } from '@mui/material'
import useDownloadSong from 'hooks/useDownloadSong'
import React from 'react'
import ytpl from 'ytpl'

export interface SongListElementProps {
  song: ytpl.Item
}

const SongListElement = ({ song }: SongListElementProps) => {
  const { downloadSong, percentageFetched, isFinished, convertProgress } =
    useDownloadSong()

  const onClick = () => downloadSong(song.url, song.title)

  return (
    <Paper sx={{ mb: 2, display: 'flex' }}>
      {!!song.bestThumbnail.url && (
        <img src={song.bestThumbnail.url} alt="thumbnail" width={200} />
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Box sx={{ m: 2, width: '100%' }}>
          <Typography>{song.title}</Typography>
          <Button {...{ onClick }} variant="contained">
            Download
          </Button>
        </Box>
        {percentageFetched !== undefined && (
          <LinearProgress variant="determinate" value={percentageFetched} />
        )}
        {convertProgress !== undefined && (
          <LinearProgress
            variant="determinate"
            color="secondary"
            value={convertProgress}
          />
        )}
        {isFinished && <Typography>Done</Typography>}
      </Box>
    </Paper>
  )
}

export default SongListElement
