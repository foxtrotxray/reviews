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

  incrementPageNumber(mult = 1) {
      this.setState((state) => {
        return {reviewPageNumber: state.reviewPageNumber + (mult * 7)}
      });

    // else {
    //   this.setState((state) => {
    //     return {reviewPageNumber: state.reviewPageNumber + 7}
    //   });
    // }
  }


  decrementPageNumber(mult = 1) {
    this.setState((state) => {
      return {reviewPageNumber: state.reviewPageNumber - (mult * 7)}
    });
  }

  resetPageNumber () {
    this.setState({reviewPageNumber:1})
  }

  finalPageNumber () {
    let target = this.props.data.length -1;
    target -= target % 7;
    target ++;
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

          <button>  {(((this.state.reviewPageNumber -1)/7)+1)}  </button>

          <button onClick={() => {this.incrementPageNumber()}}>{(((this.state.reviewPageNumber -1)/7)+2)}</button>

          <button onClick={() => {this.incrementPageNumber(2)}}>{(((this.state.reviewPageNumber -1)/7)+3)}</button>

          <span> ... </span>

          <button onClick={this.finalPageNumber}>{Math.ceil((this.props.data.length -1)/7)}</button>

          <button onClick={() =>{this.incrementPageNumber()}}>{'>>>>'}</button>

        </div>
        )
    }
    else if (this.state.reviewPageNumber === 8) {
      return (
        <div>
        {output}

        <button onClick={() => {this.decrementPageNumber()}}>{(((this.state.reviewPageNumber -1)/7))}</button>

        <button>  {(((this.state.reviewPageNumber -1)/7)+1)}  </button>

        <button onClick={() => {this.incrementPageNumber()}}>{(((this.state.reviewPageNumber -1)/7)+2)}</button>

        <span> ... </span>

        <button onClick={this.finalPageNumber}>{Math.ceil((this.props.data.length -1)/7)}</button>

        <button onClick={() =>{this.incrementPageNumber()}}>{'>>>>'}</button>

      </div>
      )
    }
     else if (this.state.reviewPageNumber === 15) {
      return (
        <div>
        {output}


        <button onClick={() => {this.decrementPageNumber(2)}}>{(((this.state.reviewPageNumber -1)/7)-1)}</button>

        <button onClick={() => {this.decrementPageNumber()}}>{(((this.state.reviewPageNumber -1)/7))}</button>

        <button>  {(((this.state.reviewPageNumber -1)/7)+1)}  </button>

        <button onClick={() => {this.incrementPageNumber()}}>{(((this.state.reviewPageNumber -1)/7)+2)}</button>

        <span> ... </span>

        <button onClick={this.finalPageNumber}>{Math.ceil((this.props.data.length -1)/7)}</button>

        <button onClick={() =>{this.incrementPageNumber()}}>{'>>>>'}</button>

      </div>
      )
    }
     else if (this.state.reviewPageNumber === 22) {
      return (
        <div>
        {output}


        <button onClick={() => {this.decrementPageNumber(3)}}>{(((this.state.reviewPageNumber -1)/7)-1)-1}</button>

        <button onClick={() => {this.decrementPageNumber(2)}}>{(((this.state.reviewPageNumber -1)/7)-1)}</button>

        <button onClick={() => {this.decrementPageNumber()}}>{(((this.state.reviewPageNumber -1)/7))}</button>

        <button>  {(((this.state.reviewPageNumber -1)/7)+1)}  </button>

        <button onClick={() => {this.incrementPageNumber()}}>{(((this.state.reviewPageNumber -1)/7)+2)}</button>

        <span> ... </span>

        <button onClick={this.finalPageNumber}>{Math.ceil((this.props.data.length -1)/7)}</button>

        <button onClick={() =>{this.incrementPageNumber()}}>{'>>>>'}</button>

      </div>
      )
    }
    else if (!this.props.data[this.state.reviewPageNumber + 7]) {
      return(
        <div>
          {output}
          <button onClick={() => {this.decrementPageNumber()}}>{'<<<<'}</button>

          <button onClick={this.resetPageNumber}>1</button>

          <button onClick={() => {this.decrementPageNumber()}}>{((this.state.reviewPageNumber -1)/7)}</button>

          <button>  {(((this.state.reviewPageNumber -1)/7)+1)}  </button>

        </div>
        )
    } else {
      return(
        <div>
        {output}

        <button onClick={() => {this.decrementPageNumber()}}>{'<<<<'}</button>

        <button onClick={this.resetPageNumber}>1</button>

        <span> ... </span>

        <button onClick={() => {this.decrementPageNumber()}}>{((this.state.reviewPageNumber -1)/7)}</button>

        <button>  {(((this.state.reviewPageNumber -1)/7)+1)}  </button>

        <button onClick={() => {this.incrementPageNumber()}}>{(((this.state.reviewPageNumber -1)/7)+2)}</button>

        <span> ... </span>

        <button onClick={this.finalPageNumber}>{Math.ceil((this.props.data.length -1)/7)}</button>

        <button onClick={() => {this.incrementPageNumber()}}>{'>>>>'}</button>

      </div>
      )
    }
  }
}
  export default ReviewList