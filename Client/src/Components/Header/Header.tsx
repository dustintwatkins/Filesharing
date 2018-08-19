import * as React from 'react'
import "./Header.css"
class Header extends React.Component<React.SFC<{}>> {
  render(): JSX.Element {
    return (
     <section>
        <div>
          <div className="header">
            <a href="#default" className="logo">SpaceX</a>
            <div className="header-right">
              <a href="#home" className={"about"}>ABOUT SPACEX</a>
              <a href="#contact">CAREERS</a>
              <a href="#about">GALLERY</a>
              <a className="active" href="#shop">SHOP</a>
            </div>
          </div>

        </div>
     </section>
       )
  }
}

export default Header