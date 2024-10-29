import "./HeroFive.css"
import spend from "../assets/spend-save.png"


function HeroFive() {
 

    return (
      <>
      
      <div className="feature-section">
       
      <div className="feature-description">
                <h2>Save money as you <br />spend it, seriously.</h2>
                <p>
                You can’t avoid spending. That’s how you pay <br /> for your needs. But we can help you put money <br />away every time you pay for something. Just <br /> set a percentage to save and watch your <br /> money grow.
                </p>
                <a href="">see all our Savings</a>
    </div>
    
        <div>
            <img src={spend}alt="" />
        </div>  

      </div>
       
      </>
    )
  }
  
  export default HeroFive


  
 