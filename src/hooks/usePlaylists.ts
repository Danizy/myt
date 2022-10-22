import { useState } from 'react'
import ytpl from 'ytpl'

const usePlaylists = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [playlist, setPlaylist] = useState<ytpl.Result | undefined>()

  const fetchPlaylist = async (playlistIdentifier: string) => {
    try {
      setIsLoading(true)

      console.log(window.ytpl)

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
