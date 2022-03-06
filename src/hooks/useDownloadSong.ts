import { useState } from 'react';

const useDownloadSong = () => {
  const [bytesFetched, setBytesFetched] = useState<number | undefined>();
  const [totalBytes, setTotalBytes] = useState<number | undefined>();
  const [isFinished, setIsFinished] = useState(false);
  console.log(isFinished);

  const downloadSong = (songUrl: string, songName: string) => {
    const ytdlDownload = window.downloadSong;

    //@ts-ignore
    ytdlDownload(
      songUrl,
      `${songName}.mp4`,
      //@ts-ignore
      'progress',
      //@ts-ignore
      (a, b, c) => {
        console.log(a, b, c);
        setBytesFetched(b);
        setTotalBytes(c);
      },
      () => setIsFinished(true)
    );
  };

  const percentageFetched =
    bytesFetched === undefined || totalBytes === undefined
      ? undefined
      : (bytesFetched * 100) / totalBytes;

  return { downloadSong, percentageFetched, isFinished };
};

export default useDownloadSong;
