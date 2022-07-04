import React from 'react';


const CartWidget = () => {
    return(
      <button type="button"  className="btn btn-dark btn btn-outline-success my-2 my-sm-0 " >
        🛒 <span className="badge badge-primary">{4}</span >
      </button>
    );
}

export default CartWidget;