import React, {createContext, useContext, useState} from "react";

const context = () => {
  const C = createContext(null)

  // 爷组件
  function GrandPa() {
    const [n, setN] = useState(1)
    return (
      <C.Provider value={{n, setN}}>
        grandPa   n: {n}
        <Parent/>
      </C.Provider>
    )
  }

  // 父组件
  function Parent() {
    return (
      <div>
        parent
        <Child />
      </div>
    )
  }

  // 子组件
  function Child() {
    const {n, setN} = useContext(C)

    const add = () => {
      setN(n => n+1)
    }

    return (
      <div onClick={add}>
        <button>add</button>
        child   爷组dsa件传递的n:{n}
      </div>
    )
  }

  return (
    <GrandPa />
  )
}

export default context
