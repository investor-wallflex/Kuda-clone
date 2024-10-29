import "./HeroThree.css"
import person from "../assets/person.png"



function HeroThree() {
 

    return (
      <>
      
      <div className="hero-section">
      <div className="text-content">
        <h1>Your phone +<br/>our app +<br/>a debit card =<br/>a simpler life.</h1>
        <p>We designed a money app for your lifestyle,<br /> and you can get a debit card to go with it. <br /> That's all you need to make the right money <br />moves.</p>
        <a href="#" className="cta-link">Open An Account in Minutes</a>
      </div>
      <div className="image-content">
        <img src={person} alt="Person using app" />
      </div>
    </div>

  
      </>
    )
  }
  
  export default HeroThree