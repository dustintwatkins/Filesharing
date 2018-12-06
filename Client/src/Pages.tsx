import * as React from 'react'
import Uploader from './Components/Uploader/Uploader'
import SearchResults from './Components/SearchResults/SearchResults'
import LandingPage from './Components/LandingPage/LandingPage'

interface Page {
  [s: string]: JSX.Element
}

const pages: Page = {
  '': <Uploader/>,
  '#search': <SearchResults/>,
  '#home': <LandingPage/>,
}

export default pages
