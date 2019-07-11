import React from 'react';


function Searchbar (props) {
  return(
    <span>
      <input placeholder="Search reviews" type="text"
       onChange={props.onKeystroke}
      onKeyPress={props.onKeystroke} />
    </span>
  )
}
export default Searchbar