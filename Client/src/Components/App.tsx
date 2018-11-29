import * as React from 'react'
import './App.css'
import Header from './Header/Header'
import Uploader from './Uploader/Uploader'
import pages from '../Pages'

class App extends React.Component<React.SFC<{}>> {
  state = {
    path: location.hash
  }

  componentDidMount (): void {
    window.onhashchange = (event: HashChangeEvent): void => {
      this.setState({ path: location.hash })
    }
  }

  render(): JSX.Element {
    return (
      <section className={'app'}>
        {pages[this.state.path]}
        {/*<Header/>*/}
        {/*<Uploader/>*/}
      </section>
    )
  }
}

export default App
