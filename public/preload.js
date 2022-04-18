const { contextBridge } = require('electron')
const ytpl = require('ytpl')
const ytdl = require('ytdl-core')
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
const pathToFfmpeg = require('ffmpeg-static')
const path = require('path')

const DURATION_REGEX = /(\d+):(\d+):(\d+).(\d+)/

const durationToSeconds = (duration) => {
  const match = DURATION_REGEX.exec(duration)

  if (!match) return 0

  return parseInt(match[1]) * 60 * 60 + parseInt(match[2]) * 60 + match[3]
}

const downloadSong = async (
  songUrl,
  songName,
  { onFinish, onDownloadProgress, onConvertProgress }
) => {
  const safeSongName = songName.replace(/[/\\?%*:|"<>]/g, '-')
  const downloadStream = ytdl(songUrl, { quality: 'highestaudio' })

  if (onDownloadProgress) downloadStream.on('progress', onDownloadProgress)

  const mp4Path = path.join('downloads', 'temp', safeSongName)

  downloadStream.pipe(
    fs
      .createWriteStream(mp4Path)
      .on('close', () =>
        convertMp4ToMp3(safeSongName, onConvertProgress, onFinish)
      )
  )
}

const convertMp4ToMp3 = async (mp4SongName, onConvertProgress, onFinish) => {
  const mp4Path = path.join('downloads', 'temp', mp4SongName)
  const mp3songName = mp4SongName.slice(0, -3) + 'mp3'
  const mp3Path = path.join('downloads', mp3songName)

  let inputDuration = 0

  try {
    const proc = await new ffmpeg(mp4Path)
    proc.setFfmpegPath(pathToFfmpeg)
    proc
      .on('codecData', (data) => {
        inputDuration = durationToSeconds(data.duration)
      })
      .on('progress', (progress) => {
        if (!onConvertProgress) return

        const timemark = durationToSeconds(progress.timemark)

        onConvertProgress((timemark * 100) / inputDuration)
      })
      .on('end', () => onFinish())
      .saveToFile(mp3Path)
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

contextBridge.exposeInMainWorld('ytpl', ytpl)
contextBridge.exposeInMainWorld('downloadSong', downloadSong)
