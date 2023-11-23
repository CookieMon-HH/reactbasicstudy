import React, { useState } from 'react';
import './createModal.css';
import dayjs from 'dayjs';
import { IconClose } from 'assets/icons';
import { createTodoApi } from 'services/todo';

dayjs.locale('ko');

const INITIAL_VALUE = {
  id: 2000,
  userId: 1231313,
  completed: false,
  title: '',
};

function CreateModal({ isOpen, onClose }) {
  const [value, setValue] = useState(INITIAL_VALUE);

  const onChange = (e) => {
    const { name, value: inputValue } = e.currentTarget;
    setValue((prev) => ({ ...prev, [name]: inputValue }));
  };

  const onCreate = (e) => {
    e.preventDefault();

    createTodoApi(value).then(() => {
      onClose();
    });
  };

  if (!isOpen) return null;

  return (
    <div className="createModalWrapper">
      <aside>
        <IconClose
          width="40px"
          height="40px"
          className="closeButton"
          onClick={onClose}
        />
        <form onSubmit={onCreate}>
          <h1 className="modalTitle">제목</h1>
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            name="title"
            value={value.title}
            onChange={onChange}
          />
          <h1 className="modalTitle">내용</h1>
          <textarea
            placeholder="내용을 입력해주세요."
            rows={12}
            name="content"
            value={value.content}
            onChange={onChange}
          />
          <button type="submit">생성</button>
        </form>
      </aside>
    </div>
  );
}

export default CreateModal;
