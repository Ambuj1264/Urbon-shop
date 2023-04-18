import React from 'react'

const HeroSection = () => {
  return (
    <div>
    <div className="heroSection">
        <div className="Slider">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item" >
                <img src="https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=650&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hvZXN8fHx8fHwxNjgxNjc2MTcx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" className="d-block w-100" alt="..." style={{height:"400px"}}/>
              </div>
              <div className="carousel-item active " style={{height:"400px"}}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/GWHeros/Apr/17th/SS_23/Men/PC_3000_Men._CB592059448_.jpg" className="d-block w-100 " alt="..."  />
              </div>
              <div className="carousel-item" style={{height:"400px"}}>
                <img src="https://images.unsplash.com/photo-1556048219-bb6978360b84?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hvZXN8fHx8fHwxNjgxNjc2MTMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default HeroSection