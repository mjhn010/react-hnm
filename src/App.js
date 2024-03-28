import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import PrivateRoute from './route/PrivateRoute';

// 1. 전체상품페이지,로그인페이지,상품디테일페이지
// 2. 전체상품페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지로 이동한다.
// 4. 로그인이 되어있을 경우에는 상품디테일페이지를 볼 수 있다.
// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 6. 로그아웃이되면 상품디테일페이지를 볼 수 없다. 로그인페이지로 전환된다.
// 7. 로그인을하면 로그아웃이보이고 로그아웃을하면 로그인이 보인다.
// 8. 상품을 검색할 수 있다.
function App() {
  const [authenticate, setAuthenticate] = useState(false) // true면 로그인
  // const [search, setSearch] = useState('')
  // const [resultSearch, setResultSearch] = useState('')

  // const searchItem = async (searchItem)=>{
  //   setSearch(searchItem)
  //   console.log(search)
  //   let url = `https://my-json-server.typicode.com/mjhn010/react-hnm/products?q=${search}`
  //   let response = await fetch(url)
  //   let data = await response.json()
  //    const filterData = data.filter((item)=>{
  //     return Object.values(item).join("").toLowerCase().includes(setSearch().toLowerCase())
  //   })
  //   setResultSearch(filterData)
  // }

  useEffect(()=>{
    console.log("authenticate",authenticate)
  },[authenticate])
  return (
    <div className="App">
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route  path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
