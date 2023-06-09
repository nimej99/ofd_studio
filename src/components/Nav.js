import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

function Nav(props) {
  const navigate = useNavigate();
  const loginCheck = (e) => {
    const loginYorN = localStorage.getItem('loginInfo');
    const loginYorNdouble = JSON.parse(loginYorN);
    const loginIdCheck = loginYorNdouble.id;
    if (loginIdCheck !== '') {
      // 로그인 상태일 경우 마이페이지로 이동
      navigate('/mypage');
    } else {
      // 로그인 상태가 아닐 경우 로그인 페이지로 이동
      navigate('/login');
    }
  };

  const loginCheck2 = (e) => {
    const loginYorN = localStorage.getItem('loginInfo');
    const loginYorNdouble = JSON.parse(loginYorN);
    const loginIdCheck = loginYorNdouble.id;
    if (loginIdCheck !== '') {
      // 로그인 상태일 경우 마이페이지로 이동
      navigate('/cart');
    } else {
      // 로그인 상태가 아닐 경우 로그인 페이지로 이동
      navigate('/login');
    }
  };

  return (
    <nav id='u_nav'>
      <ul className='nav_lnb flex'>
        <li>
          <Link to='/gnb' title='메뉴' className='flex f_center'>
            <div id='burger'>
              <span className="burger1">&nbsp;</span>
              <span className="burger2">&nbsp;</span>
              <span className="burger3">&nbsp;</span>
            </div>
            <p>메뉴</p>
          </Link>
        </li>
        <li>
          <span className='flex f_center' onClick={loginCheck}>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            <p>마이페이지</p>
          </span>
        </li>
        <li>
          <Link to='/Search' title='검색' className='flex f_center'>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            <p>검색</p>
          </Link>
        </li>
        <li>
        <span className='flex f_center' onClick={loginCheck2}>
          <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            <p>장바구니</p>
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;