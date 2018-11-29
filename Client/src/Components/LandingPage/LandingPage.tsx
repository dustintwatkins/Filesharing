import * as React from 'react'
import './LandingPage.css'
class LandingPage extends React.Component {
  render() {
    return (
      <div className={'home'}>
        <div className={'title'}>
          <h1>Filesharing</h1>
        </div>
        <div className={'slogan'}>
          <h3>Quickly get a file here to there. No sign up required.</h3>
        </div>
        <div className={'buttons'}>
          <div className={'btn'}>
            <button id={'upload'}>Upload</button>
          </div>
          <div className={'btn'}>
            <button id={'download'}>Download</button>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage
