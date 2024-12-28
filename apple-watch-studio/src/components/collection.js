import React, { useState } from "react";
import "../styles/collection.css";

function Collection() {
  const collections = {
    collection1: {
      name: "Apple Watch Series 10",
      para: "46mm Jet Black Aluminum Case with Black Solo Loop",
      price: "$429",
      sizes: {
        "42mm":
          "https://res.cloudinary.com/dyutmmnia/image/upload/v1735216641/gqopmc2mgdtfvctxfefl.png",
        "46mm":
          "https://res.cloudinary.com/dyutmmnia/image/upload/v1735216641/gqopmc2mgdtfvctxfefl.png",
      },
      frontView:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1735216641/gqopmc2mgdtfvctxfefl.png",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95",
      cases: [
        {
          name: "Apple Watch Series 10 Case",
          image:
            "https://res.cloudinary.com/dyutmmnia/image/upload/v1735216641/gqopmc2mgdtfvctxfefl.png",
          para: "46mm Silver Aluminum Case with Black Solo Loop",
          price: "From $429",
        },
        {
          name: "APPLE WATCH SERIES 10",
          image:
            "https://res.cloudinary.com/dyutmmnia/image/upload/v1735304768/hziam9nefdexiuzs4bkd.png",
          para: "46mm Rose Gold Aluminum Case with Black Solo Loop",
          price: "From $429",
        },
        {
          name: "APPLE WATCH SERIES 10",
          image:
            "https://res.cloudinary.com/dyutmmnia/image/upload/v1735304769/iuqopeyvdhobal8tsid7.png",
          para: "46mm Jet Black Aluminum Case with Black Solo Loop",
          price: "From $429",
        },
        {
          name: "APPLE WATCH SERIES 10",
          image:
            "https://res.cloudinary.com/dyutmmnia/image/upload/v1735304771/dsbjgl6qzet5qosdom9r.png",
          para: "46mm Natural Titanium Case with Black Solo Loop",
          price: "From $749",
        },
        {
          name: "APPLE WATCH SERIES 10",
          image:
            "https://res.cloudinary.com/dyutmmnia/image/upload/v1735304772/chcbnddslhs0polzkuff.png",
          para: "46mm Gold Titanium Case with Black Solo Loop",
          price: "From $749",
        },
        {
          name: "APPLE WATCH SERIES 10",
          image:
            "https://res.cloudinary.com/dyutmmnia/image/upload/v1735216641/gqopmc2mgdtfvctxfefl.png",
          para: "46mm Slate Titanium Case with Black Solo Loop",
          price: "From $749",
        },
      ],
    },
    collection2: {
      name: "Apple Watch Hermes Series 10",
      para: "46mm Silver Titanium Case with Satiné Grand H",
      price: "$1,299",
      sizes: {
        "42mm":
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXJW3ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90",
        "46mm":
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXJW3ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90",
      },
      frontView:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXJW3ref_AV2",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-blanc-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U2k3UWZsRFZUT3RDUXhiYzBQc00wM1ppWXlsaThGV0RuR1F3UUJSdnNrNGs2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1VOTdpZmkxUXVmditlZzc3LytHT3d5",
      cases: [
        {
          name: "APPLE WATCH HERMÈS SERIES 10",
          image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXJW3ref_AV2",
          para:'46mm Silver Titanium Case with Satiné Grand H',
          price:'$1,949.00'
        },
      ],
    },
    collection3: {
      name: "Apple Watch SE",
      para: "44mm Silver Aluminum Case with Star Fruit Solo Loop",
      price: "$279",
      sizes: {
        "42mm":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSutWgtp2F-Z-6G9vYUBZih9cozdgoK2K2o6o9VEQJ21--4eFr",
        "46mm":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSutWgtp2F-Z-6G9vYUBZih9cozdgoK2K2o6o9VEQJ21--4eFr",
      },
      frontView:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSutWgtp2F-Z-6G9vYUBZih9cozdgoK2K2o6o9VEQJ21--4eFr",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/side-case-example",
        cases: [
          {
            name: "APPLE WATCH HERMÈS SERIES SE",
            image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1735354959/mpzbl3vyg2bui0pu1pdx.png",
            para:'46mm Silver Titanium Case with Satiné Grand H',
            price:'$279'
          },
          {
            name: "APPLE WATCH HERMÈS SERIES SE",
            image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1735354958/ulrot51rifcquafyfnc6.png",
            para:'46mm Silver Titanium Case with Satiné Grand H',
            price:'$279'
          },
          {
            name: "APPLE WATCH HERMÈS SERIES SE",
            image: "https://res.cloudinary.com/dyutmmnia/image/upload/v1735354958/khi91xjervevjv19riph.png",
            para:'46mm Silver Titanium Case with Satiné Grand H',
            price:'$279'
          },
        ],
    },
  };

  const [currentCollection, setCurrentCollection] = useState("collection1");
  const [selectedSize, setSelectedSize] = useState(null);
  const [showCases, setShowCases] = useState(false);
  const [view, setView] = useState({
    image: collections.collection1.frontView,
    label: "Front View",
  });
  const [showSizes, setShowSizes] = useState(false);
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);

  const cases = collections[currentCollection]?.cases || [];

  const handleCollectionChange = (e) => {
    const selectedCollection = e.target.value;
    setCurrentCollection(selectedCollection);
    setView({
      image: collections[selectedCollection].frontView,
      label: "Front View",
    });
    setShowSizes(false);
    setShowCases(false);
    setSelectedSize(null);
    setCurrentCaseIndex(0);
  };

  const handleCaseClick = (index) => {
    setCurrentCaseIndex(index);
    setShowCases(true); // Show the case details when clicked
  };

  const handleImageClick = () => {
    setView((prevView) =>
      prevView.label === "Side View"
        ? {
            image: collections[currentCollection].frontView,
            label: "Front View",
          }
        : {
            image: collections[currentCollection].sideView,
            label: "Side View",
          }
    );
  };

  const handlePrevious = () => {
    setCurrentCaseIndex((prevIndex) =>
      prevIndex === 0 ? cases.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentCaseIndex((prevIndex) =>
      prevIndex === cases.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSizeClick = () => {
    setShowSizes(!showSizes);
  };

  return (
    <div className="container">
      <header className="header">
        <img
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52"
          alt="Apple Logo"
          className="logos"
        />
        <div className="center-content">
          <select onChange={handleCollectionChange} value={currentCollection}>
            <option value="collection1">Apple Watch Series 10</option>
            <option value="collection2">Apple Watch Hermes Series 10</option>
            <option value="collection3">Apple Watch SE</option>
          </select>
        </div>
        <button className="save-btn">Save</button>
      </header>

      <div className="second-component">
        {!showCases ? (
          !showSizes ? (
            <>
              <img src={view.image} className="image-second" alt={view.label} />
              <p onClick={handleImageClick} className="clickable">
                {view.label}
              </p>
              <p>{collections[currentCollection].name}</p>
              <h3>{collections[currentCollection].para}</h3>
              <h3>{collections[currentCollection].price}</h3>
            </>
          ) : (
            <div className="sizes-component">
              <div className="size-options">
                {Object.keys(collections[currentCollection].sizes).map((size) => (
                  <div key={size} onClick={() => setSelectedSize(size)}>
                    <img
                      src={collections[currentCollection].sizes[size]}
                      alt={size}
                      className="image-second"
                    />
                    <p>{size}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        ) : (
          <div className="cases-section">
            <div className="cases-wrapper">
              <button onClick={handlePrevious} className="arrow-btn">
                &lt;
              </button>
              <div className="scroll-cases">
                {cases.map((caseItem, index) => {
                  const isMiddleCase = index === currentCaseIndex;
                  return (
                    <div
                      key={index}
                      className={`case-item ${isMiddleCase ? "active" : ""}`}
                      onClick={() => handleCaseClick(index)}
                    >
                      <img
                        src={caseItem.image}
                        alt={caseItem.name}
                        className="case-image"
                      />
                    </div>
                  );
                })}
              </div>
              <button onClick={handleNext} className="arrow-btn">
                &gt;
              </button>
            </div>
            <div className="case-details">
              <h3>{cases[currentCaseIndex]?.name}</h3>
              <p>{cases[currentCaseIndex]?.para}</p>
              <h4>{cases[currentCaseIndex]?.price}</h4>
            </div>
          </div>
        )}
        <div className="size-btns">
          <button className="button" onClick={handleSizeClick}>
            Size
          </button>
          <button className="button" onClick={() => setShowCases(true)}>
            Case
          </button>
          <button className="button">
            Brand
          </button>
        </div>
      </div>
    </div>
  );
}

export default Collection;
