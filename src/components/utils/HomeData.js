import React from "react"
import Moonimage from "../../assets/moonspace.png"

function HomeData() {
  return (
    <div>
      <div className="home-first">
        <div className="home-first-text">
          <p>Talking to devs like you!</p>
          <p>
            <b>
              Exploring the world of <br />
              Technology
            </b>
          </p>

          <p>Discover. Grow. Transform.</p>
        </div>
        <div className="home-first-image">
          <img src={Moonimage} alt="moon-Image" height={250} width={400} />
        </div>
      </div>
    </div>
  )
}

export default HomeData
