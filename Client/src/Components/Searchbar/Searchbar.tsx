import * as React from 'react'
import './Searchbar.css'
import { FaSearch } from 'react-icons/fa';

class Searchbar extends React.Component {
 render () {
   return (
    <div className={'search-bar'}>
      <form>
        <input className={'search-input'} type='text' placeholder='Search for a file to download...' name='search' />
        <button type='submit' className={'search-button'}><FaSearch/></button>
      </form>
    </div>
   )
 }
}

export default Searchbar
