import * as React from 'react'
import RequestObjectFactory from '../../ClientCommunicator/RequestObjectFactory'
import ClientCommunicator from '../../ClientCommunicator/ClientCommunicator'
import './Uploader.css'
import {FaFileUpload} from 'react-icons/fa'
import swal from 'sweetalert'

class Uploader extends React.Component {

  state = {
    loaded: 0,
    addedFiles: []
  }

  createRandomId () {
    let text = ''
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < 50; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length))

    return text
  }

  handleSelectedFile = (event) => {
    event.preventDefault()
    let files = this.state.addedFiles
    for (let i: number = 0; i < event.target.files.length; i++) {
      files.push(event.target.files[i])
    }
    this.setState({
      addedFiles: files,
      loaded: 0,
    })
    console.dir(this.state.addedFiles)
  }

  handleUpload = (event) => {
    event.preventDefault()
    if (this.state.addedFiles.length > 0) {
      console.log('attempting to upload the following files')
      console.dir(this.state.addedFiles)
    } else {
      swal(`Opps! Looks like you haven't uploaded any files yet!`)
    }

    // let data = {
    //   file: 'path to file ! :)',
    //   fileName: this.state.selectedFile.name
    // }

    // ClientCommunicator.post(RequestObjectFactory.buildRequestObject(data, '/upload'))
  }

  removeDragData(e) {
    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to remove the drag data
      e.dataTransfer.items.clear();
    } else {
      // Use DataTransfer interface to remove the drag data
      e.dataTransfer.clearData();
    }
  }

  private handleDragOver(e) {
    e.preventDefault()
  }

  private handleDrop (e) {
    e.preventDefault()
    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i: number = 0; i < e.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (e.dataTransfer.items[i].kind === 'file') {
          let file: File = e.dataTransfer.items[i].getAsFile();
          // console.log('... file[' + i + '].name = ' + file.name);
          let files = this.state.addedFiles
          files.push((file))
          this.setState({addedFiles: files})
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        // console.log('... file[' + i + '].name = ' + e.dataTransfer.files[i].name);
        let files = this.state.addedFiles
        files.push(e.dataTransfer.files[i])
        this.setState({addedFiles: files})
      }
    }

    console.dir(this.state.addedFiles)
    // Pass event to removeDragData for cleanup
    this.removeDragData(e)
  }

  render() {
    return (
      <div className='App'>
        <div className={'icon'}>
          <canvas width='80' height='80' data-jdenticon-value={this.createRandomId()}/>
        </div>
        <br/>
        <div className={'drag-upload'} id={'drop-area'}
             onDragOver={(e) => {this.handleDragOver(e)}}
             onDrop={(e) => {this.handleDrop(e)}}
        >
          <form className={'upload-form'}>
            <h3>Drag and drop a file to upload</h3>
              <FaFileUpload size={84} color={'white'}/>
              <br/>
              <div className={'buttons-container'}>
                <input type='file' id='chooseFile' className={'select-file-btn'} onChange={this.handleSelectedFile}/>
                <br/>
                <button className={'upload-btn'} onClick={this.handleUpload}>Upload</button>
              </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Uploader
