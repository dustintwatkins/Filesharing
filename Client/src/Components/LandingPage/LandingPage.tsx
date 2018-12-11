import * as React from 'react'
import './LandingPage.css'
class LandingPage extends React.Component {

  directToUpload () {
    location.hash = '#upload'
  }

  directToSearch () {
    location.hash = '#search'
  }

  render() {

    return (
      <div className={'home'}>
        <div className={'title'}>
          <h1>Filesharing</h1>
          <img src={'https://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=https%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2012%2F10%2Fnexusae0_skypath.png&w=150&h=150&zc=3'}/>
        </div>
        <div className={'slogan'}>
          <h3>Quickly get a file from here to there. No sign up required.</h3>
        </div>
        <div className={'buttons'}>
          <div className={'btn'}>
            <button id={'upload'} onClick={this.directToUpload.bind(this)}>Upload</button>
          </div>
          <div className={'btn'}>
            <button id={'download'} onClick={this.directToSearch.bind(this)}>Download</button>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage
