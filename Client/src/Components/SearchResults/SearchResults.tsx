import * as React from 'react'
import Header from '../Header/Header'
import Model from '../../Model'
import './SearchResults.css'

class SearchResults extends React.Component {

  uploadFiles () {
    location.hash = ''
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
          <div className="grid-item"></div>
          <div className="grid-item-download">Download</div>
        </div>
        <ul>
          {results.map((x) => {
            return (
              <li className={'li-grid-container'}>
                <div className={'grid-item'}>
                  {x['file_name']}
                </div>
                <div className={'grid-item'}>
                  {x['username']}
                </div>
                <div className={'grid-item'}>
                </div>
                <div className={'grid-item-download'}>
                  <button className={'download-btn'}>Download</button>
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