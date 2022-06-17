import './App.css';
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
// import Context from './page/context/index'
// import Hook from './page/hook/index'

const Context = lazy(() => import('./page/context/index'))
const Hook = lazy(() => import('./page/hook/index'))
const Assemble = lazy(() => import('./page/assemble/index'))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className={'nav'}>
          <Link to={'/Hook'}>hook</Link>
          <Link to={'/context'}>context</Link>
          <Link to={'/assemble'}>组合</Link>
        </div>
        {/*外面可再包一层err组件处理加载失败异常*/}
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path={'/'} element={<Hook/>}/>
            <Route path={'/hook'} element={<Hook/>}/>
            <Route path={'/context'} element={<Context/>}/>
            <Route path={'/assemble'} element={<Assemble/>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
