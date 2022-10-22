import SongListElement from 'components/SongListElement'
import usePlaylists from 'hooks/usePlaylists'
import PATHS from 'navigation/paths'
import Appear from 'components/utils/Appear'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const PlaylistPage = () => {
  const [playlistId, setPlaylistId] = useState<string>(
    'https://www.youtube.com/playlist?list=PLuwBoM-vCdozd068RNBwZqYAlN0rsf4wY'
  )

  const { playlist, fetchPlaylist } = usePlaylists()

  const onFetchPlaylistClick = () => {
    if (!playlistId) return

    fetchPlaylist(playlistId)
  }

  return (
    <Appear>
      <Link to={PATHS.home}>Go back</Link>
      <div>
        <input
          value={playlistId}
          onChange={(e) => setPlaylistId(e.target.value)}
        />
        <button onClick={onFetchPlaylistClick}>Load</button>
      </div>
      {playlist !== undefined && (
        <div>
          <div>
            <div>
              <span>{playlist.title}</span>
            </div>
            {playlist.items.map((song) => (
              <SongListElement {...{ song }} key={song.id} />
            ))}
          </div>
        </div>
      )}
    </Appear>
  )
}

export default PlaylistPage
