import React from 'react';
import dayjs from 'dayjs';

dayjs.locale('ko');

function TopInfo({ onClickAdd }) {
  return (
    <>
      <h1>Our React To Do List</h1>
      <div className="topNavbar">
        <time>
          TODAY
          {dayjs().format('YYYY.MM.DD')}
        </time>
        <button type="button" className="addButton" onClick={onClickAdd}>
          추가
        </button>
      </div>
    </>
  );
}

export default TopInfo;
