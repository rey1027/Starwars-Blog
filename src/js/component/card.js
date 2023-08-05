import React, { Component } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";


const Card = () => {
    return (
        <div className="card" style={{width: "18rem"}}> 
          <img className="card-img-top" src="https://placehold.it/400x200" alt="Card image cap" /> 
          <div className="card-body">
            <h5 className="card-title">Titulo</h5>
            <p className="card-text">Description</p>
          </div>
          <div className="card-body d-inline-flex justify-content-center border-top ">
            <a href="#" className="btn btn-outline-primary me-5">Learn more!</a>
            <button href="#" className="btn btn-outline-warning ms-5 fs-5 d-flex align-items-center"><AiOutlineHeart/></button>
          </div>
        </div>
    );
}

export default Card;

