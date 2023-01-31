import {Component} from 'react'

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

// Sai Tej's Code

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          console.log(isDarkTheme)
          const onClickTheme = () => {
            toggleTheme()
          }

          const logoDarkUrl =
            'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
          const logoLightUrl =
            'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

          const themeIconDarkUrl =
            'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
          const themeIconLightUrl =
            'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

          const theme = isDarkTheme ? 'dark-theme' : 'light-theme'
          const logoIcon = isDarkTheme ? logoLightUrl : logoDarkUrl
          const themeIcon = isDarkTheme ? themeIconLightUrl : themeIconDarkUrl
          const themeColour = isDarkTheme ? 'light-colour' : 'dark-Colour'
          const Line = isDarkTheme ? 'h-line' : null
          // console.log(theme)

          return (
            <>
              <nav className={`nav-con ${theme}`}>
                <img alt="website logo" className="theme-logo" src={logoIcon} />
                <ul className="options-con">
                  <li>
                    <Link to="/">
                      <h1 className={themeColour}>Home</h1>
                    </Link>
                  </li>

                  <li>
                    <Link to="/about">
                      <h1 className={themeColour}>About</h1>
                    </Link>
                  </li>
                </ul>
                <button
                  data-testid="theme"
                  type="button"
                  onClick={onClickTheme}
                  className="theme-btn"
                >
                  <img alt="theme" className="theme-icon" src={themeIcon} />
                </button>
              </nav>
              <hr className={Line} />
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
