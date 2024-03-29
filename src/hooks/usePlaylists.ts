import { useState } from 'react'
import ytpl from 'ytpl'

const usePlaylists = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false)
  const [playlist, setPlaylist] = useState<ytpl.Result | undefined>()

  const fetchPlaylist = async (playlistIdentifier: string) => {
    try {
      setIsLoading(true)

      const ytpl = window.ytpl
      const playlist = await ytpl(playlistIdentifier, { limit: 800 })

      setPlaylist(playlist)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    playlist,
    fetchPlaylist,
  }
}

export default usePlaylists
