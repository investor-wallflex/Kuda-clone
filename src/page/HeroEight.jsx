import "./HeroEight.css"
import glass from "../assets/glass.png"



function HeroEight() {
 

    return (
      <>
      
      <div className="main-container">
        <div>
            <img src={glass} alt="" />
        </div>

        <div className="text-holder">
                <h2>Fees as clear as glass.</h2>
                <p>We’re serious about free banking, and we will <br /> never, ever charge you for anything without <br /> your consent.</p>
                <a href="">See all our fees</a>
            </div>
      </div>
  
      </>
    )
  }
  
  export default HeroEight