import React, { useState } from "react";

const Card = ({ Data }) => {
  const [item, setItem] = useState(Data);
  const [toggle, setToggle] = useState(false);

  const removeItem = (comingId) => {
    let newItem = item.filter((place) => place.id !== comingId);
    // console.log(newItem);

    setItem(newItem);
  };
  return (
    <>
      {item.map((item) => {
        const { id, title, image, para } = item;
        return (
          <div key={id} className="col-xs-12 col-sm-6 col-md-4 my-4">
            <div class="card shadow box">
              <img src={image} className="card-img-top" alt="..." />
              <div class="card-body ">
                <h5 className="card-title text-primary">{title}</h5>

                 <p className="card-text">{para}</p>
                {/* <button onClick={() => setToggle(true)}>Read More</button> */}
              </div>
              <div className="btn-box">
                <button
                  onClick={() => removeItem(id)}
                  className="btn btn-danger w-25 mb-1 mr-auto"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
