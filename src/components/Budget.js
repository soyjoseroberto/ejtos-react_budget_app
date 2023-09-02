import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget, dispatch, currency } = useContext(AppContext);

  const setBudget = (newBudget) => {
    dispatch({
      type: "SET_BUDGET",
      payload: newBudget,
    });
  };

  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}
        <input
          required="required"
          type="number"
          min="0"
          max="20000"
          id="budget"
          step="10"
          value={budget}
          style={{ width: "150px" }}
          onChange={(event) => setBudget(event.target.value)}
        ></input>
      </span>
    </div>
  );
};
export default Budget;
