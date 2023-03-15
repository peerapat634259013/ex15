import React from 'react'

function PropertyList() {
  return (
    <div className="propertyList">
      <div className="propertyItem">
        <img
          src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className="propertyImg"
        />
        <div className="propertyItem">
          <h1>Hotels</h1>
          <h2>450 apartment</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className="propertyImg"
        />
        <div className="propertyItem">
          <h1>Resort</h1>
          <h2>450 Resort</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          className="propertyImg"
        />
        <div className="propertyItem">
          <h1>Villas</h1>
          <h2>450 Villas</h2>
        </div>
      </div>
      <div className="propertyItem">
        <img
          src="https://images.unsplash.com/photo-1584551882400-a86ff441e474?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          className="propertyImg"
        />
        <div className="propertyItem">
          <h1>Cabins</h1>
          <h2>450 Cabins</h2>
        </div>
      </div>
    </div>
  );
}

export default PropertyList