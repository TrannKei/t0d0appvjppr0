import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App1 from './App';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './component/navbar';
import { createContext, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import { AddTodo } from './component/add-todo';
import { Done } from './component/done';
import { Del } from './component/del';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
