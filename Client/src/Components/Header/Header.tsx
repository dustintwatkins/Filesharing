import * as React from 'react'
import './Header.css'
import Searchbar from '../Searchbar/Searchbar'

class Header extends React.Component {

  createRandomId () {
    let text = ''
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < 50; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length))

    return text
  }

  render () {
    return (
      <div className='header'>
        <a href='#default' className='logo'>Filesharing</a>
        <div className='header-right'>
          <Searchbar/>
        </div>
      </div>
    )
  }
}

export default Header
