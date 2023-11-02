import "./main.css"
import { DetailModal } from "components";
// React 훅은 기본적으로 use라는 접두사가 붙은 함수로 시작 (예를 들어 useState, useEffect, useContext) 
import { useState } from "react";
import dayjs from "dayjs";
import cx from "classnames"
dayjs.locale("ko");

const DUMMY_TODOLIST = [
    {
        id: 1,
        title: '할 일 1 제목입니다.',
        content: '내용 1입니다.',
        createAt: dayjs().format('YYYY-MM-DD HH시mm분ss초'),
        updateAt: dayjs().format('YYYY-MM-DD HH시mm분ss초'),
        // createAt: '2023-11-01 12:00:00',
        // updateAt: '2023-11-01 12:00:00',
        isComplete: true,
    },
    {
        id: 2,
        title: '할 일 2 제목입니다.',
        content: '내용 2입니다.',
        createAt: dayjs().format('YYYY-MM-DD HH시mm분ss초'),
        updateAt: dayjs().format('YYYY-MM-DD HH시mm분ss초'),
        // createAt: '2023-11-01 10:00:00',
        // updateAt: '2023-11-01 10:00:00',
        isComplete: false,
    }
];


function MainPage() {
    // isOpen은 현재 상태값을 저장 (default는 false) 
    // setIsOpen은 isOpen 상태값을 업데이트할 수 있는 함수 
    const [clickedItem, setClickedItem] = useState(false);
    const [todoList, setTodoList] = useState(DUMMY_TODOLIST); // todoList는 현재 상태값을 저장 (default는 빈 배열)

    const onClickTitle = (id) => {
        const clickedItem = todoList.find((item) => item.id === id);
        if (!clickedItem) return;
        setClickedItem(clickedItem);
    }

    const onCloseModal = () => {
        setClickedItem(null)
    }
    
    
    return (
    <>
        <main>
            <h1>Our React To Do List</h1>
            <div className="topNavbar">
                <tiem>TODAY 2023.11.02</tiem>
                <button type="button" className="addButton">추가</button>
            </div>
            <section className="todoList">
                {todoList.map((item, index) => {
                    // item object => jsx로 리턴
                    return (
                        <article key={item.id} className={cx("todoItem", { complete : item.isComplete })}>
                            <div>
                              {/* <!-- onClick 시 setIsOpen으로 콜백해서 사용  --> */}
                                <p className="todoTitle" onClick={() => onClickTitle (item.id)} >
                                    {item.title}
                                </p>
                                <time className="createdDate">생성날짜: {item.createAt}</time>
                            </div>
                            <div>
                                <button type="button" className="completeButton">
                                    {item.isCompleted ? '완료 해제' : '완료'}
                                </button>
                                <button type="button" className="editButton">
                                    수정
                                    </button>
                                <button type="button" className="deleteButton">
                                    삭제
                                </button>
                            </div>
                        </article>
                    );
                })}                
            </section>
            {/* 리스트가 없을 경우에는 추가해주세요 라는 텍스트 뜨게 */}
        </main>
        <DetailModal isOpen={!!clickedItem} onClose={onCloseModal} item={clickedItem}/>
    </>
    );
}

export default MainPage;