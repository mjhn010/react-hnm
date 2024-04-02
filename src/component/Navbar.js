import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar({ setAuthenticate }) {
  const authenticate = useSelector(state=>state.auth.authenticate)
  const navigate = useNavigate();
  const [width,setWidth] = useState(0)
  const [isShow,setIsShow] = useState(false)
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const goToLogin = () => {
    navigate("/login");
  };
  const goToLogout = () => {
    setAuthenticate(false);
  };
  const goToHome = () => {
    navigate("/");
  };
  const searchCheck = (event) => {
    let keyWord = event.target.value;
    if (event.key === "Enter") navigate(`/?q=${keyWord}`);
  };
  const toggle = ()=>{
    if(isShow == false){
      setWidth(250)
      setIsShow(true)
    }else{
      setWidth(0)
      setIsShow(false)
    }
  }
  return (
    <div>
      <div>
        <div className="login-btn">
          <FontAwesomeIcon className="m-r-5px" icon={faUser} />
          {authenticate == true ? (
            <button onClick={goToLogout} className="login-btn">
              로그아웃
            </button>
          ) : (
            <button onClick={goToLogin} className="login-btn">
              로그인
            </button>
          )}
        </div>
      </div>
      
      <div className="nav-logo">
      <div className="side-menu" style={{ width: width }}>
        <button className="close-btn" onClick={toggle}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className={`mobile-menu-area`}>
          <FontAwesomeIcon className={`${isShow?"d-none":""}`} onClick={toggle} icon={faBars} />
      </div>
        <img
          onClick={goToHome}
          width={100}
          src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
          alt=""
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list-box notosanskr">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
          <input
            onKeyPress={(event) => searchCheck(event)}
            className="input-class"
            type="text"
            placeholder="제품 검색"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
