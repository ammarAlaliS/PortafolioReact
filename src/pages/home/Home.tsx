import './home.css'
import '../../../public/ProfileImg.png'

function Home() {
  return (
    <div className="_mainContainer">
      <div className="_insideContainer">
        <div className='img'>
          <img src="public/ProfileImg.png" alt="" />
          <span className='name'>Ammar Ali</span>
        </div>
        <div className='mainContent'>
          <div className='homeContent'>
            <h1>Hey there, I'm Ammar </h1>
            <h2>Software Developer</h2>
            <p>I can help you build a product, feature, or website. Take a look at some of my work and experience! If you like what you see and have a project you need coding, feel free to contact me.</p>
            <a href="">Hire me</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home