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
        <div>
          <div className={styles.flexRow}>
            <img className={styles.icon} src={this.props.reviewData.icon_url}></img>

            <span className={styles.flexColumn} >
              {this.props.reviewData.author.split(' ')[0]}

              <Moment className={styles.flexColumn} format="MMMM, YYYY" date={this.props.reviewData.review_date} />
            </span>
          </div>
          <div className={styles.flexColumn} > {this.props.reviewData.review_content}</div>

        </div>
      )
    } else {
      return(
        <div>

        <div className={styles.flexColumn}>
          <div className={styles.flexRow}>
            <img className={styles.icon} src={this.props.reviewData.icon_url}></img>

            <span className={styles.flexColumn} >
              {this.props.reviewData.author.split(' ')[0]}
            <Moment className={styles.flexColumn} format="MMMM, YYYY" date=  {this.props.reviewData.review_date} />
            </span>
        </div>
        <div className={styles.flexColumn} > {this.props.reviewData.review_content}</div>


        <div>

          <img className={styles.icon} src={this.props.listingData.owner_icon_url}></img>
          <span className={styles.flexColumn}>THIS ONE IS A RESPONSE, I'M BEING LOUD  {this.props.listingData.owner_name.split(' ')[0]} </span>
          <Moment className={styles.flexColumn} format="MMMM, YYYY" date={this.props.reviewData.reply_date} />
        <div className={styles.flexColumn} >{this.props.reviewData.reply_content}</div>
        </div>

      </div>

        </div>



      )
    }
  }
}
export default Review