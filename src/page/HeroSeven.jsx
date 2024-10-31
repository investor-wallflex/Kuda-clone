import "./HeroSeven.css"
import hello from "../assets/hello.png"


function HeroSeven() {
 

    return (
      <>
      <div className="main-container">
            <div className="text-holder">
                <h2>We’re always happy to <br />help you.</h2>
                <p>You can chat with us on the app, slide into our <br /> DMs, tweet, leave an Instagram comment, <br /> send an email or call. However you choose to  <br />reach out, there’ll always be a friendly person <br />there to make your life easy.</p>
                <a href="">Get Help</a>
            </div>

            <div>
                <img src={hello} alt="" />
            </div>
      </div>
      </>
    )
  }
  
  export default HeroSeven
   