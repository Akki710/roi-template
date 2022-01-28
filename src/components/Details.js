import React from "react";

const Details = () => {
  return (
    <>
      <h3 className="detailstext">Hide Details ︿ </h3>
      <div className="apy">
        <h3>APY</h3>
        <h3 className="apynum">9.0 %</h3>
      </div>
      <ul className="listtext">
        <li>Calculated based on current rates</li>
        <li>
          All figures are estimates provided for your convenience only,and by no{" "}
          <br />
          means represent guaranteed returns.
        </li>
      </ul>
    </>
  );
};

export default Details;
