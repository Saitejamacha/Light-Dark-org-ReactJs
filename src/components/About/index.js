import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

// Sai Tej's Code

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const lightAboutIcon =
        'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
      const darkAboutIcon =
        'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const iconUrl = isDarkTheme ? lightAboutIcon : darkAboutIcon

      const themeColour = isDarkTheme ? 'darkColour' : 'lightColour'

      return (
        <>
          <Navbar />
          <div className={`about-con ${themeColour}`}>
            <img className="home-img" alt="about" src={iconUrl} />
            <h1>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
