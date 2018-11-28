import * as React from 'react'
import './App.css'
import Header from './Header/Header'
import Uploader from './Uploader/Uploader'

class App extends React.Component<React.SFC<{}>> {
  render(): JSX.Element {
    return (
      <section className={'app'}>
        <Header/>
        <Uploader/>
      </section>
    )
  }
}

export default App
