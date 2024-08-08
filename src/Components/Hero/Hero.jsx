import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [allwebproducts, setAllwebProducts] = useState([]);

  // Fetch all products from the server
  const fetchInfo = () => {
    fetch("http://54.227.62.35:4000/allwebproducts")
      .then((res) => res.json())
      .then((data) => setAllwebProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // const heroSections = [
  //   {
  //     title: "NEW ARRIVALS ONLY",
  //     description: ["new", "collections", "for everyone"],
  //     link: "/NewCollections",
  //     image: hero1_image,
  //     // background: "linear-gradient(180deg, #262227, #36203122 60%)",
  //   },
  //   {
  //     title: "FRESH STYLES",
  //     description: ["new", "arrivals", "just for you"],
  //     link: "/FreshStyles",
  //     image: hero1_image,
  //     // background: "linear-gradient(180deg, #8a7c3e, #36203122 60%)",
  //   },
  //   {
  //     title: "EXCLUSIVE OFFERS",
  //     description: ["exclusive", "deals", "just for you"],
  //     link: "/ExclusiveOffers",
  //     image: hero1_image,
  //     // background: "linear-gradient(180deg, #9a4419, #36203122 60%)",
  //   },
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === heroSections.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 3000); // Change slide every 3 seconds

  //   return () => clearInterval(interval);
  // }, [heroSections.length]);

  return (
    <>
      <div className="website-container">
        {/* <div className="listproduct"> */}
        {/* <h1>All Website Change List</h1>
          <div className="listproduct-format-main">
            <p>Website Change</p>
            <p>Title</p>
            <p>Offer Price</p>
            <p>New Price</p>
            <p>Category</p>
            <p>Description</p>
            <p>Images</p>
          </div> */}
        <div className="listproduct-allproducts">
          {/* <hr /> */}
          {allwebproducts.length > 0 ? (
            allwebproducts.map((website) => (
              <div
                key={website._id}
                className="listproduct-format-main listproduct-format"
              >
                {/* <img
                  className="listproduct-product-icon"
                  src={website.webimage1 || "placeholder.jpg"}
                  alt="Product"
                /> */}
                <div className="listproduct-product-icons">
                  {website.webimage2 && (
                    <img
                      className="listproduct-product-icon"
                      src={website.webimage2}
                      alt="Product"
                    />
                  )}

                  {/* {website.webimage3 && (
                    <img
                      className="listproduct-product-icon"
                      src={website.webimage3}
                      alt="Product"
                    />
                  )} */}
                  {/* {website.webimage4 && (
                    <img
                      className="listproduct-product-icon"
                      src={website.webimage4}
                      alt="Product"
                    />
                  )}*/}
                  {/* {website.webimage5 && (
                    <img
                      className="listproduct-product-icon"
                      src={website.webimage5}
                      alt="Product"
                    />
                  )} */}
                  {/* {website.webimage6 && (
                    <img
                      className="listproduct-product-icon"
                      src={website.webimage6}
                      alt="Product"
                    />
                  )} */}
                </div>
                {/* <p className="listproduct-product-title">{website.webname}</p>
                <p>Rs.{website.webold_price}</p>
                <p>Rs.{website.webnew_price}</p>
                <p>{website.webcategory}</p>
                <p>{website.webdescriptions}</p> */}
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
          <hr />
        </div>
        {/* </div> */}
      </div>
      <div className="hero-hero">
        <div className="hero-container">
          {/* <div
            className="hero-wrapper"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          > */}
          {/* {heroSections.map((section, index) => (
              <div
                className="hero"
                key={index}
                style={{ background: section.background }}
              >
                <div className="hero-left">
                  <h2>{section.title}</h2>
                  <div>
                    <div className="hero-hand-icon">
                      <p>{section.description[0]}</p>
                    </div>
                    <p>{section.description[1]}</p>
                    <p>{section.description[2]}</p>
                  </div>
                  <Link to={section.link}>
                    <div className="hero-latest-btn">
                      <div>Latest Collection</div>
                      <img src={arrow_icon} alt="Arrow Icon" />
                    </div>
                  </Link>
                </div>
                <div className="hero-right">
                  <img src={section.image} alt="hero" />
                </div>
              </div> */}
          {/* ))} */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Hero;
