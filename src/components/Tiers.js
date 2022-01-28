import React from "react";

const Tiers = () => {
  return (
    <>
      <div className="enable">
        <div className="enablecontainer">
          <h4 className="enablehead">Enable Accelerated APY</h4>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <h3 className="tiertext">Select Tier</h3>
        <div className="btnscontainer">
          <button className="pricebtn1">Tier 1</button>
          <button className="pricebtn">Tier 2</button>
          <button className="pricebtn">Tier 3</button>
          <button className="pricebtn">Tier 4</button>
          <button className="pricebtn">Tier 5</button>
        </div>
      </div>
    </>
  );
};

export default Tiers;
