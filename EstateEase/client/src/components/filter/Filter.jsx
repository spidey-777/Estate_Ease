import { useSearchParams } from "react-router-dom";
import "./filter.scss";
import { useEffect, useState } from "react";
function Filter() {
  const [searchParams,setSearchParams] = useSearchParams();
  const [query,setQuery]=useState({
    type:searchParams.get("type")||"",
    city:searchParams.get("city")||"",
    property:searchParams.get("property")|| "",
    minPrice:searchParams.get("minPrice")|| 1,
    maxPrice:searchParams.get("maxPrice")|| 10000000000,
    bedroom:searchParams.get("bedroom")|| 1,
  })
  const handleChange=(e)=>{
    setQuery({
      ...query,
      [e.target.name]:e.target.value,
    })
    
  }
 
  // console.log(searchParams.get("city"));
  const handleFilter = ()=>{
    setSearchParams(query);
  }

  return (
    <div className="filter">
      <h1>
        Search results for <b>{query.city}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">
            Location
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City Location"
              onChange={handleChange}
            />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">
            Type
          </label>
            <select name="type" id="type" onChange={handleChange}>
              <option value="any">any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
        </div>
        <div className="item">
          <label htmlFor="property">
            Property
          </label>
            <select name="property" id="property" onChange={handleChange}> 
              <option value="any">any</option>
              <option    value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="rent">Condo</option>
              <option value="land">Land</option>
            </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice" >
            Min Price
            </label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="any"
              onChange={handleChange}
            />
        </div>
        <div className="item">
          <label htmlFor="city">
            Max Price
            </label>
            <input
              type="text"
              id="maxPrice"
              name="maxPrice"
              placeholder="any"
              onChange={handleChange}
            />
        </div>
        <div className="item">
          <label htmlFor="bedroom">
            Bedroom
            </label>
            <input
              type="text"
              id="bedroom"
              name="bedroom"
              placeholder="any"
              onChange={handleChange}
            />
        </div>
        <button onClick={handleFilter}>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;