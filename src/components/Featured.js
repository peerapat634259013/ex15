import React from "react";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1590119227988-a20d53ce33c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80"
          className="featureImg"
        />
        <div className="featuredTitle">
          <h1>Ratchaburi</h1>
          <h2>2,000 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1586968425481-3285b99f3b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          className="featureImg"
        />
        <div className="featuredTitle">
          <h1>Phuket</h1>
          <h2>5,000 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1526644253653-a411eaafdfe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
          className="featureImg"
        />
        <div className="featuredTitle">
          <h1>Abisko</h1>
          <h2>12,000 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
