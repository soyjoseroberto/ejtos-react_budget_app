import React, { useContext } from "react";
import { FaPlusCircle, FaTimesCircle } from "react-icons/fa";

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
        <FaPlusCircle
          color="green"
          size="2.2em"
          onClick={(event) => increaseAllocation(props.name)}
        ></FaPlusCircle>
      </td>
      <td>
        <FaTimesCircle
          color="red"
          size="2.2em"
          onClick={handleDeleteExpense}
        ></FaTimesCircle>
      </td>
    </tr>
  );
};

export default ExpenseItem;
