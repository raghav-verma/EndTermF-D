import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ALL_CITIES } from '../../allCities'



export default function Search({ header }) {

  const options = ALL_CITIES;
  const [checkStatus, setCheckStatus] = useState(false);

  setTimeout(function () {
    setCheckStatus(true);
  }, 100);

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [state, setState] = useState("");



  return <form className="search-area box-shadow">
    <div className="search-wrapper clearfix">
      <div className="pull-left backBtn">
        <img src="https://i.pinimg.com/736x/ac/87/b8/ac87b85907f3f3e7e304ded3b2827d0a.jpg" width={32} height={32} alt="" />
      </div>
      <div className="custom-select" style={{ position: "absolute", "zIndex": 1 }}>
        <div style={{ margin: "9px auto" }}>
          <select onChange={(e) => {
            setState(e.target.value);
          }} style={{ border: "none", padding: "10px" }}>
            {options?.map((item) => {
              return (
                <option value={item?.name}>
                  {item?.name}
                </option>
              )
            })}
          </select>
        </div>
      </div>

      <span className="sepration">
        <input type="text"
          className="form-control new-search-input"
          placeholder="Enter project, developer or locality"
          id="banner-search-input"
          autoComplete="off"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }} />

        <button className="btn btn-primary search-btn" onClick={() => {
          navigate(`/estates?search=${search}&state=${state}`)
        }}>
          {(!header) ? <i className="icon-search"></i> : null}
          <span className="srch">Search</span>
        </button>
      </span>
    </div>
  </form>
}

