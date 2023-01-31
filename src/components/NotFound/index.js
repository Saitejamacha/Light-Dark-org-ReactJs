import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const themeColour = isDarkTheme ? 'darkColour' : 'lightColour'

      return (
        <>
          <Navbar />
          <div className={`notFound-con ${themeColour}`}>
            <img
              alt="not found"
              className="img-size"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            />
            <h1>Lost Your way?</h1>
            <p>We cannot seem to find the page you are looking for.</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
