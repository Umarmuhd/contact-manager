import React, { useRef, useState } from "react";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { ReactComponent as FilterIcon } from "../images/filter.svg";
import "./Filter.css";

function Filter({ filters }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const [filter, setFilter] = useState({
    gender: "",
    paymentmethod: "",
  });
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    filters(filter);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="menu-container filter">
        <button
          onClick={onClick}
          className="menu-trigger btn btn-outline-dark my-2 my-sm-0"
        >
          <FilterIcon />
          Filter
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <details>
              <summary>Gender</summary>
              <div className="content px-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="default-gender"
                    value=""
                    onChange={handleInputChange}
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="default-gender">
                    Default
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="Male"
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="Female"
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="not-specified"
                    value="Prefer to skip"
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="not-specified">
                    Prefer to skip
                  </label>
                </div>
              </div>
            </details>

            <details>
              <summary>Payment Methods</summary>
              <div className="content px-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentmethod"
                    id="default-pm"
                    value=""
                    onChange={handleInputChange}
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="default-pm">
                    Default
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentmethod"
                    id="cash"
                    value="moneyorder"
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="cash">
                    Money Order
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentmethod"
                    id="cc"
                    value="cc"
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="cc">
                    Credit Card (CC)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentmethod"
                    id="paypal"
                    value="paypal"
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    Paypal
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentmethod"
                    id="check"
                    value="check"
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="check">
                    Check
                  </label>
                </div>
              </div>
            </details>
          </ul>
          <div className="text-right">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </nav>
      </div>
    </form>
  );
}

export default Filter;
