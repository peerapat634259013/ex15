import React from 'react'

function FeaturedPropertyties() {
  return (
    <div className="featuredPropertyties">
      <div className="featuredPropertyItem">
        <img
          src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
          className="featuredPropertyImg"
        />
        <div className="featuredPropertyItem">
          <h2>Aparthotel Stare Miasto</h2>
          <p>Madrid</p>
          <h4> Starting from $120 </h4>
          <button className="btn">8.9</button>
        </div>
      </div>
      <div className="featuredPropertyItem">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80"
          className="featuredPropertyImg"
        />
        <div className="featuredPropertyItem">
          <h2>Comfort Suites Airport</h2>
          <p>Austin</p>
          <h4> Starting from $140 </h4>
          <button className="btn">7.9</button>
        </div>
      </div>
      <div className="featuredPropertyItem">
        <img
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          className="featuredPropertyImg"
        />
        <div className="featuredPropertyItem">
          <h2>Four Seasons Hotel</h2>
          <p>Lisbon</p>
          <h4> Starting from $99</h4>
          <button className="btn">9.9</button>
        </div>
      </div>
      <div className="featuredPropertyItem">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className="featuredPropertyImg"
        />
        <div className="featuredPropertyItem">
          <h2>Hilton Garden inn</h2>
          <p>Madrid</p>
          <h4> Starting from $105 </h4>
          <button className="btn">8.9</button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPropertyties