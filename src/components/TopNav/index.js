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
    isOpen: false,
    collepseNav: false
  };
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ collepseNav: window.innerWidth > 800 });
  }

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
    const { collepseNav } = this.state
    return (
      <Fragment>
        <Navbar color="light" light expand="md" style={{marginLeft: sideNavExpanded && collepseNav ? 240 : 64}}>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
            {collepseNav &&
              <NavItem>
                {(sideNavExpanded && collepseNav) && <Button color="primary" size="sm" onClick={this.toggleSide}><i className='fa fa-chevron-left' style={{ fontSize: '1.75em' }} /></Button>}
                {!(sideNavExpanded && collepseNav) && <Button color="primary" size="sm" onClick={this.toggleSide}><i className='fa fa-chevron-right' style={{ fontSize: '1.75em' }} /></Button>}
              </NavItem>
            }
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
