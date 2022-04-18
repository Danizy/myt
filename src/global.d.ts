import { WriteStream } from 'fs'
import ytpl from 'ytpl'

declare global {
  interface Window {
    ytpl: typeof ytpl
    downloadSong: (
      songUrl: string,
      songName: string,
      downloadEvents: {
        onFinish?: () => void
        onDownloadProgress?: (
          currentByte: number,
          fetchedBytes: number,
          totalBytes: number
        ) => void
        onConvertProgress?: (progress: number) => void
      }
    ) => WriteStream
  }
}
export {}
