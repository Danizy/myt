import useDownloadSong from 'hooks/useDownloadSong'
import ytpl from 'ytpl'

export interface SongListElementProps {
  song: ytpl.Item
}

const SongListElement = ({ song }: SongListElementProps) => {
  const { downloadSong, percentageFetched, isFinished, convertProgress } =
    useDownloadSong()

  const onClick = () => downloadSong(song.url, song.title)

  return (
    <div>
      {!!song.bestThumbnail.url && (
        <img src={song.bestThumbnail.url} alt="thumbnail" width={200} />
      )}
      <div>
        <div>
          <span>{song.title}</span>
          <button {...{ onClick }}>Download</button>
        </div>
        {/* {percentageFetched !== undefined && (
          <LinearProgress variant="determinate" value={percentageFetched} />
        )}
        {convertProgress !== undefined && (
          <LinearProgress
            variant="determinate"
            color="secondary"
            value={convertProgress}
          />
        )} */}
        {isFinished && <span>Done</span>}
      </div>
    </div>
  )
}

export default SongListElement
