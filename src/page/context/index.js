import React from "react";

const context = () => {
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
    return (
      <div>child</div>
    )
  }

  return (
    <Parent />
  )
}

export default context
