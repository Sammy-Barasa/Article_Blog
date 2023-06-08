import React from "react"
import Colorblend from "../../assets/colorblend.png"

function HomeData2() {
  return (
    <div>
      <div className="home-second">
        <div className="home-second-text">
          <p>Education</p>
          <h3>
            <b>
              Exploring the world of <br />
              Software Engineering <br />
              With Moringa Alumni
              <br />
              Teachers and Students
            </b>
          </h3>
          <p>Check out all the articles we have in store for you</p>
          <button>Articles Here</button>
        </div>
        <div className="home-second-image">
          <img src={Colorblend} alt="moon-Image" height={250} width={400} />
        </div>
      </div>
    </div>
  )
}

export default HomeData2
