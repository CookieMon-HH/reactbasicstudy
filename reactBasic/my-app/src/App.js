import React, { useState } from "react";
import Counter from "./Components/Counter";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(1);

  const onClickButton = () => {
    setIsOpen((prev) => !prev);
  }

  return (
  <div>
    <button type="button" onClick={onClickButton}>오픈 상태 변경</button>
    { isOpen && <Counter counter={counter} setCounter={setCounter}/>}
    {/* // 위처럼 counter를 자식에게 전달할 수 있음, 
    // 부모에서는 state이고 자식 입장에선 props가 됨
    // props는 단순히 읽기 전용이다.

    //isOpen이 true인 경우만 JSX를 리턴하게 해줌 */}

  </div>
  );
}

export default App;