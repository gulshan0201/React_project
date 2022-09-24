import CopyToClipboard from "react-copy-to-clipboard"

const SingleEmoji = ({ emoji }) => {
  return (
    <CopyToClipboard text={emoji.emoji}>
      <div className='item'>
        <p className="emoji-icon">{emoji.emoji} </p>
        <p>{emoji.description}</p>
      </div>
    </CopyToClipboard>
  )
}

export default SingleEmoji