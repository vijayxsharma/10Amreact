import React from "react";

const Products = ({elm:{title,description,thumbnail,price,category}}) => {
  return (
    <div className="col-4">
      <div className="row g-0 border d-flex overflow-hidden align-items-center rounded mb-4 shadow-sm h-md-250 position-relative" style={{
        height:"40vh"}}>
        <div className="col-6 p-3 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">
            {title}
          </strong>
          <h4 className="mb-0">{category}</h4>
          <div className="mb-1 text-body-secondary">${price}</div>
          <p className="card-text mb-auto">
            {description}
          </p>
          
        </div>
        <div className="col-6 d-none d-lg-block">
          <img src={thumbnail} alt="" className="me-2 rounded-3" 
          style={{height: "100%", width:"95%"}} />
        </div>
      </div>
    </div>
  );
};

export default Products;
