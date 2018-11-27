import * as React from 'react'
import './Searchbar.css'
import { FaSearch } from 'react-icons/fa'
import swal from 'sweetalert'
import ClientCommunicator from '../../ClientCommunicator/ClientCommunicator'
import RequestObjectFactory from '../../ClientCommunicator/RequestObjectFactory'

class Searchbar extends React.Component {

  async search () {
    if ((document.getElementById('search-text') as HTMLInputElement).value === null ||
        (document.getElementById('search-text') as HTMLInputElement).value === undefined) {
      swal(`Please enter a file name to search for.`)
    } else {
      let params: object = {
        query: (document.getElementById('search-text') as HTMLInputElement).value,
      }
      ClientCommunicator.post(RequestObjectFactory.buildRequestObject(params, '/searchFile'))
    }
  }

  render () {
   return (
    <div className={'search-bar'}>
      <form>
        <input className={'search-input'} type='text' id={'search-text'} placeholder='Search for a file to download...' name='search' />
        <button type='submit' className={'search-button'}  onClick={this.search.bind(this)}><FaSearch/></button>
      </form>
    </div>
   )
 }
}

export default Searchbar
