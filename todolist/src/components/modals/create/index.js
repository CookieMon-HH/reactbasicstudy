import './createModal.css'

function CreateModal({isOpen, onClose, item}){
    if(!isOpen) return null;

    return (
        <div className='createModalWrapper'>
            <aside>
                <button type='button' className='colseButton' onClick={onClose}>
                    닫기
                </button>
                <h1 className='modalTitle'>제목</h1>
                <input type='text' placeholder='제목을 입력해주세요.'/>
                <h1 className='modalTitle'>내용</h1>
                <textarea placeholder='내용을 입력해주세요.' rows={12}/>
                <button type='button'>생성</button>
            </aside>
        </div>
    );
}

export default CreateModal;