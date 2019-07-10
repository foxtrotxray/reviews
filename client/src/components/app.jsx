import React from 'react';
import StarDisplay from  './starDisplay.jsx'
import Overbar from  './Overbar.jsx'
import ScoreOverview from './ScoreOverview.jsx'


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
          <ScoreOverview listingData={this.props.data[0]}/>
        </div>
      </div>)
  }
};
export default App;