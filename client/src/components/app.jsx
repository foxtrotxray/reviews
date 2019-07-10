import React from 'react';
import StarDisplay from  './starDisplay.jsx'
import Overbar from  './Overbar.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      searchMode: false,
      currentReviewsPage: 1,
    }
  }
  render() {
      return (<div>
        <div>
          <Overbar reviewCount={this.props.data.length - 1} reviewScore={this.props.data[0].review_score} />
        </div>

        <div>
        <span>Accuracy<StarDisplay starCount={this.props.data[0].accuracy_score}/></span>
        <span>Location<StarDisplay starCount={this.props.data[0].location_score}/></span>
        <div></div>
        <span>Communication<StarDisplay starCount={this.props.data[0].communication_score}/></span>
        <span>Check-in<StarDisplay starCount={this.props.data[0].check_in_score}/></span>
        <div></div>
        <span>Cleanliness<StarDisplay starCount={this.props.data[0].cleanliness_score}/></span>
        <span>Value<StarDisplay starCount={this.props.data[0].value_score}/></span>
        </div>
      </div>)
  }
};
export default App;