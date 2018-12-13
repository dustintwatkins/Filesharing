import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './Components/App'
import Model from './Model'

Model.get_instance().fetchAllFiles()
ReactDOM.render(<App />, document.getElementById('app'))
