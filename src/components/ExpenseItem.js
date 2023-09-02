import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <button
          className="btn-increment"
          onClick={(event) => increaseAllocation(props.name)}
        >
          +
        </button>
      </td>
      <td>
        <TiDelete
          size="1.5em"
          style={{
            "background-color": "red",
            "border-color": "red",
            "border-radius": "50%",
            color: "white",
            "font-size": "2rem",
            width: "3rem",
          }}
          onClick={handleDeleteExpense}
        ></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
