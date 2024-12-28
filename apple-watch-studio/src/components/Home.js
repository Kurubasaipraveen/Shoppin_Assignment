import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate=useNavigate()
  const GoToCollection=()=>{
    navigate('/collection')
  }
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844" alt="Apple Logo" className="logo" />
        <select className="select">
          <option>Apple Watch Series 10</option>
          <option>Apple Watch Hermes Series 10</option>
          <option>Apple Watch  SE</option>
        </select>
        <button className="button">save</button>
      </header>

      <main className="main">
        <div className="text-content">
          <p>Apple Watch Studio</p>
          <span className="subheading">Choose a case.<br/>Pick a band.<br/>Create your own style.</span>
          
          <button className="get-started-btn" onClick={GoToCollection}>Get Started</button>
        </div>

        {/* Watch Image */}
        <div className="watch-image">
          <img
            src="https://res.cloudinary.com/dyutmmnia/image/upload/v1735216641/gqopmc2mgdtfvctxfefl.png"
            alt="Apple Watch"
            className="watch"
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
