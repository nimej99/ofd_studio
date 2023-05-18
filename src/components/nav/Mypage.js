import React from 'react';

import { Routes, Route } from 'react-router-dom';
import '../css/myclass.css';
import '../css/mypage.css';
import '../css/cart.css';
import '../css/u_qna.css';
import MypageClass from './mypage/MypageClass';
import MypageWrap from './mypage/MypageWrap';
import MypageLikeslist from './mypage/MypageLikeslist';
import MypageClassList from './mypage/MypageClassList';
import MypageReceipt from './mypage/MypageReceipt';
import MypageQnaList from './mypage/MypageQnaList';
import MypageQnaWrite from './mypage/MypageQnaWrite';

import '../css/cart.css'

function Mypage({setUserInfo, userInfo, qnalist, setQnalist, adqnaList, setadqnaList, write, setWrite, status, setStatus, zimList, setzimList, memberclasslist, setmemberClassList, searchInput, setsearchInput, }) {

  return (
  <div>
    <MypageClass userInfo={userInfo} />
    <Routes>
    <Route path='/*' element={<MypageWrap userInfo={userInfo} 
    searchInput={searchInput} setsearchInput={setsearchInput} />} />

    <Route path='/mylikes' element={<MypageLikeslist userInfo={userInfo} zimList={zimList} setzimList={setzimList} memberclasslist={memberclasslist} />} />

  
    <Route path='/myclasslist' element={<MypageClassList userInfo={userInfo} memberclasslist={memberclasslist} 
    setmemberClassList={setmemberClassList}
    status={status} setStatus={setStatus}/>} />

    <Route path='/receipt' element={<MypageReceipt userInfo={userInfo} setUserInfo={setUserInfo}
    memberclasslist={memberclasslist} 
    setmemberClassList={setmemberClassList}
    status={status} setStatus={setStatus}
    />} />

    <Route path='/qna' write={write} setWrite={setWrite} element={<MypageQnaList userInfo={userInfo} qnalist={qnalist} setQnalist={setQnalist} adqnaList={adqnaList} setadqnaList={setadqnaList} setUserInfo={setUserInfo}/>} />
    <Route path='/qnawrite' element={<MypageQnaWrite userInfo={userInfo} wirte={write} setWrite={setWrite} />} />

    </Routes>

  </div>
  );
}

export default Mypage;