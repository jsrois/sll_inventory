import * as React from "react";
import { useState } from "react";

const App = (): JSX.Element => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div>
      {submitted ? (
        <div>Inventory</div>
      ) : (
        <form className="form" onSubmit={onSubmit}>
          <label htmlFor="username">Name</label>
          <input type="text" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <input type="submit" value="Login" />
        </form>
      )}
    </div>
  );
};

export default App;
