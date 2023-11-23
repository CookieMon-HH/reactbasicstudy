import React from 'react';
import cx from 'classnames';

function TodoItem({ item, onClickTitle, onClickComplete, onClickDelete }) {
  return (
    <article className={cx('todoItem', { complete: item.completed })}>
      {/* classnames 라이브러리를 써서 조건에 따라 class이름을 다르게 해줌 */}
      <div>
        <p className="todoTitle" onClick={() => onClickTitle(item.id)}>
          {item.title}
        </p>
        <time className="createDate">
          생성 날짜:
          {item.createdAt}
        </time>
      </div>
      <div>
        <button
          type="button"
          className="completeButton"
          onClick={onClickComplete}
        >
          {item.completed ? '완료 해제' : '완료'}
        </button>
        <button type="button" className="editButton">
          수정
        </button>
        <button type="button" className="deleteButton" onClick={onClickDelete}>
          삭제
        </button>
      </div>
    </article>
  );
}

export default TodoItem;
