import React from 'react';
import Review from './Review.jsx'

class ReviewList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {reviewPageNumber:1}
    this.incrementPageNumber = this.incrementPageNumber.bind(this);
  }
  incrementPageNumber() {
    this.setState((state) => {
      return {reviewPageNumber: state.reviewPageNumber + 7}
    });
  }

  render() {
    let output =[]
    let counter = 0
    for (let i = this.state.reviewPageNumber; i < this.state.reviewPageNumber + 7; i++) {
      if (!this.props.data[i]) {break}
      output.push(<Review key={this.props.data[i].id} listingData={this.props.data[0]} reviewData={this.props.data[i]}/>)
    }
    return(
    <div>
      {output}
      <button onClick={this.incrementPageNumber}>next 7</button>
    </div>
    )
  }
}
  export default ReviewList