import React, { Fragment } from 'react'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { setSideNav } from '../../actions'

import TopNav from '../../components/TopNav'
import SideNavbar from '../../components/SideNavbar'

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <TopNav />
        <SideNavbar />
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    sideNavExpanded: state.testReducer.sideNavExpanded
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSideNav: () => dispatch(setSideNav())
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  withRouter,
  withConnect
)(App)
