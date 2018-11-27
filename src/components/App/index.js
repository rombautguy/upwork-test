import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import styled from 'styled-components';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

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
    expanded: false
  };

  onSelect = (selected, location, history) => {
    this.setState({ selected: selected });
    const to = '/' + selected;
    if (location.pathname !== to) {
      history.push(to);
    }
  };
  onToggle = (expanded) => {
    this.setState({ expanded: expanded });
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
    console.log(this.props.history)
    const { expanded, selected } = this.state;
    return (
      <Fragment>
        {/* <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <TopNav className="ml-auto" navbar>
              <TopNavItem>
                <NavLink href="/components/">Components</NavLink>
              </TopNavItem>
              <TopNavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </TopNavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </TopNav>
          </Collapse>
        </Navbar> */}
        <Route render={({ location, history }) => (
          <React.Fragment>
            <SideNav
              onSelect={(selected) => this.onSelect(selected, location, history)}
              onToggle={this.onToggle}
            >
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected="courses">
                <NavItem eventKey="courses">
                  <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                    Courses
                  </NavText>
                </NavItem>
                <NavItem eventKey="reports">
                  <NavIcon>
                    <i className="fa fa-fw fa-list-alt" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                  </NavIcon>
                  <NavText style={{ paddingRight: 32 }} title="Reports">
                    Reports
                    </NavText>
                </NavItem>
                <NavItem eventKey="settings">
                  <NavIcon>
                    <i className="fa fa-fw fa-cogs" style={{ fontSize: '1.5em', verticalAlign: 'middle' }} />
                  </NavIcon>
                  <NavText style={{ paddingRight: 32 }} title="Settings">
                    Settings
                    </NavText>
                  <NavItem eventKey="settings/policies">
                    <NavText title="Policies">
                      Policies
                        </NavText>
                  </NavItem>
                  <NavItem eventKey="settings/network">
                    <NavText title="Network">
                      Network
                        </NavText>
                  </NavItem>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
            {/* <Main expanded={expanded}>
                    {this.renderBreadcrumbs()}
                </Main> */}
            {/* <Switch> */}
            <Main expanded={expanded}>
              <Route exact path="/courses" component={Courses} history={this.props.history} />
              <Route path="/" exact component={Courses} history={this.props.history} />
              <Route path="/settings/setting1" component={props => <div>setting1</div>} />
              <Route path="/settings/setting2" component={props => <div>setting2</div>} />
              <Route path="/courses/:id" component={props => <Detail {...props} />} />
            </Main>
            {/* </Switch> */}
          </React.Fragment>
        )}
        />
      </Fragment>
    )
  }
}

export default App
