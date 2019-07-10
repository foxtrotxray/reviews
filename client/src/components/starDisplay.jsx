import React from 'react';

function StarDisplay (props) {
  let output =[]
  for (let i = 0; i < props.starCount; i++) {
    output.push(<img src='newTealStar.png' width="18px" height="18px" key={i}></img>)
  }
  return (<span>{output}</span>)
}
export default StarDisplay