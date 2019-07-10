
import StarDisplay from  './starDisplay.jsx'
import React from 'react';
function Overbar (props) {
  return (<div>
    <strong>{props.reviewCount} Reviews</strong>
    <StarDisplay starCount={props.reviewScore}/>
    <input placeholder="Search reviews" type="text" />
  </div>
  )
}
export default Overbar