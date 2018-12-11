import * as React from 'react'
import Uploader from './Components/Uploader/Uploader'
import SearchResults from './Components/SearchResults/SearchResults'
import LandingPage from './Components/LandingPage/LandingPage'

interface Page {
  [s: string]: JSX.Element
}

const pages: Page = {
  '':  <LandingPage/>,
  '#search': <SearchResults/>,
  '#upload': <Uploader/>,
}

export default pages
