import * as React from 'react'
import RequestObjectFactory from '../../ClientCommunicator/RequestObjectFactory'
import ClientCommunicator from '../../ClientCommunicator/ClientCommunicator'

class Uploader extends React.Component {

  state = { selectedFile: null, loaded: 0, }

  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

  handleUpload = () => {
    console.log('file', this.state.selectedFile)
    console.log('name', this.state.selectedFile.name)

    let data = {
      file: 'path to file ! :)',
      fileName: this.state.selectedFile.name
    }

    ClientCommunicator.post(RequestObjectFactory.buildRequestObject(data, '/upload'))
  }

  render() {
    return <div className="App">
      <input type="file" name="" id="chooseFile" onChange={this.handleselectedFile}/>
       <button onClick={this.handleUpload}>Upload</button>
    </div>
  }
}

export default Uploader
