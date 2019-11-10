import React, { FC } from "react";
import Counter from "./Counter";
import Name from "./Name";

const App: FC = () => {
  return (
    <>
      <Counter />
      <hr />
      <Name />
    </>
  );
};

export default App;
