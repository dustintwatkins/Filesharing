import * as React from 'react'
import './Header.css'

class Header extends React.Component {

  render () {
    return (
      <div className="header">
        <a href="#default" className="logo">Filesharing</a>
        <div className="header-right">
          <a className="active" href="#home">Home</a>
          <a href="#contact">My Files</a>
          <a href="#about">Account</a>
        </div>
      </div>
    )
  }
}

export default Header
