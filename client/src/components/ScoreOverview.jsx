import React from 'react';
import StarDisplay from  './starDisplay.jsx'

function ScoreOverview (props) {
  return (
    <div>
    <span>Accuracy<StarDisplay starCount={props.listingData.accuracy_score}/></span>
    <span>Location<StarDisplay starCount={props.listingData.location_score}/></span>
    <div></div>
    <span>Communication<StarDisplay starCount={props.listingData.communication_score}/></span>
    <span>Check-in<StarDisplay starCount={props.listingData.check_in_score}/></span>
    <div></div>
    <span>Cleanliness<StarDisplay starCount={props.listingData.cleanliness_score}/></span>
    <span>Value<StarDisplay starCount={props.listingData.value_score}/></span>
    </div>
  )
}
export default ScoreOverview