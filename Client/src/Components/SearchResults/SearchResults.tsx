import * as React from 'react'
import Model from '../../Model'
import './SearchResults.css'
import ClientCommunicator from '../../ClientCommunicator/ClientCommunicator'
import RequestObjectFactory from '../../ClientCommunicator/RequestObjectFactory'
import Searchbar from '../Searchbar/Searchbar'
import {FaFileDownload} from 'react-icons/fa'

class SearchResults extends React.Component {

  state = {
    files: []
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
          a.href = window.URL.createObjectURL(new Blob([file], { type: 'application/octet-stream' }))
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
    let files: any[] = Model.get_instance().getFiles()
    console.log('rendering')
    return (
      <div>
        <div className={'top-grid'}>
          <h3>Available Files</h3>
          <Searchbar/>
        </div>
        <div className="grid-container">
        </div>
        <ul>
          {files.map((x) => {
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