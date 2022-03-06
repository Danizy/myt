const { contextBridge } = require('electron');
const ytpl = require('ytpl');
const ytdl = require('ytdl-core');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const pathToFfmpeg = require('ffmpeg-static');
const path = require('path');

const downloadSong = async (songUrl, songName, event, listener, onFinish) => {
  const safeSongName = songName.replace(/[/\\?%*:|"<>]/g, '-');
  const downloadStream = ytdl(songUrl, { quality: 'highestaudio' });

  if (!!event && listener) downloadStream.on(event, listener);

  const mp4Path = path.join('downloads', 'temp', safeSongName);

  downloadStream.pipe(
    fs
      .createWriteStream(mp4Path)
      .on('close', () => convertMp4ToMp3(safeSongName, onFinish))
  );
};

const convertMp4ToMp3 = async (mp4SongName, onFinish) => {
  const mp4Path = path.join('downloads', 'temp', mp4SongName);
  const mp3songName = mp4SongName.slice(0, -3) + 'mp3';
  const mp3Path = path.join('downloads', mp3songName);

  try {
    const proc = await new ffmpeg(mp4Path);
    proc.setFfmpegPath(pathToFfmpeg);
    proc.saveToFile(mp3Path).on('end', () => onFinish());
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

contextBridge.exposeInMainWorld('ytpl', ytpl);
contextBridge.exposeInMainWorld('downloadSong', downloadSong);
