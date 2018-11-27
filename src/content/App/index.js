import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { setSideNav } from '../../actions'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import styled from 'styled-components';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import TopNav from '../../components/TopNav'
import SideNavbar from '../../components/SideNavbar'

import Detail from '../Courses/Detail'
import Courses from '../Courses'

const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 20px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

class App extends React.Component {
  state = {
    selected: 'courses',
    // expanded: false
  };

  onSelect = (selected, location, history) => {
    this.setState({ selected: selected });
    const to = '/' + selected;
    if (location.pathname !== to) {
      history.push(to);
    }
  };
  onToggle = (expanded) => {
    this.props.setSideNav()
    // this.setState({ expanded: expanded });
  };

  pageTitle = {
    'courses': 'Courses',
    'devices': ['Devices'],
    'reports': ['Reports'],
    'settings/policies': ['Settings', 'Policies'],
    'settings/network': ['Settings', 'Network']
  };

  renderBreadcrumbs() {
    // const { selected } = this.state;
    // console.log(selected, this.pageTitle, 'render')
    // const list = ensureArray(this.pageTitle[selected]);
    // console.log(list)

    // return (
    //   <Breadcrumb tag="nav" listTag="div">
    //     <BreadcrumbItem><a href="#" onClick={() => this.props.history.goBack()}>Courses</a></BreadcrumbItem>
    //     <BreadcrumbItem active>Course Detail</BreadcrumbItem>
    //   </Breadcrumb>
    // );
  }

  navigate = (pathname) => () => {
    this.setState({ selected: pathname });
  };

  render() {
    const { sideNavExpanded, selected } = this.props;
    console.log('===', sideNavExpanded)
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
