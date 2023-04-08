// Write your code here
// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        className="not-found-img"
        alt="not found"
      />
      <h1 className="heading-text">Lost Your Way?</h1>
      <p className="description">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default About
