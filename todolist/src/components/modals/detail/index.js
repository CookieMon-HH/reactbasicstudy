import './detailModal.css'

function DetailModal({isOpen, onClose, item}){
    if(!isOpen) return null;

    return (
        <div className='detailModalWrapper'>
            <aside>
                <button type='button' className='colseButton' onClick={onClose}>
                    닫기
                </button>
                <h1 className='modalTitle'>제목</h1>
                <p>{item.title}</p>
                <h1 className='modalTitle'>내용</h1>
                <p className='itemContent'>{item.content}</p>
                <h1 className='modalTitle'>생성 날짜</h1>
                <p>{item.createdAt}</p>
                <h1 className='modalTitle'>수정 날짜</h1>
                <p>{item.updatedAt}</p>
                <h1 className='modalTitle'>완료 여부</h1>
                <p>{item.isComplete ? "완료" : "미완료"}</p>
            </aside>
        </div>
    );
}

export default DetailModal;