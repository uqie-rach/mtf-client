import React from "react";

const Wrapper = (Component, id) =>
  function HOC() {
    return (
      <div className="wrapper-container">
        <div className="wrapper text-white" id={id}>
            <Component />
        </div>
      </div>
    );
  };

  
export default Wrapper;
