import React, { Fragment } from 'react'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { setSideNav } from '../../actions'

import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

class TopNav extends React.Component {
  state = {
    isOpen: false
  };
  toggleSide = () => {
    this.props.setSideNav()
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { sideNavExpanded } = this.props;
    return (
      <Fragment>
        <Navbar color="light" light expand="md" style={{marginLeft: sideNavExpanded ? 240 : 64}}>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <Button color="primary" size="sm" onClick={this.toggleSide}>
                  <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
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
)(TopNav)
