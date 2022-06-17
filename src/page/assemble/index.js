import React from "react";

// 类似于vue中的插槽，react可以将任意东西作为props传递

function Parent() {
  return (
    <Child left={
      <Slot/>
    } />
  )
}

function Child(props) {
  return (
    <div>{ props.left }</div>
  )
}

function Slot() {
  return (
    <div>l am left slot</div>
  )
}

export default Parent
