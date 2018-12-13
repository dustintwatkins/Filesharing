import * as React from 'react'
import './Searchbar.css'
import { FaSearch } from 'react-icons/fa'
import swal from 'sweetalert'
import ClientCommunicator from '../../ClientCommunicator/ClientCommunicator'
import RequestObjectFactory from '../../ClientCommunicator/RequestObjectFactory'
import Model from '../../Model'
import SearchResults from '../SearchResults/SearchResults'

class Searchbar extends React.Component<{filterText: any}, any> {

    constructor(props){
        super(props)
    }

    async search () {
      event.preventDefault()
      if ((document.getElementById('searchText') as HTMLInputElement).value === null ||
          (document.getElementById('searchText') as HTMLInputElement).value === undefined) {
        swal(`Please enter a file name to search for.`)
      } else {
        let params: object = {
          query: (document.getElementById('searchText') as HTMLInputElement).value,
        }
        let results = await ClientCommunicator.post(RequestObjectFactory.buildRequestObject(params, '/searchFile'))
        console.dir(results)
        Model.get_instance().addResults(results)
      }
    }

    search_text_change = (event) => {
        console.dir(this.props)
        this.props.filterText((document.getElementById('searchText') as HTMLInputElement).value)
    }

    render () {
     return (
      <div className={'search-bar'}>
        <form className={'searchForm'}>
          <input className={'search-input'} type='text' id={'searchText'} autoFocus={true} placeholder='Search for a file to download...' name='search' onKeyUp={this.search_text_change}/>
          <button type='submit' className={'search-button'} onClick={this.search.bind(this)}><FaSearch/></button>
        </form>
      </div>
     )
    }
}

export default Searchbar
