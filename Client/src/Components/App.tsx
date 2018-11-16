import * as React from 'react'
import './App.css'
import Header from './Header/Header'
import Uploader from './Content/Uploader'

interface State {

}

class App extends React.Component<React.SFC<{}>> {
  state: State = {

  }

  render(): JSX.Element {
    return (
      <section className={'app'}>
      <Header/>
       <div>
         Hello world from Joel and Dustin filesharing
       </div>
      <Uploader/>
      </section>
    )
  }
}

export default App
