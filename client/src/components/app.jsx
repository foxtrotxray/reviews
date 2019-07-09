import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMode: false,
      currentReviewsPage: 1,
    }
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    )
  }
}
export default App;