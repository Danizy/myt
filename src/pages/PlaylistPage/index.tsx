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

  console.log(playlist)

  return (
    <Appear>
      <Link to={PATHS.home}>Go back</Link>
      <div className="align-middle justify-center flex">
        <input
          className="text-black"
          value={playlistId}
          onChange={(e) => setPlaylistId(e.target.value)}
        />
        <button onClick={onFetchPlaylistClick}>Load</button>
      </div>
      {playlist !== undefined && (
        <div className="mt-5 px-8 max-w-5xl justify-center w-full mx-auto flex">
          <div>
            <div className="mb-5">
              <h2 className="text-4xl">{playlist.title}</h2>
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
