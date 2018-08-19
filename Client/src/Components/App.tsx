import * as React from 'react'
import './App.css'
import Header from './Header/Header'


interface State {

}

class App extends React.Component<React.SFC<{}>> {
  state: State = {

  }

  render(): JSX.Element {
    return (
      <section className={'app'}>
       <div>
          <Header/>
         Hello :)

       </div>
      </section>
    )
  }
}

export default App
