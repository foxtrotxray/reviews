import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import styles from '../styles/reviewStyle.css'


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
        <div className={styles.review}>
          <img className={styles.icon} src={this.props.reviewData.icon_url} width="48px" height="48px" ></img>
          <span>{this.props.reviewData.author} </span>
          <Moment format="MMMM, YYYY" date={this.props.reviewData.review_date} />
          <div>{this.props.reviewData.review_content}</div>
        </div>
      )
    } else {
      return(
        <div className={styles.review}>
          <img className={styles.icon} src={this.props.reviewData.icon_url} width="48px" height="48px" ></img>
          <span>{this.props.reviewData.author} </span>
          <Moment format="MMMM, YYYY" date={this.props.reviewData.review_date} />
          <div>{this.props.reviewData.review_content}</div>

          <img className={styles.icon} src={this.props.listingData.owner_icon_url} width="48px" height="48px" ></img>
          <span>{this.props.listingData.owner_name} </span>
          <Moment format="MMMM, YYYY" date={this.props.reviewData.reply_date} />
          <div>{this.props.reviewData.reply_content}</div>
        </div>
      )
    }
  }
}
export default Review