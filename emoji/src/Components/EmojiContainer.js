import React from 'react'
import SingleEmoji from './SingleEmoji'

const EmojiContainer = ({ list }) => {
  return (
    <div className='container'>
      {list.map((emoji, idx) => {
        return (
          <SingleEmoji key={idx} emoji={emoji} />
        )
      })}
    </div>
  )
}

export default EmojiContainer