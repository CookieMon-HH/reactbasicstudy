import { React } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function MainPage() {
    return (
        // {pathname: '/users', search: '', hash: '', state: null, key: 'ui75q8ib'}
        <>
            메인 페이지입니다.
            <Link to="/detail">상세 페이지로 이동</Link>
            <Link to="/users">유저 페이지로 이동</Link>
        </>
    );
}

export default MainPage;