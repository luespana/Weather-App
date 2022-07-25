import React from "react";

export const WeatherForm = (props) => {
  return (
    <div className="card card-body">
      <form onSubmit={props.getWeather}>
        <div className="m-3">
          <input
            type="text"
            name="city"
            placeholder="Your city name"
            className="form-control"
            autoFocus
          />
        </div>
        <div className="m-3">
          <input
            type="text"
            name="country"
            placeholder="Your country name"
            className="form-control"
            autoFocus
          />
        </div>
        <button className="btn btn-success btn-block">Get Weather</button>
      </form>
    </div>
  );
};

