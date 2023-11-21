import { useState } from "react";
import "./main.css";
import {DetailModal, CreateModal} from "components";

import TopInfo from "./topinfo";
import TodoItem from "./todoitem";
import Empty from "./empty";


function Mainpage(){
    const [clickedItem, setClickedItem] = useState(null);
    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
    const [todoList, setTodoList] = useState([]);

    const onClickTitle = (id) => () => {
        const clickedItem = todoList.find((item) => item.id === id)
        if(!clickedItem) return;
        setClickedItem(clickedItem);
    }

    const onCloseModal = (key) => {
        if(key === "detail") setClickedItem(null);
        if(key === "create") setIsOpenCreateModal(false);
        setClickedItem(null);
    }

    const onClickAdd = () => {
        setIsOpenCreateModal(true);
    }

    const onClickComplete = (id) => () => {
        const updatedList = todoList.reduce((acc,cur) => {
            if (cur.id === id)
                return [...acc,{...cur, isComplete: !cur.isComplete}];
            return [...acc,cur];
        },[]);

        setTodoList(updatedList);
    };

    const onClickDelete = (id) => () => {
        const deletedList = todoList.filter((item)=>item.id !== id);
        setTodoList(deletedList);
    }

    return (
    <>
    {/* <button onClick={() => setIsOpen(true)}>모달 열기</button> */}
    <main>
        <TopInfo onClickAdd={onClickAdd} />
        
        <section className="todoList">
            {todoList.map((item)=> {
                // 여기에 item,index를 하면 뻗는 경우 있음?
                return(
                <TodoItem
                    key={item.id}
                    item={item}
                    onClickTitle={onClickTitle(item.id)}
                    onClickComplete={onClickComplete(item.id)}
                    onClickDelete={onClickDelete(item.id)}
                />
                );
            })}
            <Empty view={todoList.length === 0} />
            {/* {리스트가 없을 경우에는 추가해주세요 라는 텍스트 뜨기} */}

        </section>

    </main>
    <DetailModal 
        isOpen={!!clickedItem} 
        onClose={() => onCloseModal("detail")} 
        item={clickedItem}/>
    {/* !!쓰면  object를 boolean으로 쓸 수 있다 */}
    <CreateModal 
        isOpen={isOpenCreateModal}
        onClose={() => onCloseModal("create")}
        setTodoList={setTodoList}
        />
    </>
    );
}

export default Mainpage;
