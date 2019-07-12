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
    let scrollUp = () => {window.scroll({top: 0, left: 0, behavior: 'smooth'
  })}
    // this.componentDidMount = this.componentDidMount.bind(this);
    // this.myRef = React.createRef()
  }

  incrementPageNumber(mult = 1) {
      this.setState((state) => {
        return {reviewPageNumber: state.reviewPageNumber + (mult * 7)}
      }, scrollUp);
  }


  decrementPageNumber(mult = 1) {
    this.setState((state) => {
      return {reviewPageNumber: state.reviewPageNumber - (mult * 7)}
    });
  }

  resetPageNumber () {
    this.setState(
      {reviewPageNumber:1})
  }

  finalPageNumber () {
    let target = this.props.data.length -1;
    target -= target % 7;
    target ++;
    this.setState({reviewPageNumber:target});
  }
  // componentDidMount() {
  //   window.scroll({top: 0, left: 0, behavior: 'smooth'
  // })};

  render() {
    let output =[]
    let counter = 0

    let page = (this.state.reviewPageNumber -1) / 7
    let last = Math.ceil((this.props.data.length -1)/7)
    for (let i = this.state.reviewPageNumber; i < this.state.reviewPageNumber + 7; i++) {
      if (!this.props.data[i]) {break}
      output.push(<Review key={this.props.data[i].id} listingData={this.props.data[0]} reviewData={this.props.data[i]}/>)
    }
    if (this.state.reviewPageNumber === 1) {
      return(
        <div>
          {output}

          <a className="centerbutton">  {page+1}  </a>

          <a className="navbutton" onClick={() => {this.incrementPageNumber();}}>{page+2}</a>

          <a className="navbutton" onClick={() => {this.incrementPageNumber(2);}}>{page+3}</a>

          <span className="navbuffer">...</span>

          <a className="navbutton" onClick={() => {this.finalPageNumber();}}>{last}</a>

          <a className="sidewaysbutton" onClick={() =>{this.incrementPageNumber();}}>{'>'}</a>

        </div>
        )
    }
    else if (this.state.reviewPageNumber === 8) {
      return (
        <div>
        {output}

        <a className="sidewaysbutton" onClick={() => {this.decrementPageNumber()}}>{'<'}</a>

        <a className="navbutton" onClick={() => {this.decrementPageNumber()}}>{page}</a>

        <a className="centerbutton">  {page+1}  </a>

        <a className="navbutton" onClick={() => {this.incrementPageNumber()}}>{page+2}</a>

        <span className="navbuffer">...</span>

        <a className="navbutton" onClick={this.finalPageNumber}>{last}</a>

        <a className="sidewaysbutton" onClick={() =>{this.incrementPageNumber()}}>{'>'}</a>

      </div>
      )
    }
     else if (this.state.reviewPageNumber === 15) {
      return (
        <div>
        {output}

        <a className="sidewaysbutton" onClick={() => {this.decrementPageNumber()}}>{'<'}</a>

        <a className="navbutton" onClick={() => {this.decrementPageNumber(2)}}>{page-1}</a>

        <a className="navbutton" onClick={() => {this.decrementPageNumber()}}>{page}</a>

        <a className="centerbutton">  {page+1}  </a>

        <a className="navbutton" onClick={() => {this.incrementPageNumber()}}>{page+2}</a>

        <span className="navbuffer">...</span>

        <a className="navbutton" onClick={this.finalPageNumber}>{last}</a>

        <a className="sidewaysbutton" onClick={() =>{this.incrementPageNumber()}}>{'>'}</a>

      </div>
      )
    }
     else if (this.state.reviewPageNumber === 22) {
      return (
        <div>
        {output}

        <a className="sidewaysbutton" onClick={() => {this.decrementPageNumber()}}>{'<'}</a>

        <a className="navbutton" onClick={() => {this.decrementPageNumber(3)}}>{page-2}</a>

        <a className="navbutton" onClick={() => {this.decrementPageNumber(2)}}>{page-1}</a>

        <a className="navbutton" onClick={() => {this.decrementPageNumber()}}>{page}</a>

        <a className="centerbutton">  {page+1}  </a>

        <a className="navbutton" onClick={() => {this.incrementPageNumber()}}>{page+2}</a>

        <span className="navbuffer">...</span>

        <a className="navbutton" onClick={this.finalPageNumber}>{last}</a>

        <a className="sidewaysbutton" onClick={() =>{this.incrementPageNumber()}}>{'>'}</a>

      </div>
      )
    }
    else if (!this.props.data[this.state.reviewPageNumber + 7]) {
      return(
        <div>
          {output}

          <a className="sidewaysbutton" onClick={() => {this.decrementPageNumber()}}>{'<'}</a>

          <a className="navbutton" onClick={this.resetPageNumber}>1</a>

          <span className="navbuffer">...</span>

          <a className="navbutton" onClick={() => {this.decrementPageNumber(2)}}>{page-1}</a>

          <a className="navbutton" onClick={() => {this.decrementPageNumber()}}>{page}</a>

          <a className="centerbutton">  {page+1}  </a>

        </div>
        )
      }
    else if (!this.props.data[this.state.reviewPageNumber + 14]) {
      return(
        <div>
          {output}

          <a className="sidewaysbutton" onClick={() => {this.decrementPageNumber()}}>{'<'}</a>

          <a className="navbutton" onClick={this.resetPageNumber}>1</a>

          <span className="navbuffer">...</span>

          <a className="navbutton" onClick={() => {this.decrementPageNumber()}}>{page}</a>

          <a className="centerbutton">  {page+1}  </a>

          <a className="navbutton" onClick={() => {this.incrementPageNumber()}}>{page+2}</a>

          <a className="sidewaysbutton" onClick={() =>{this.incrementPageNumber()}}>{'>'}</a>

        </div>
        )
    }
    else if (!this.props.data[this.state.reviewPageNumber + 21]) {
      return(
        <div>
          {output}

          <a className="sidewaysbutton" onClick={() => {this.decrementPageNumber()}}>{'<'}</a>

          <a className="navbutton" onClick={this.resetPageNumber}>1</a>

          <span className="navbuffer">...</span>

          <a className="navbutton" onClick={() => {this.decrementPageNumber()}}>{page}</a>

          <a className="centerbutton">  {page+1}  </a>

          <a className="navbutton" onClick={() => {this.incrementPageNumber()}}>{page+2}</a>

          <a className="navbutton" onClick={() => {this.incrementPageNumber(2)}}>{page+3}</a>

          <a className="sidewaysbutton" onClick={() =>{this.incrementPageNumber()}}>{'>'}</a>

        </div>
        )
    }
    else if (!this.props.data[this.state.reviewPageNumber + 28]) {
      return(
        <div>
          {output}

          <a className="sidewaysbutton" onClick={() => {this.decrementPageNumber()}}>{'<'}</a>

          <a className="navbutton" onClick={this.resetPageNumber}>1</a>

          <span className="navbuffer">...</span>

          <a className="navbutton" onClick={() => {this.decrementPageNumber()}}>{page}</a>

          <a className="centerbutton">  {page+1}  </a>

          <a className="navbutton" onClick={() => {this.incrementPageNumber()}}>{page+2}</a>

          <a className="navbutton" onClick={() => {this.incrementPageNumber(2)}}>{page+3}</a>

          <a className="navbutton" onClick={() => {this.incrementPageNumber(3)}}>{page+4}</a>

          <a className="sidewaysbutton" onClick={() =>{this.incrementPageNumber()}}>{'>'}</a>

        </div>
        )
    }

    else {
      return(
        <div>
        {output}

        <a className="sidewaysbutton" onClick={() => {this.decrementPageNumber()}}>{'<'}</a>

        <a className="navbutton" onClick={this.resetPageNumber}>1</a>

        <span className="navbuffer">...</span>

        <a className="navbutton" onClick={() => {this.decrementPageNumber()}}>{page}</a>

        <a className="centerbutton">  {page+1}  </a>

        <a className="navbutton" onClick={() => {this.incrementPageNumber()}}>{page+2}</a>

        <span className="navbuffer">...</span>

        <a className="navbutton" onClick={this.finalPageNumber}>{last}</a>

        <a className="sidewaysbutton" onClick={() => {this.incrementPageNumber()}}>{'>'}</a>

      </div>
      )
    }
  }
}
  export default ReviewList