import * as React from 'react'
import RequestObjectFactory from '../../ClientCommunicator/RequestObjectFactory'
import ClientCommunicator from '../../ClientCommunicator/ClientCommunicator'
import './Uploader.css'
import {FaFileUpload} from 'react-icons/fa'
import Swal from 'sweetalert2'
import generateUsername from  '../../UserInfo/generateUserName'
import Model from '../../Model'

class Uploader extends React.Component {

  state = {
    loaded: 0,
    addedFiles: [],
    userID: this.createRandomId(),
    username: this.generateUserName()
  }

  generateUserName () {
    return generateUsername()
  }

  createRandomId () {
    let id: string = ''
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i: number = 0; i < 50; i++)
      id += possible.charAt(Math.floor(Math.random() * possible.length))

    return id
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

    document.getElementById('uploadFile').innerHTML = `Upload - ${this.state.addedFiles[0].name}`
  }

  handleUpload = (event) => {
    event.preventDefault()
    if (this.state.addedFiles.length > 0) {
      let file_name: string = this.state.addedFiles[0].name
      let id: string = this.createRandomId()
      let userId: string = this.state.userID
      let userName: string = this.state.username
      let fr = new FileReader()
      fr.onload = function () {
        let array = new Uint8Array(fr.result)
        let params: object = {
          file_name: file_name,
          file: array,
          id: id,
          username: userName,
          user_id: userId
        }

        ClientCommunicator.post(RequestObjectFactory.buildRequestObject(params, '/upload'))
        Swal({
          title: 'Upload successful!',
          text: 'Search using the filename or username to download the file',
          type: 'success',
          backdrop: ''
        })
        Model.get_instance().fetchAllFiles()
      };
      fr.readAsArrayBuffer(this.state.addedFiles[0])
    } else {
      Swal(`Opps! Looks like you haven't uploaded any files yet!`)
    }
  }

  removeDragData(e) {
    if (e.dataTransfer.items) {
      e.dataTransfer.items.clear();
    } else {
      e.dataTransfer.clearData();
    }
  }

  private handleDragOver(e) {
    e.preventDefault()
    document.getElementById('drop-area').style.opacity = '.5'
  }

  private handleDrop (e) {
    e.preventDefault()
    document.getElementById('drop-area').style.opacity = '1'
    if (e.dataTransfer.items) {
      for (let i: number = 0; i < e.dataTransfer.items.length; i++) {
        if (e.dataTransfer.items[i].kind === 'file') {
          let file: File = e.dataTransfer.items[i].getAsFile();
          let files = this.state.addedFiles
          files.push((file))
          this.setState({addedFiles: files})
        }
      }
    } else {
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        let files = this.state.addedFiles
        files.push(e.dataTransfer.files[i])
        this.setState({addedFiles: files})
      }
    }
    document.getElementById('uploadFile').innerHTML = `Upload - ${this.state.addedFiles[0].name}`
    this.removeDragData(e)
  }

  uploadFile() {
    console.log('try to upload file! :):')
    document.getElementById('chooseFile').click()
  }

  render() {
    document.getElementById('uploadHeader').style.color = 'white'
    document.getElementById('uploadHeader').style.backgroundColor = '#2b7a78'
    document.getElementById('downloadHeader').style.backgroundColor = 'white'
    document.getElementById('downloadHeader').style.color = '#2b7a78'
    return (
      <div>
        <div className='app'>
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
                  <div className={'file-selector'}  onClick={this.uploadFile}>
                    Select File
                    <input type='file' id='chooseFile' className={'select-file-btn'} onChange={this.handleSelectedFile}/>
                  </div>
                    <br/>
                    <button className={'upload-btn'} id={'uploadFile'} onClick={this.handleUpload}>Upload</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Uploader
