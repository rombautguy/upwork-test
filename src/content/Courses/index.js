import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import ReactTable from "react-table";
import { getCourses } from '../../actions'
import 'react-table/react-table.css'
import './style.scss';

class Courses extends Component {
  componentDidMount() {
    this.props.getCourses()
  }
  onRowSelect = (id) => {
    this.props.history.push(`/courses/${id}`)
  }
  render() {
    const columns = [{
      Header: 'Id',
      accessor: 'id'
    }, {
      Header: 'Name',
      accessor: 'name',
      Cell: props => <span className='number'>{props.value}</span>
    }, {
      id: 'Price',
      Header: 'Price',
      accessor: 'price'
    }]
    return (
      <Fragment>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem active>Courses</BreadcrumbItem>
        </Breadcrumb>
        <ReactTable
          data={this.props.courses}
          columns={columns}
          defaultPageSize={10}
          getTrProps={(state, rowInfo) => {
            if (rowInfo && rowInfo.row) {
              return {
                onClick: (e) => this.onRowSelect(rowInfo.row.id)
              }
            } else {
              return {}
            }
          }}
        />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.testReducer.courses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCourses: () => dispatch(getCourses())
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  withRouter,
  withConnect
)(Courses)
