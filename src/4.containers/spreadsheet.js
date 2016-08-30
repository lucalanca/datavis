import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import SpreadsheetSummary from './spreadsheet-summary';

class Spreedsheet extends Component {
  render() {
    const { spreadsheet } = this.props
    return (
      <div>
        <SpreadsheetSummary spreadsheet={spreadsheet}/>
      </div>
    )
  }
}

Spreedsheet.propTypes = {
  // Injected by React Redux
  spreadsheet: PropTypes.object.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.params.slug
  const spreadsheet = state.spreadsheets.find(s => s.slug === slug)
  return {
    spreadsheet
  }
}

export default connect(mapStateToProps, {

})(Spreedsheet)
