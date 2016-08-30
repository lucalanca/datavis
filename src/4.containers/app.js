import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { children, currentRoute } = this.props
    return (
      <div>
        <h1>Datavis — {currentRoute}</h1>
        {children}
      </div>
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
