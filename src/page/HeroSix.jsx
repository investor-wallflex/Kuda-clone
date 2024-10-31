import "./HeroSix.css"
import blockcard from "../assets/block-card.png"

function HeroSix() {
 

    return (
      <>
      
      <div className="feature-section">
        <div>
            <img src={blockcard}alt="image" />
        </div>

        <div className="feature-description">
        <h2>Turn off access, turn on <br />safety.</h2>
        <p>
        Life happens. Milk spills. Debit cards go <br />missing. If that ever happens, you can block <br />your missing card on the app so no one <br />can use it. We’d like to see them try.
        </p>
        <a href="">Learn more about Cards</a>
      </div>
      
      </div>
  
      </>
    )
  }
  
  export default HeroSix