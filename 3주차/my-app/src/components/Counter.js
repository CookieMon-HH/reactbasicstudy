import React, {useEffect, useState} from "react";
import "./counter.css"

function Counter({counter, setCounter}) {
    const onClickPlus = () => {
        setCounter((prev) => prev + 1);
    };

    const onClickMinus = () => {
        setCounter((prev) => prev - 1)
    }

    useEffect(() => {
        //mount 될 때 실행
        console.log("mount")

        return () => {
            //unmount 될 때 실행
            console.log("unmount");
        }
    });

    return (
        <main>
            <button type="button" onClick={onClickPlus}>+</button>
            <strong>{counter}</strong>
            <button type="button" onClick={onClickMinus}>-</button>
        </main>
    );
}

export default Counter;