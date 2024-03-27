import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
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
  return (
    <div>
      <div>
        <div className="login-btn">
          <FontAwesomeIcon className="m-r-5px" icon={faUser} />
          <button onClick={()=>navigate("/login")} className="login-btn">로그인</button>
        </div>
      </div>
      <div className="nav-logo">
        <img onClick={()=>navigate("/")}
          width={100}
          src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list-box notosanskr">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
        <div className="search-box">
            <FontAwesomeIcon className="search-icon" icon={faSearch}/>
            <input className="input-class" type="text" placeholder="제품 검색"/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
