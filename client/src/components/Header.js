import React, { Component } from "react"

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo left" href="/">
            MundoVerde
          </a>
          <ul className="right">
            <li>
              <a href="/">Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Header
