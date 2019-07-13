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
          <div className={styles.flexRow}>
            <img className={styles.icon} src={this.props.reviewData.icon_url}></img>

            <span className={styles.flexColumn} >
              {this.props.reviewData.author.split(' ')[0]}

              <Moment className={styles.flexColumn} format="MMMM YYYY" date={this.props.reviewData.review_date} />
            </span>
          </div>
          <div className={styles.flexColumn} > {this.props.reviewData.review_content}</div>

        </div>
      )
    } else {
      return(
        <div className={styles.review}>

        <div className={styles.flexColumn}>
          <div className={styles.flexRow}>
            <img className={styles.icon} src={this.props.reviewData.icon_url}></img>

            <span className={styles.flexColumn} >
              {this.props.reviewData.author.split(' ')[0]}
            <Moment className={styles.flexColumn} format="MMMM, YYYY" date=  {this.props.reviewData.review_date} />
            </span>
        </div>
        <div className={styles.flexColumn} > {this.props.reviewData.review_content}</div>


        <div className={styles.reply} >

          <img className={styles.replyIcon} src={this.props.listingData.owner_icon_url}></img>

          <span className={styles.flexColumn}>
            <b className={styles.responseTitle}>
            Response from {this.props.listingData.owner_name.split(' ')[0]};
            </b>

        <div className={styles.flexColumn} >{this.props.reviewData.reply_content}</div>
            <Moment className={styles.date} format="MMMM, YYYY" date={this.props.reviewData.reply_date} />
          </span>

        </div>

      </div>

        </div>



      )
    }
  }
}
export default Review