import React from "react";

function Pizza({ topping, size, vegetarian, setFormData, id}) {
  const handleClick = () => {
    setFormData({
      topping,
      size,
      vegetarian,
      id, 
    })
  }
  
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'Yes' : 'No'}</td>
      <td>
        <button onClick={handleClick} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
