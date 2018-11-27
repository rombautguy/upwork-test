import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import classnames from 'classnames';
/**
 * Redux Config
 */
import { setCurrentTab } from '../../../actions'

class Detail extends Component {
  // state = {
  //   activeTab: '1'
  // }

  toggle(tab) {
    if (this.props.tabIndex !== tab) {
      this.setState({
        activeTab: tab
      }, () => this.props.setCurrentTab(tab));
    }
  }

  render() {
    const { tabIndex } = this.props
    return (
      <div>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem><p onClick={() => this.props.history.goBack()}>Courses</p></BreadcrumbItem>
          <BreadcrumbItem active>Course Detail</BreadcrumbItem>
        </Breadcrumb>

        <div>#{this.props.match.params.id} course</div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: tabIndex === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: tabIndex === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={tabIndex}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>Tab 2 Contents</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tabIndex: state.testReducer.tabIndex
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentTab: tabIndex => dispatch(setCurrentTab(tabIndex))
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  withRouter,
  withConnect
)(Detail)
