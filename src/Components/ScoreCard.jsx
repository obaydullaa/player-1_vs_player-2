import React from 'react'

export default function ScoreCard({inputText}) {
  return (
    <>
    <h2>Player Vs Player</h2>
    <div className='score'>
            <h2>Winning score {inputText}</h2>
    </div>
    </>
  )
}
