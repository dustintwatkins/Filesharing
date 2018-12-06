import * as React from 'react'
import './App.css'
import Header from './Header/Header'
import pages from '../Pages'
import Model from '../Model'

class App extends React.Component<React.SFC<{}>> {
  state = {
    path: location.hash
  }

  async componentDidMount (): Promise<void> {
    window.onhashchange = (event: HashChangeEvent): void => {
      this.setState({ path: location.hash })
    }
  }

  render(): JSX.Element {
    Model.get_instance().fetchAllFiles()
    return (
      <section className={'app'}>
        <Header/>
        {pages[this.state.path]}
      </section>
    )
  }
}

export default App
