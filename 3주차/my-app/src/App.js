import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(1);
  
  const onClickButton = () => {
    setIsOpen((perv) => !perv);
  };

  return (
    <div>
      <button type="button"  onClick={onClickButton}>오픈 상태 변경</button>
      {isOpen && <Counter counter={counter} setCounter={setCounter} />}
    </div>
  
  );
}

export default App;
