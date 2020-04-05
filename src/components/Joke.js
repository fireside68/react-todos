import React from 'react'

function Joke(props) {
  return (
    <div>
      <p style={props.question ? {display: 'block'} : {display: 'none'}}>Q: {props.question}</p>
      <p>A: {props.punchLine}</p>
    </div>
  )
}

export default Joke