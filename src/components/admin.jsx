import { useState } from "react";
import "./admin.css";

const Admin = () => {
  const [product, setProduct] = useState({});
  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);

  const saveCoupon = () => {
    console.log("a message!", coupon);

    // display on screen ???
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  };

  const codeChange = (e) => {
    let copy = { ...coupon }; // create a copy
    copy.code = e.target.value; // modify copy
    setCoupon(copy); // set the copy as the new value
  };

  const discountChange = (e) => {
    console.log(e);

    let copy = { ...coupon };
    copy.discount = parseFloat(e.target.value);
    setCoupon(copy);
  };

  const prodChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    let copy = {...product};
    copy[name] = value;
    setProduct(copy);
  };

  return (
    <div className="admin-page">
      <h1>Store management</h1>

      <div className="admin-container">
        <div className="prods">
          <h3>Register new products</h3>

          <div className="form">
            <div>
              <label className="form-label">Title</label>
              <input onChange={prodChange} type="text" name="title" className="form-control" />
            </div>

            <div>
              <label className="form-label">Image</label>
              <input onChange={prodChange} type="text" name="image" className="form-control" />
            </div>

            <div>
              <label className="form-label">Category</label>
              <input onChange={prodChange} type="text" name="category" className="form-control" />
            </div>

            <div>
              <label className="form-label">Price</label>
              <input onChange={prodChange} type="text" name="price" className="form-control" />
            </div>

            <div>
              <label className="form-label">Stock</label>
              <input onChange={prodChange} type="text" name="stock" className="form-control" />
            </div>

            <div>
              <label className="form-label">Discount</label>
              <input onChange={prodChange} type="text" name="discount" className="form-control" />
            </div>
          </div>

          <button className="btn btn-primary">Register Product</button>
        </div>

        <div className="coupons">
          <h3>Coupon Codes</h3>

          <div className="form">
            <div>
              <label className="form-label">Code</label>
              <input onChange={codeChange} type="text" name="code" className="form-control" />
            </div>

            <div>
              <label className="form-label">Discount</label>
              <input onChange={discountChange} type="number" name="discount" className="form-control" />
            </div>

            <button onClick={saveCoupon} className="btn btn-dark">
              Register
            </button>
          </div>

          <h4>Valid Coupons</h4>
          <ul>
            {allCoupons.map((c, index) => <li key={index}> {c.code} - {c.discount}%  </li> )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
