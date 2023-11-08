import { useState } from "react";
import "./main.css";
import {DetailModal, CreateModal} from "components";
// import { CommonModal } from "components";
import dayjs from "dayjs";
import cx from "classnames";

const DUMMY_TODOLIST = [
    {
        id: 1,
        title: '할 일 1입니다.',
        content: "내용1 입니다.",
        createdAt: dayjs().format("YYYY.MM.DD hh시mm분ss초"),
        updatedAt: dayjs().format("YYYY.MM.DD hh시mm분ss초"),
        isComplete: true
    },
    {
        id: 2,
        title: '할 일 2입니다.',
        content: "내용2 입니다.",
        createdAt: dayjs().format("YYYY.MM.DD hh:mm:ss"),
        updatedAt: dayjs().format("YYYY.MM.DD hh:mm:ss"),
        isComplete: false
    }
];

function Mainpage(){
    const [clickedItem, setClickedItem] = useState(null);
    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
    const [todoList, setTodoList] = useState(DUMMY_TODOLIST);

    const onClickTitle = (id) => {
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

    return (
    <>
    {/* <button onClick={() => setIsOpen(true)}>모달 열기</button> */}
    <main>
        <h1>Our React To Do List</h1>
        <div className="topNavbar">
            <time>TODAY {dayjs().format("YYYY.MM.DD")}</time>
            <button 
                type="button" 
                className="addButton"
                onClick={onClickAdd}>추가</button>
        </div>
        {/* {리스트가 없을 경우에는 추가해주세요 라는 텍스트 뜨기} */}
        <section className="todoList">
            {todoList.map((item)=> {
                // 여기에 item,index를 하면 뻗는 경우 있음?
                return (
                    <article key={item.id} className={cx("todoItem",{complete: item.isComplete})}>
                        {/* classnames 라이브러리를 써서 조건에 따라 class이름을 다르게 해줌 */}
                        <div>
                            <p className="todoTitle" onClick={() => onClickTitle(item.id)}>
                                {item.title}
                            </p>
                            <time className="createDate">
                                생성 날짜: {item.createdAt}
                            </time>
                        </div>
                        <div>
                            <button className="completeButton">
                                {item.isComplete ? '완료 해제' : '완료'}
                            </button>
                            <button className="editButton">수정</button>
                            <button className="deleteButton">삭제</button>
                        </div>
                    </article>
                );
            })}
            {todoList.length === 0 && 
            (<span className="emptyText">추가해주세요.</span>)}

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
        />
    </>
    );
}

export default Mainpage;
