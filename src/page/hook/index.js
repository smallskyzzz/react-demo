import React, {useState, useEffect} from "react";

function App() {
  const [id, setId] = useState(1)
  const [age, setAge] = useState(1)

  // React.StrictMode模式下挂载会执行两次
  // useEffect(() => {
  //   console.log('组件挂载完执行')
  //   return () => {}
  // }, [])
  useEffect(() => {
    console.log("组件挂载完及更新完执行")
  })
  // 相当于监听
  // useEffect(() => {
  //   console.log(id)
  //   // setId(id => id + 1)
  //   // const x = this.state.setId(x)
  //   // return () => {
  //   //   console.log('ddd')
  //   // }
  // }, [id, age])

  return (
    <div>
      <button onClick={() => setId(id => id + 1)}>addId</button>
      { id }
      <button onClick={() => setAge(age => age + 1)}>addAge</button>
      { age }
    </div>
  )
}

export default App
