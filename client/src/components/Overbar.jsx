import StarDisplay from  './starDisplay.jsx'
import React from 'react';
import Searchbar from './Searchbar.jsx'
import styles from '../styles/overbarStyle.css'
function Overbar (props) {
  return (<div className={styles.overbar}>
    <span>

    <strong>{props.reviewCount} Reviews</strong>
    </span>
    <span>
    <StarDisplay starCount={props.reviewScore}/>
    </span>

  </div>
  )
}
export default Overbar