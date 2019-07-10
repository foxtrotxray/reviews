import React from 'react';

class Review extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: false
    }
  }
  render() {
    if (this.props.reviewData.reply_content === null) {
      return(
        <div>
          <img src={this.props.reviewData.icon_url} width="48px" height="48px" ></img>
          <span>{this.props.reviewData.author}</span>
          <span>{this.props.reviewData.review_date}</span>
          <div>{this.props.reviewData.review_content}</div>
        </div>
      )
    } else {
      return(
        <div>
          <img src={this.props.reviewData.icon_url} width="48px" height="48px" ></img>
          <span>{this.props.reviewData.author}</span>
          <span>{this.props.reviewData.review_date}</span>
          <div>{this.props.reviewData.review_content}</div>

          <img src={this.props.listingData.owner_icon_url} width="48px" height="48px" ></img>
          <span>{this.props.listingData.owner_name}</span>
          <span>{this.props.reviewData.reply_date}</span>
          <div>{this.props.reviewData.reply_content}</div>
        </div>
      )

    }
  }
}
export default Review