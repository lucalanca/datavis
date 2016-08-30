import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';

class Home extends Component {
  render() {
    const {spreadsheets} = this.props;
    return (
      <ul>
        {
          spreadsheets.map(s =>
            <li key={`s-${s.name}`}>
              <Link to={`/spreadsheets/${s.slug}`}>{s.name}</Link>
            </li>
          )
        }
      </ul>
    )
  }
}

Home.propTypes = {
  // Injected by React Redux
  spreadsheets: PropTypes.array.isRequired,
}

export default connect(({spreadsheets}) => ({ spreadsheets }))(Home)
