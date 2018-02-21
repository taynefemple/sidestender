import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { fetchUsers } from '../redux/users';
import { fetchScripts } from '../redux/scripts';

/* -----------------    COMPONENT     ------------------ */

export default class Root extends Component {
  // componentDidMount() {
  //   this.props.fetchInitialData();
  // }
  render() {
    return (
      <Router>
        <div id="main" className="container-fluid">
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
//     // what other data might we want to fetch on app load?
//   }
// });

// export default connect(mapState, mapDispatch)(Root);
