import { useState } from 'react'

const useDownloadSong = () => {
  const [bytesFetched, setBytesFetched] = useState<number | undefined>()
  const [totalBytes, setTotalBytes] = useState<number | undefined>()
  const [isFinished, setIsFinished] = useState(false)
  const [convertProgress, setConvertProgress] = useState<number | undefined>()

  const downloadSong = (songUrl: string, songName: string) => {
    const ytdlDownload = window.downloadSong

    ytdlDownload(songUrl, `${songName}.mp4`, {
      onFinish: () => setIsFinished(true),
      onDownloadProgress: (a, b, c) => {
        setBytesFetched(b)
        setTotalBytes(c)
      },
      onConvertProgress: (conversionProgress) =>
        setConvertProgress(conversionProgress),
    })
  }

  const percentageFetched =
    bytesFetched === undefined || totalBytes === undefined
      ? undefined
      : (bytesFetched * 100) / totalBytes

  return { downloadSong, percentageFetched, isFinished, convertProgress }
}

export default useDownloadSong
