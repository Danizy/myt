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
    <div className="flex bg-slate-800 mb-5 pr-3">
      {!!song.bestThumbnail.url && (
        <img
          src={song.bestThumbnail.url}
          alt="thumbnail"
          className="object-cover mr-5"
          width={200}
        />
      )}
      <div className="flex flex-col w-full py-3">
        <div className="w-full">
          <h2>{song.title}</h2>
          <button
            {...{ onClick }}
            className="bg-blue-500 rounded-md p-2 hover:bg-blue-400"
          >
            Download
          </button>
        </div>
        {percentageFetched !== undefined && (
          <span>Downloaded: {percentageFetched.toFixed(0)}%</span>
        )}
        {convertProgress !== undefined && (
          <span>Converted: {convertProgress.toFixed(0)}%</span>
        )}
        {isFinished && <span>Done</span>}
      </div>
    </div>
  )
}

export default SongListElement
