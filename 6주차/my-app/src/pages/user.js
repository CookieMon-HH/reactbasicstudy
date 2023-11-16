import { React } from "react";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";

function UserPage() {
    
    const location = useLocation();
    console.log(location);

    const [ searchParams, setSearchParams ] = useSearchParams();

    const onClickButton = () => {
        setSearchParams((prev) => ({ ...prev, user_id: 15 }));
    }

    const navigate = useNavigate();

    const onClickButton2 = () => {
        navigate("/detail");
    }

    const onClickButton3 = () => {
        navigate(-1);
        //navigate(-2);
    }

    const onClickButton4 = () => {
        navigate("/detail", { replace: true });
    }
    return (
        <>
            유저 페이지입니다.
            <ul>
                <li>hash : {location.hash}</li>
                <li>pathname : {location.pathname}</li>
                <li>search : {location.search}</li>
                <li>state : {location.state}</li>
                <li>key : {location.key}</li>
            </ul>
            <div>
                =========useSearchParams Test==========
                <div>user_id : {searchParams.get("user_id")}</div>
                <button onClick={onClickButton}>유저 아이디 변경</button>
            </div>
            <div>
                =========useNavigate Test==========
                <br/>
                <button onClick={onClickButton2}>상세 페이지로 가기</button>
                <button onClick={onClickButton3}>뒤로 가기</button>
                <button onClick={onClickButton4}>상세 페이지로 가면서 히스토리 지우기</button>
            </div>
        </>
    );
}

export default UserPage;