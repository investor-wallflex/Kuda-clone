
import "./Hero.css"
import apple from '../assets/apple.png'
import google from '../assets/google.png'
import cbn from '../assets/cbn.png'
import advert from '../assets/hero-picturenew.png'

function Hero() {
 
  

    return (
      <>
      <div className="contain">
        <div className="leftContainer">
            <h1>The money app for <br />Africans.</h1>
            <p>Make free transfers, enjoy cashless payment <br />options and earn interest on your savings with <br />Kuda.</p>
            <button><img src={apple} alt="" /></button>
            <button><img src={google} alt="" /></button>
            <br />
            <img src={cbn} alt="" />
        </div>
        <div className="rightContainer">
            <img src={advert} alt="image" />
        </div>
      </div>
      </>
    )
  }
  
  export default Hero