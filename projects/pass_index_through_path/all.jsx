import React from "react";
import { Link } from "react-router-dom";

const All = ({ props }) => {
  return (
    
      <div>
    
        
      {props.map((item, index) => {
        return (
          <div key={index}>
            <Link to={`/singlecard/${index}`}>{item.title}</Link>
          </div>
        );
      })}
    </div>
    
  );
};

export default All;
