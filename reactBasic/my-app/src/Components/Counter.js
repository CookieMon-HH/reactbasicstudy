import React, {useEffect, useState} from "react";
import "./counter.css"

function Counter({counter, setCounter}) {
    // props 반으려면 {}로 받음 

    const onClickPlus = () => {
        //react에선 동작을 한번에 모아서 처리하기 때문에 데이터가 꼬일 수 있어서 
        // 변수를 직접 활용하지 않음 (그래서 콜백형태로 사용)
        setCounter((prev) => prev+1);
        // props는 읽기 전용이라서 직접 변경은 안되고 setCounter를 통해 변경
    }
    const onClickMinus = () => {
        setCounter((prev) => prev-1);
    }

    useEffect(() => {
        console.log('mount')
        // 빈배열 : mount 될 때만 실행 
        // 빈배열에 state를 넣으면 : mount 될 때 + state가 update될 때

        return () => {
            console.log('unmount')
            // unmount 될 때 실행
        }
    },[counter]);


    return (
        // attribute에 onClick을 통해 동작을 직접 지정할 수 있음
        <main>
            <button type="button" onClick={onClickPlus}>+</button>
            <strong>{counter}</strong>
            <button type="button" onClick={onClickMinus}>-</button>
        </main>
    );
}

export default Counter;