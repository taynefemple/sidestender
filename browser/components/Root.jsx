import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LandingPage from './LandingPage.jsx'
import Call from './CallView.jsx'

// import { fetchUsers } from '../redux/users';
// import { fetchScripts } from '../redux/scripts';

/* -----------------    COMPONENT     ------------------ */

export default class Root extends Component {
  // componentDidMount() {
  //   this.props.fetchInitialData();
  // }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route path="/call" component={Call} />
        </div>
      </Router>
    )
  }
}

    /* -----------------    CONTAINER     ------------------ */

    // const mapState = null;

// const mapDispatch = dispatch => ({
//   fetchInitialData: () => {
//     dispatch(fetchUsers());
//     dispatch(fetchScripts());
//   }
// });

// export default connect(mapState, mapDispatch)(Root);
