import './App.css';
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
// import Context from './page/context/index'
// import Hook from './page/hook/index'

const Context = lazy(() => import('./page/context/index'))
const Hook = lazy(() => import('./page/hook/index'))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className={'nav'}>
          <Link to={'/Hook'}>hook</Link>
          <Link to={'/context'}>context</Link>
        </div>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path={'/'} element={<Hook/>}/>
            <Route path={'/hook'} element={<Hook/>}/>
            <Route path={'/context'} element={<Context/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
