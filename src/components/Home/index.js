import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

// Sai Tej's Code

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const lightHomeIcon =
        'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
      const darkHomeIcon =
        'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const iconUrl = isDarkTheme ? lightHomeIcon : darkHomeIcon
      const themeColour = isDarkTheme ? 'darkColour' : 'lightColour'

      return (
        <>
          <Navbar />
          <div className={`home-con ${themeColour}`}>
            <img className="home-img" alt="home" src={iconUrl} />
            <h1>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
