import React from 'react'

export default function ScoreCard({winningScore}) {
  return (
    <>
    <h2>Player Vs Player</h2>
    <div className='score'>
            <h2>Winning score {winningScore}</h2>
    </div>
    </>
  )
}
