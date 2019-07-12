import React from 'react';

function StarDisplay (props) {
  let output =[]
  for (let i = 0; i < 5; i++) {
    if (i < props.starCount) {
      output.push(<img src='newTealStar.png' width="18px" height="18px" key={i}></img>)
    } else {
      output.push(<img src='newGreyStar.png' width="18px" height="18px" key={i}></img>)
    }
  }
  return (<span>{output}</span>)
}
export default StarDisplay