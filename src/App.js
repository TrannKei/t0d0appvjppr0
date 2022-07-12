import logo from './logo.svg';
import './App.css';
import { NavBar } from './component/navbar';
import { createContext, useState, useContext, Children } from 'react';
import { Routes, Route, Outlet, Link, useNavigate, BrowserRouter, } from "react-router-dom";
import { Switch } from 'react-router'
import { AddTodo } from './component/add-todo';
import { Done } from './component/done';
import { Del } from './component/del';
export const UserContext = createContext({})
function App() {
  const [data, setData] = useState([])
  





  return (
    <UserContext.Provider value={[data, setData]}>
      <BrowserRouter>
     
          <NavBar />
        <Routes path="/" element={<NavBar />}>
          <Route path="todo" element={<AddTodo />} ></Route>
          <Route path="done" element={<Done />} ></Route>
          <Route path="del" element={<Del />} ></Route>
        </Routes>
      </BrowserRouter>
    </ UserContext.Provider>

  );
}

export default App;
