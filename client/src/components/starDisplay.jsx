import React from 'react';
import styles from '../styles/starDisplayStyle.css'
function StarDisplay (props) {
  let output =[]
  for (let i = 0; i < 5; i++) {
    if (i < props.starCount) {
      output.push(<img src='newTealStar.png' className={styles.star} key={i}></img>)
    } else {
      output.push(<img src='newGreyStar.png' className={styles.star} key={i}></img>)
    }
  }
  return (<span className={styles.starDisplay}>{output}</span>)
}
export default StarDisplay