import * as React from 'react'
import Model from '../../Model'
import './SearchResults.css'
import ClientCommunicator from '../../ClientCommunicator/ClientCommunicator'
import RequestObjectFactory from '../../ClientCommunicator/RequestObjectFactory'
import Searchbar from '../Searchbar/Searchbar'
import {FaFileDownload} from 'react-icons/fa'
import * as fuzzy from 'fuzzy'

const search_by_keys = ['username', 'file_name']

class SearchResults extends React.Component {

    constructor(props) {
        super(props)
    }

    u_filter_text = (text) => {
        this.setState({filter_text: text})
    }

    state = {
        files: [],
        filter_text: "",
    }

  uploadFiles () {
    event.preventDefault()
    location.hash = ''
  }

    async downloadFile (e, fileInfo: object) {
    e.preventDefault()
    let params: object = {
      user_id: fileInfo['user_id'],
      id: fileInfo['id'],
      file_name: fileInfo['file_name']
    }
    ClientCommunicator.post(RequestObjectFactory.buildRequestObject(params, '/downloadFile'))
            .then( (file) => {
                let a = window.document.createElement('a')
                let fa = []
                for(var x in file)
                {
                    fa.push(file[x])
                }
                const uf = Uint8Array.from(fa)
                console.dir(uf.buffer)
          //          const ua = Uint8Array.from(file)
          a.href = window.URL.createObjectURL(new Blob([uf.buffer], { type: 'application/octet-stream' }))
          a.download = fileInfo['file_name']
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
        }
      )
  }

  render()  {
    document.getElementById('uploadHeader').style.color = '#2b7a78'
    document.getElementById('uploadHeader').style.backgroundColor = 'white'
    document.getElementById('downloadHeader').style.backgroundColor = '#2b7a78'
    document.getElementById('downloadHeader').style.color = 'white'

      Model.get_instance().fetchAllFiles().then(results => {
          if(results.length != this.state.files.length)
              this.setState({files: results})
      })
        Model.get_instance().fetchAllFiles()

        const f_results = fuzzy.filter(
            this.state.filter_text,
            this.state.files,
            {extract: (x) => {
                return x.file_name
            }})
        const best_matches = f_results.map((x) => {return x.original})

    return (
      <div>
        <div className={'top-grid'}>
          <h3>Available Files</h3>
          <Searchbar filterText={this.u_filter_text}/>
        </div>
        <div className="grid-container">
        </div>
        <ul>
          {best_matches.map((x) => {
            return (
              <li className={'li-grid-container'}onClick={(e) => {
                e.preventDefault()
                this.downloadFile(e, x)}}>
                <div className={'grid-item'}>
                  {x['file_name']}
                </div>
                <div className={'grid-item-download'} >
                  <div className={'download-icon'}>
                    <FaFileDownload size={30} color={'white'}/>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default SearchResults
