import React, { useEffect, useState } from "react";
import { RealEstates } from "../../realEstate";

function HomeDecor() {
  const [homeDecor, setHomeDecor] = useState([]);
  const truncateString = (content, length) => {
    if (content) {
      var newContent = content.replace(/<[^>]*>?/g, " ");
      if (newContent.length <= length) {
        return newContent;
      } else {
        return newContent.substring(0, length) + "...";
      }
    }
  };

  useEffect(() => {
    setHomeDecor(RealEstates);
  }, [])

  return (
    <div className="HDdecor">
      <div className="container">
        <div className="clearfix">
          <div className="RealestateCards">
            <div className="section-heading-homeDecor">
              <h3 className="home-section-main-heading">Home Decor</h3>
              <span>Latest home decor ideas</span>
            </div>
            <div className="viewAll">
              <button>
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="cardHD">
        {homeDecor?.filter((item, index) => index < 8)?.map((project, i) => {
          return (
            <div key={"decor" + i}>
              <div className="div1HD">
                <div className="HDimage">
                  <img
                    src={project.coverImage}
                    alt={project.name}
                    style={{ height: "330px", width: "450px" }}
                  />
                </div>
                <div className="HDtext">
                  <h3>{project.name}</h3>
                  <p className="decorDescription">
                    {truncateString("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 65)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeDecor;
