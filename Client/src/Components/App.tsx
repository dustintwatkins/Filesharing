import * as React from 'react'
import './App.css'

interface State {

}

class App extends React.Component<React.SFC<{}>> {
  state: State = {

  }

  render(): JSX.Element {
    return (
      <section className={'app'}>
       <div>
         Hello world from Joel and Dustin filesharing
       </div>
      </section>
    )
  }
}

export default App
