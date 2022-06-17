import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Context from './page/context/index'
import Hook from './page/hook/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className={'nav'}>
          <Link to={'/Hook'}>hook</Link>
          <Link to={'/context'}>context</Link>
        </div>
        <Routes>
          <Route path={'/'} element={<Hook/>}/>
          <Route path={'/hook'} element={<Hook/>}/>
          <Route path={'/context'} element={<Context/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
