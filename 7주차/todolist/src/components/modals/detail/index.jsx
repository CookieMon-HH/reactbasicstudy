import React from 'react';
import './detailModal.css';
import { IconClose } from 'assets/icons';

function DetailModal({ isOpen, onClose, item }) {
  if (!isOpen) return null;

  return (
    <div className="detailModalWrapper">
      <aside>
        <IconClose
          width="40px"
          height="40px"
          className="closeButton"
          onClick={onClose}
        />
        <h1 className="modalTitle">제목</h1>
        <p>{item.title}</p>
        <h1 className="modalTitle">내용</h1>
        <p className="itemContent">{item.content}</p>
        <h1 className="modalTitle">생성 날짜</h1>
        <p>{item.createdAt}</p>
        <h1 className="modalTitle">수정 날짜</h1>
        <p>{item.updatedAt}</p>
        <h1 className="modalTitle">완료 여부</h1>
        <p>{item.completed ? '완료' : '미완료'}</p>
      </aside>
    </div>
  );
}

export default DetailModal;
