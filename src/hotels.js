import { data } from "./data";
import { useState } from "react";

function Hotels() {
  const [hotel, setHotel] = useState(0);
  const { id, hotelName, description, image, source } = data[hotel];

  const showNext = () => {
    setHotel((hotel) => {
      hotel++;
      if (hotel > data.length - 1) {
        hotel = 0;
      }
      return hotel;
    });
  };

  const showPrevious = (person) => {
    setHotel((hotel) => {
      hotel--;
      if (hotel < 0) {
        hotel = data.length - 1;
      }
      return hotel;
    });
  };

  return (
    <div className="container">
      <h2>
        {id} - {hotelName}
      </h2>
      <img src={image} alt="hotel" width="270px" />
      <p>{description}</p>
      <p>{source}</p>
      <div className="btnContainer">
        <button onClick={showPrevious}>Previous</button>
        <button onClick={showNext}>Next</button>
      </div>
    </div>
  );
}

export default Hotels;
