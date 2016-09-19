import React from 'react'
import { Link } from 'react-router'
import { IndexLink } from 'react-router'
import NavLink from './NavLink.js'
import Home from './Home'

export default React.createClass({


  render() {
    return (
      <div>
        {this.props.children || <Home/>}
        <h1>React Router Tutorial</h1>
        <ul role="nav">
        <NavLink/>
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/repos" activeClassName="active">Repos</NavLink></li>
        </ul>
          {this.props.children}
      </div>
    )
  }

})
