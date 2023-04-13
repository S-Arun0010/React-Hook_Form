import "../Styles/form.css";
import React, { useEffect, useState } from "react";

const Forms = () => {

   const handleSubmit = (event) =>
   {
    event.preventDefault();
   }

  return (
    <>
      <div className="forms">
        <form onSubmit={handleSubmit}>
          <div className="inputbox">
            <label for="name">UserName</label>
            <input name="name" placeholder="Name"></input>
          </div>
          <div className="inputbox">
            <label for="age">Age</label>
            <input name="age" placeholder="Age"></input>
          </div>
          <div className="buttonbox">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Forms;
