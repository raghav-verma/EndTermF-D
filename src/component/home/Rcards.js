import React, { useEffect, useState } from "react";
import { RealEstates } from "../../realEstate";


function Rcards() {
  const [realEstate, setRealEstate] = useState([]);


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
    setRealEstate(RealEstates);
  }, [])


  return (
    <div>
      <div className="container">
        <div className="clearfix">
          <div className="RealestateCards">
            <div className="section-heading-homeDecor">
              <h3 className="home-section-main-heading">Real Estate Updates</h3>
            </div>
            <div className="viewAll">
              <button>
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="RealCa">
        {realEstate?.filter((item, index) => index < 4)?.map((project, i) => {
          return (
            <div key={"project" + i}>
              <div className="div1RC">
                <div className="Rcontent">
                  <img
                    src={project.coverImage}
                    alt={project.name}
                    style={{ height: "100%", width: "100%" }}
                  />
                  <h3 className="blogTittle">
                    {truncateString("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 65)}

                  </h3>
                  <div className="dateArticle">
                    <p className="article">Article</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Rcards;
