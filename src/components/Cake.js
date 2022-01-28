import cakeimage from "../images/cakeimage.jpg"
const Cake = () => {
  return (
    <>
      <div className="cakecomponent">
        <div className="iconsbtns">
        <img src={cakeimage} alt="image" className="cakeimg" />
        <h3>CAKE</h3>
        <label className="switch">
          <input type="checkbox" />
            <span className="slider round"></span>
        </label>
        <h3>USD</h3>
        </div>
        <div className="box">
          <p>0.000 USD</p>
        </div>
        <div className="amountbtn">
          <button className="pricebtn">$1000</button>
          <button className="pricebtn">$100</button>
        </div>
        <h6 className="caketext">~CAKE 0.000</h6>
      </div>
    </>
  )
};

export default Cake;
