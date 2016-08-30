import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class App extends Component {
  render() {
    const { children, currentRoute } = this.props
    return (
      <main>
        <header>
          <h1>datavis - {currentRoute}</h1>
          <nav>
            <ul className="o-list--inline">
              <li className="o-list__item"><Link to="/">🏠</Link></li>
            </ul>
          </nav>
        </header>
        {children}
      </main>
    )
  }
}

App.propTypes = {
  // Injected by React Redux
  currentRoute: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state, ownProps) {
  return {
    currentRoute: ownProps.location.pathname
  }
}

export default connect(mapStateToProps, {

})(App)
