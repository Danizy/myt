import { useState } from 'react';
import ytpl from 'ytpl';

const usePlaylists = () => {
  const [playlist, setPlaylist] = useState<ytpl.Result | undefined>();

  const fetchPlaylist = async (playlistIdentifier: string) => {
    try {
      const ytpl = window.ytpl;
      const playlist = await ytpl(playlistIdentifier, { limit: 20 });

      setPlaylist(playlist);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    playlist,
    fetchPlaylist,
  };
};

export default usePlaylists;
