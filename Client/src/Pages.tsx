import * as React from 'react'
import Uploader from './Components/Uploader/Uploader'
import SearchResults from './Components/SearchResults/SearchResults'

interface Page {
  [s: string]: JSX.Element
}

const pages: Page = {
  '': <Uploader/>,
  '#search-results': <SearchResults/>
}

export default pages
