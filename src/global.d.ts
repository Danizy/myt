import { WriteStream } from 'fs';
import ytpl from 'ytpl';

declare global {
  interface Window {
    ytpl: typeof ytpl;
    downloadSong: (songUrl: string, songName: string) => WriteStream;
  }
}
export {};
