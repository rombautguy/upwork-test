import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import classnames from 'classnames';
import { setCurrentTab, getCourseById } from '../../../actions'

class Detail extends Component {
  componentDidMount() {
    const courseId = this.props.match.params.id
    this.props.getCourseById(courseId)
  }
  toggle(tab) {
    if (this.props.tabIndex !== tab) {
      this.setState({
        activeTab: tab
      }, () => this.props.setCurrentTab(tab));
    }
  }

  render() {
    const { tabIndex, course } = this.props
    return (
      <div>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem><a href="#" onClick={() => this.props.history.goBack()}>Courses</a></BreadcrumbItem>
          <BreadcrumbItem active>Course Detail</BreadcrumbItem>
        </Breadcrumb>

        <div>#{course.id} course</div>
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
                <h4>{course.name} - {course.price}</h4>
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
    tabIndex: state.testReducer.tabIndex,
    course: state.testReducer.course
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentTab: tabIndex => dispatch(setCurrentTab(tabIndex)),
    getCourseById: id => dispatch(getCourseById(id))
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
