import './detailModal.css';
import { IconClose } from 'assets/icons';

function DetailModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="detailModalWrapper">
            <aside>
                <IconClose width="40px" height="40px" className='closeButton' onClick={onClose} />
                <h1 className='modalTitle'>제목</h1>
                <p>제목</p>
                <h1 className='modalTitle'>내용</h1>
                <p>내용 데이터</p>
                <h1 className='modalTitle'>생성 날짜</h1>
                <p>생성 날짜 데이터</p>
                <h1 className='modalTitle'>수정 날짜</h1>
                <p>수정 날짜 데이터</p>
                <h1 className='modalTitle'>완료 여부</h1>
                <p>완료 여부 데이터</p>
            </aside>
        </div>
    );
}

export default DetailModal;