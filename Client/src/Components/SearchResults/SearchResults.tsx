import * as React from 'react'
import Header from '../Header/Header'
import Model from '../../Model'
import './SearchResults.css'
import ClientCommunicator from '../../ClientCommunicator/ClientCommunicator'
import RequestObjectFactory from '../../ClientCommunicator/RequestObjectFactory'

class SearchResults extends React.Component {

  uploadFiles () {
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
          console.dir(file)
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
    const results = Model.get_instance().getResults()
    return (
      <div>
        <Header/>
        <div className={'top-grid'}>
          <h3>Search results</h3>
          <div className={'btn-grid'}>
            <button onClick={this.uploadFiles.bind(this)}>Upload more files</button>
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-item">File Name</div>
          <div className="grid-item">Username</div>
          <div className="grid-item">Icon</div>
          <div className="grid-item-download">Download</div>
        </div>
        <ul>
          {results.map((x) => {
            console.dir(x['user_id'])
            return (
              <li className={'li-grid-container'}>
                <div className={'grid-item'}>
                  {x['file_name']}
                </div>
                <div className={'grid-item'}>
                  {x['username']}
                </div>
                <div className={'grid-item'}>
                  {/*<canvas className={'jdenticon'} data-jdenticon-value={x['user_id']}/>*/}
                </div>
                <div className={'grid-item-download'}>
                  <button className={'download-btn'} onClick={(e) => {this.downloadFile(e, x)}}>Download</button>
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