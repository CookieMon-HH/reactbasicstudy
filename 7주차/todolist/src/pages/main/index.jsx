import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getTodosApi, deleteTodoApi } from 'services/todo';
import { DetailModal, CreateModal } from 'components';

import TopInfo from './topinfo';
import TodoItem from './todoitem';
import Empty from './empty';

import './main.css';

function Mainpage() {
  const navigate = useNavigate();

  const [clickedItem, setClickedItem] = useState(null);
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const getTodoList = async () => {
    const { data } = await getTodosApi();
    setTodoList(data);
  };

  const onClickTitle = (id) => () => {
    navigate(`/todos/${id}`);
  };

  const onCloseModal = (key) => {
    if (key === 'detail') setClickedItem(null);
    if (key === 'create') setIsOpenCreateModal(false);
    setClickedItem(null);
  };

  const onClickAdd = () => {
    setIsOpenCreateModal(true);
  };

  const onClickComplete = (id) => () => {
    const updatedList = todoList.reduce((acc, cur) => {
      if (cur.id === id) return [...acc, { ...cur, completed: !cur.completed }];
      return [...acc, cur];
    }, []);

    setTodoList(updatedList);
  };

  const onClickDelete = (id) => () => {
    deleteTodoApi(id).then(async () => {
      await getTodoList();
    });
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <>
      {/* <button onClick={() => setIsOpen(true)}>모달 열기</button> */}
      <main>
        <TopInfo onClickAdd={onClickAdd} />

        <section className="todoList">
          {todoList.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              onClickTitle={onClickTitle(item.id)}
              onClickComplete={onClickComplete(item.id)}
              onClickDelete={onClickDelete(item.id)}
            />
          ))}
          <Empty view={todoList.length === 0} />
          {/* {리스트가 없을 경우에는 추가해주세요 라는 텍스트 뜨기} */}
        </section>
      </main>
      <DetailModal
        isOpen={!!clickedItem}
        onClose={() => onCloseModal('detail')}
        item={clickedItem}
      />
      {/* !!쓰면  object를 boolean으로 쓸 수 있다 */}
      <CreateModal
        isOpen={isOpenCreateModal}
        onClose={() => onCloseModal('create')}
        setTodoList={setTodoList}
      />
    </>
  );
}

export default Mainpage;
