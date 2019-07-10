import React from 'react';
import Review from './Review.jsx'

class ReviewList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {reviewPageNumber:1}
    this.incrementPageNumber = this.incrementPageNumber.bind(this);
    this.decrementPageNumber = this.decrementPageNumber.bind(this);
    this.resetPageNumber = this.resetPageNumber.bind(this);
    this.finalPageNumber = this.finalPageNumber.bind(this);
  }
  incrementPageNumber() {
    this.setState((state) => {
      return {reviewPageNumber: state.reviewPageNumber + 7}
    });
  }
  decrementPageNumber() {
    this.setState((state) => {
      return {reviewPageNumber: state.reviewPageNumber - 7}
    });
  }
  resetPageNumber () {
    this.setState({reviewPageNumber:1})
  }

  finalPageNumber () {
    let target = this.props.data.length -1;
    console.log(target)
    target -= target % 7;
    target ++;
    console.log(target)
    this.setState({reviewPageNumber:target});
  }

  render() {
    let output =[]
    let counter = 0
    for (let i = this.state.reviewPageNumber; i < this.state.reviewPageNumber + 7; i++) {
      if (!this.props.data[i]) {break}
      output.push(<Review key={this.props.data[i].id} listingData={this.props.data[0]} reviewData={this.props.data[i]}/>)
    }
    if (this.state.reviewPageNumber === 1) {
      return(
        <div>
          {output}

          <span>  {(((this.state.reviewPageNumber -1)/7)+1)}  </span>

          <button onClick={this.incrementPageNumber}>go to {(((this.state.reviewPageNumber -1)/7)+2)}</button>

          <button onClick={this.finalPageNumber}>{Math.ceil((this.props.data.length -1)/7)}</button>

          <button onClick={this.incrementPageNumber}>{'>>>>'}</button>

        </div>
        )
    } else if (!this.props.data[this.state.reviewPageNumber + 7]) {
      return(
        <div>
          {output}
          <button onClick={this.decrementPageNumber}>{'<<<<'}</button>

          <button onClick={this.resetPageNumber}>1</button>

          <button onClick={this.decrementPageNumber}>go to {((this.state.reviewPageNumber -1)/7)}</button>

          <span>  {(((this.state.reviewPageNumber -1)/7)+1)}  </span>

        </div>
        )
    } else {
      return(
      <div>
        {output}

        <button onClick={this.decrementPageNumber}>{'<<<<'}</button>

        <button onClick={this.resetPageNumber}>1</button>

        <button onClick={this.decrementPageNumber}>go to {((this.state.reviewPageNumber -1)/7)}</button>

        <span>  {(((this.state.reviewPageNumber -1)/7)+1)}  </span>

        <button onClick={this.incrementPageNumber}>go to {(((this.state.reviewPageNumber -1)/7)+2)}</button>

        <button onClick={this.finalPageNumber}>{Math.ceil((this.props.data.length -1)/7)}</button>

        <button onClick={this.incrementPageNumber}>{'>>>>'}</button>

      </div>
      )
    }
  }
}
  export default ReviewList