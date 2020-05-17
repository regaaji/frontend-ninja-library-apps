import React from "react";
import "../Carousel/Carousel.css";

const Carousel = () => {
    return (
      <div>
        <section className="carousel-container">
          <div
            className="card-carousel-wrapper js-flickity"
            data-flickity-options='{ "freeScroll": true, "wrapAround": true }'
          >
            <div className="carousel-card">
              <div className="carousel-image-card">
                <img
                  src="https://pastelbooks.id/wp-content/uploads/2019/12/DILAN-REPUBLISHED.png"
                  alt="carousel img"
                />
              </div>
              <div className="carousel-text">
                <h2>Dilan 1990</h2>
                <p>Pidi Baiq</p>
              </div>
            </div>
  
            <div className="carousel-card">
              <div className="carousel-image-card">
                <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTh5qS4am_HSTXMrQwVWiCpUOkq01ro3A2eiW8jCtknO1wj2cxu"
                  alt="carousel img"
                />
              </div>
              <div className="carousel-text">
                <h2>Harry Potter</h2>
                <p>J.K Rowling</p>
              </div>
            </div>
  
            <div className="carousel-card">
              <div className="carousel-image-card">
                <img
                  src="https://upload.wikimedia.org/wikipedia/id/thumb/8/8e/Laskar_pelangi_sampul.jpg/220px-Laskar_pelangi_sampul.jpg"
                  alt="carousel img"
                />
              </div>
              <div className="carousel-text">
                <h2>Laskar Pelangi</h2>
                <p>Andrea hirata</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Carousel;